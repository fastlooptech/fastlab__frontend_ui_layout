import { createElement, CSSProperties, forwardRef, useCallback, useEffect, useMemo } from 'react';
import { logger } from '~/utils/logger';
import { BoxProps, BoxPropsOverride } from './BoxTyping';

function some(array: any[], predicate: (v: any) => boolean): boolean {
  return array.filter(predicate).length > 0;
}

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const logWarnings = useCallback((): void => {
    if (props.basis === 'auto') {
      logger.warn('basis is "auto" by default: forcing it to "auto"  will leave "shrink:true" as default');
    }

    if (
      process.env.NODE_ENV !== 'production' &&
      typeof props.children !== 'undefined' &&
      !props.column &&
      props.hAlignContent === 'center'
    ) {
      const atLeastOneChildHasHMarginAuto = some([].concat(props.children as any), (child: any) => {
        const props = (typeof child === 'object' && child !== null ? child.props : undefined) || {};
        const style = props.style || {};

        const marginLeft = style.marginLeft || props.marginLeft;
        const marginRight = style.marginRight || props.marginRight;
        return marginLeft === 'auto' && marginRight === 'auto';
      });

      atLeastOneChildHasHMarginAuto &&
        logger.warn(
          'In a row with hAlignContent="center" there should be no child with marginLeft and marginRight set to "auto"\nhttps://github.com/buildo/react-flexview/issues/30'
        );
    }

    if (
      process.env.NODE_ENV !== 'production' &&
      typeof props.children !== 'undefined' &&
      props.column &&
      props.vAlignContent === 'center'
    ) {
      const atLeastOneChildHasVMarginAuto = some([].concat(props.children as any), (child: any) => {
        const props = (typeof child === 'object' && child !== null ? child.props : undefined) || {};
        const style = props.style || {};

        const marginTop = style.marginTop || props.marginTop;
        const marginBottom = style.marginBottom || props.marginBottom;
        return marginTop === 'auto' && marginBottom === 'auto';
      });

      atLeastOneChildHasVMarginAuto &&
        logger.warn(
          'In a column with vAlignContent="center" there should be no child with marginTop and marginBottom set to "auto"'
        );
    }
  }, [props]);

  useEffect(() => {
    logWarnings();
  }, [props]);

  const grow = useMemo(() => {
    if (typeof props.grow === 'number') {
      return props.grow;
    } else if (props.grow) {
      return 1;
    }
    return 0; // default
  }, [props.grow]);

  const shrink = useMemo(() => {
    if (typeof props.shrink === 'number') {
      return props.shrink;
    } else if (props.shrink) {
      return 1;
    } else if (props.shrink === false) {
      return 0;
    }

    if (props.basis && props.basis !== 'auto') {
      return 0;
    }

    return 1; // default
  }, [props.shrink, props.basis]);

  const alignPropToFlex = useCallback((align: BoxProps['vAlignContent'] | BoxProps['hAlignContent']) => {
    switch (align) {
      case 'top':
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'bottom':
      case 'right':
        return 'flex-end';
    }
  }, []);

  const basis: string = useMemo(() => {
    if (props.basis) {
      const basisAsString = String(props.basis);
      const isBasisANumber = typeof props.basis === 'number';
      const isBasisANumberString = String(parseInt(basisAsString, 10)) === basisAsString;
      const suffix = isBasisANumber || isBasisANumberString ? 'px' : '';
      return basisAsString + suffix;
    } else return 'auto'; // default
  }, [props.basis]);

  const style: CSSProperties = useMemo(() => {
    const size = {
      width: props.width,
      height: props.height,
      marginLeft: props.marginLeft,
      marginTop: props.marginTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
    };

    return {
      boxSizing: 'border-box',

      // some browsers don't set these by default on flex
      minWidth: 0,
      minHeight: 0,

      // flex properties
      display: 'flex',
      flexDirection: props.column ? 'column' : 'row',
      flexWrap: props.wrap ? 'wrap' : 'nowrap',
      flex: `${grow} ${shrink} ${basis}`,
      justifyContent: alignPropToFlex(props.column ? props.vAlignContent : props.hAlignContent),
      alignItems: alignPropToFlex(props.column ? props.hAlignContent : props.vAlignContent),
      cursor: props.onClick ? 'pointer' : undefined,

      // style passed through props
      ...size,
      ...props.style,
    };
  }, [
    props.column,
    props.wrap,
    props.vAlignContent,
    props.hAlignContent,
    props.width,
    props.height,
    props.marginLeft,
    props.marginTop,
    props.marginRight,
    props.marginBottom,
    props.grow,
    props.shrink,
    props.basis,
    props.style,
  ]);

  const HTMLElementProps = useMemo((): BoxProps & { [k in keyof BoxPropsOverride]?: never } => {
    const {
      children,
      className,
      style,
      column,
      grow,
      shrink,
      basis,
      wrap,
      vAlignContent,
      hAlignContent,
      width,
      height,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      component,
      'data-test-id': dataTestId,
      ...rest
    } = props;

    return rest;
  }, [props]);

  return createElement(props.component || 'div', {
    ref,
    className: props.className,
    children: props.children,
    style,
    autoComplete: props.component === 'form' && !props.autoComplete ? 'off' : props.autoComplete,
    'data-test-id': props['data-test-id'],
    ...HTMLElementProps,
  });
});
