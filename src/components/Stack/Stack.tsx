import { Children as ReactChildren, ComponentProps, Fragment } from 'react';
import { forwardRef } from 'react';
import { Space } from '~/components/Space/Space';
import { Box } from '~/components/Box/Box';
import { Children } from '~/utils/typing/children';

export type StackProps = Omit<ComponentProps<typeof Space>, 'size' | 'fluid'> &
  Omit<ComponentProps<typeof Box>, 'size'> & {
    children: Children[];
    divider?: Children;
  } & (
    | {
        fluid?: never;
        gap: number;
      }
    | {
        fluid: boolean;
        gap?: never;
      }
  );

export const Stack = forwardRef<HTMLElement, StackProps>((props, ref) => {
  const { children, fluid, gap, divider, ...boxProps } = props;

  if (!divider) {
    return (
      <Box
        {...boxProps}
        ref={ref}
        style={{
          gap: gap,
          justifyContent: fluid ? 'space-between' : undefined,
          ...boxProps.style,
          ...props.style,
        }}
        height={fluid && boxProps.column ? '100%' : props.height}
        width={fluid && !boxProps.column ? '100%' : props.width}
        data-test-id={props['data-test-id']}
      >
        {children}
      </Box>
    );
  } else {
    return (
      <Box
        {...boxProps}
        ref={ref}
        style={{
          gap: gap ? gap * 0.5 : undefined,
          justifyContent: fluid ? 'space-between' : undefined,
          ...boxProps.style,
          ...props.style,
        }}
        height={fluid && boxProps.column ? '100%' : props.height}
        width={fluid && !boxProps.column ? '100%' : props.width}
        data-test-id={props['data-test-id']}
      >
        {ReactChildren.map(children, (child, index) => (
          <Fragment key={index}>
            {child}
            {index < ReactChildren.count(children) - 1 && divider}
          </Fragment>
        ))}
      </Box>
    );
  }
});
