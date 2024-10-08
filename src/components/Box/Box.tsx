import { createElement, forwardRef } from "react";
import { BoxProps } from "./BoxTyping";
import {
  alignPropToFlex,
  calcBasis,
  calcGrow,
  calcShrink,
  getHTMLElementProps,
} from "./utils";

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  return createElement(props.component || "div", {
    ref,
    className: props.className,
    style: {
      boxSizing: "border-box",
      // some browsers don't set these by default on flex
      minWidth: 0,
      minHeight: 0,
      // flex properties
      display: "flex",
      flexDirection: props.column ? "column" : "row",
      flexWrap: props.wrap ? "wrap" : "nowrap",
      flex: `${calcGrow(props.grow)} ${calcShrink(
        props.shrink,
        props.basis
      )} ${calcBasis(props.basis)}`,
      justifyContent: alignPropToFlex(
        props.column ? props.vAlignContent : props.hAlignContent
      ),
      alignItems: alignPropToFlex(
        props.column ? props.hAlignContent : props.vAlignContent
      ),
      cursor: props.onClick ? "pointer" : undefined,
      width: props.width,
      height: props.height,
      marginLeft: props.marginLeft,
      marginTop: props.marginTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
      ...props.style,
    },
    autoComplete:
      props.component === "form" && !props.autoComplete
        ? "off"
        : props.autoComplete,
    "data-test-id": props["data-test-id"],
    ...getHTMLElementProps(props),
  },
  props.children
  );
});
