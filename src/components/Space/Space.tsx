import { CSSProperties, forwardRef } from "react";
import { Box } from "~/components/Box/Box";

export type SpaceProps = {
  "data-test-id"?: string;
  /**
   * The class name to be applied to the component.
   * It can be used for CSS customizations.
   * @default ""
   * @optional
   * @type string
   */
  className?: string;
  /**
   * The custom CSS properties to be applied to the component.
   * This value will be merged with the default styles.
   * @default {}
   * @optional
   * @type CSSProperties
   */
  style?: CSSProperties;
} & (
  | {
      /**
       * The space size.
       * @type number
       */
      size: number;
      fluid?: never;
    }
  | {
      /**
       * The space will fill the space.
       * @type boolean
       */
      fluid: boolean;
      size?: never;
    }
);

export const Space = forwardRef<HTMLDivElement, SpaceProps>(
  (props, forwardedRef) => {
    return (
      <Box
        data-test-id={props["data-test-id"]}
        style={props.style}
        className={props.className}
        ref={forwardedRef}
        {...boxProps(
          forwardedRef instanceof HTMLDivElement ? forwardedRef : null,
          props.size
        )}
        grow={props.fluid}
        shrink={props.fluid}
      />
    );
  }
);

function boxProps(parentElement: HTMLElement | null, size: number | undefined) {
  const parentDirection = getParentDirection(parentElement);

  switch (parentDirection) {
    case "row":
      const width = size;
      return { width, basis: width };
    case "column":
      const height = size;
      return { height, basis: height };
    default:
      return {};
  }
}

function getParentDirection(
  parentElement: HTMLElement | null
): "column" | "row" {
  if (!parentElement) return "row";
  const flexDirection = getComputedStyle(parentElement).flexDirection;
  return flexDirection === "column" ? "column" : "row";
}
