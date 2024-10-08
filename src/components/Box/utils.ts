import { BoxProps, BoxPropsOverride } from "./BoxTyping";

export function calcGrow(value: BoxProps["grow"]) {
  if (typeof value === "number") {
    return value;
  } else if (value) {
    return 1;
  }
  return 0; // default
}
export function calcShrink(
  shrink: BoxProps["shrink"],
  basis: BoxProps["basis"]
) {
  switch (true) {
    case typeof shrink === "number":
      return shrink;
    case shrink:
      return 1;
    case shrink === false:
      return 0;
    case basis && basis !== "auto":
      return 1;
    default:
      return 1;
  }
}

export function calcBasis(basis: BoxProps["basis"]) {
  if (basis) {
    const basisAsString = String(basis);
    const isBasisANumber = typeof basis === "number";
    const isBasisANumberString =
      String(parseInt(basisAsString, 10)) === basisAsString;
    const suffix = isBasisANumber || isBasisANumberString ? "px" : "";
    return basisAsString + suffix;
  } else return "auto"; // default
}

export function alignPropToFlex(
  align: BoxProps["vAlignContent"] | BoxProps["hAlignContent"]
) {
  switch (align) {
    case "top":
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
    case "right":
      return "flex-end";
  }
}

export function getHTMLElementProps(
  props: BoxProps
): BoxProps & { [k in keyof BoxPropsOverride]?: never } {
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
    "data-test-id": dataTestId,
    ...rest
  } = props;

  return rest;
}
