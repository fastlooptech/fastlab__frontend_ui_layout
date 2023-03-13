import React, {
  Children as ReactChildren,
  createElement,
  cloneElement,
  CSSProperties,
  Fragment,
  useEffect,
  useMemo,
  useState,
  createRef,
  PropsWithChildren,
} from "react";
import { forwardRef } from "react";
import { Children } from "~/utils/typing/children";
import { SPACE_UNIT } from "~/utils/constants";
import { Box } from "~/index";

export type ContainerProps = PropsWithChildren<{
  "data-test-id"?: string;
  rows: number;
  cols: number;
  rowsGap?: number;
  colsGap?: number;
  className?: string;
  style?: CSSProperties;
}> & {
  children: React.ReactElement | React.ReactElement[];
};

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children } = props;
  const [invalidError, setInvalidError] = useState(false);
  const errorMessage =
    "invalid child type, all children should be <Grid.Item />";

  const cloned = useMemo(
    () =>
      React.Children.map(children, (child) =>
        cloneElement(child, { ref: createRef() })
      ),
    [children]
  );

  useEffect(() => {
    if (Array.isArray(cloned)) {
      let count = 0;
      cloned.forEach((child) => {
        if (
          child.ref?.current.dataset.check &&
          child.ref?.current.dataset.check === "grid-item"
        )
          count++;
      });
      if (cloned.length !== count) {
        console.error(errorMessage);
        setInvalidError(true);
      } else {
        setInvalidError(false);
      }
    }
  }, [cloned]);

  const cssStyle: CSSProperties = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
      gridTemplateRows: `repeat(${props.rows}, 1fr)`,
      columnGap: SPACE_UNIT * (props.colsGap || 0),
      rowGap: SPACE_UNIT * (props.rowsGap || 0),
      ...props.style,
    }),
    [props.rows, props.rowsGap, props.cols, props.colsGap, props.style]
  );

  return (
    <div
      ref={ref}
      style={cssStyle}
      data-test-id={props["data-test-id"]}
      className={props.className}
    >
      {invalidError ? (
        <div>{errorMessage}</div>
      ) : (
        cloned?.map((item, index) => <Fragment key={index}>{item}</Fragment>)
      )}
    </div>
  );
});

export type ItemProps = {
  "data-test-id"?: string;
  children: Children;
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
  justifySelf?: "start" | "end" | "center" | "stretch";
  alignSelf?: "start" | "end" | "center" | "stretch";
  className?: string;
  style?: CSSProperties;
};

const Item = forwardRef<HTMLElement, ItemProps>((props, ref) => {
  const { children } = props;

  const cssStyle: CSSProperties = useMemo(
    () => ({
      gridColumnStart: props.colStart,
      gridColumnEnd: props.colEnd,
      gridRowStart: props.rowStart,
      gridRowEnd: props.rowEnd,
      justifySelf: props.justifySelf,
      alignSelf: props.alignSelf,
      ...props.style,
    }),
    [props.colStart, props.colEnd, props.rowStart, props.rowEnd, props.style]
  );

  return createElement(
    Box,
    {
      vAlignContent: "center",
      hAlignContent: "center",
      ref: ref,
      className: props.className,
      style: cssStyle,
      "data-test-id": props["data-test-id"],
      "data-check": "grid-item",
    },
    ReactChildren.map(children, (child, index) => (
      <Fragment key={index}>{child}</Fragment>
    ))
  );
});

export const Grid = {
  Container,
  Item,
};
