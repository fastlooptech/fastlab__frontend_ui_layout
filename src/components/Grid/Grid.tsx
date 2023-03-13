import React, {
  Children as ReactChildren,
  createElement,
  CSSProperties,
  Fragment,
  useEffect,
  useMemo,
  useState,
} from "react";
import { forwardRef } from "react";
import { Children } from "~/utils/typing/children";
import { SPACE_UNIT } from "~/utils/constants";
import { Box } from "~/index";

export type ContainerProps = {
  "data-test-id"?: string;
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
  rows: number;
  cols: number;
  rowsGap?: number;
  colsGap?: number;
  className?: string;
  style?: CSSProperties;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children } = props;
  const [invalidError, setInvalidError] = useState(false);

  useEffect(() => {
    React.Children.forEach(children, (child) => {
      console.log("child", child, this);

      // INFO: "data-test-id" prop is not logged in console, but is present in DOM
      if (!child.props["data-test-id"]?.includes("grid-item-")) {
        console.error("invalid child type");
        setInvalidError(true);
      }
    });
  }, [props.children]);

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
        <div>children should be Grid.items</div>
      ) : (
        ReactChildren.map(children, (child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))
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

  // TODO: typecheck the parent, must be typeof Grid.Container

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
      "data-test-id": `grid-item-${props["data-test-id"]}`,
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
