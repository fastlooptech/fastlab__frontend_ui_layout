import { Children as ReactChildren, ComponentProps, Fragment } from 'react';
import { forwardRef } from 'react';
import { Space } from '~/components/Space/Space';
import { Box } from '~/components/Box/Box';
import { Children } from '~/utils/typing/children';
import { SPACE_UNIT } from '~/utils/constants';

export type StackProps = ComponentProps<typeof Space> &
  ComponentProps<typeof Box> & {
    children: Children[];
    divider?: Children;
  };

export const Stack = forwardRef<HTMLElement, StackProps>((props, ref) => {
  const { children, fluid, units, divider, ...boxProps } = props;

  if (!divider) {
    return (
      <Box
        {...boxProps}
        ref={ref}
        style={{
          gap: units ? units * SPACE_UNIT : undefined,
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
          gap: units ? units * 0.5 * SPACE_UNIT : undefined,
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
