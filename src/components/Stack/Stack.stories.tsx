import { Meta } from '@storybook/react/types-6-0';
import { Box } from '../Box/Box';
import { Stack } from './Stack';

export default {
  title: 'Foundations/Stack',
  component: Stack,
} as Meta;

export const RowUnits3 = () => (
  <Stack
    units={3}
    style={{
      background: '#f0f0f0',
    }}
  >
    <Box
      width={24}
      height={24}
      style={{
        background: 'lightgray',
      }}
    />
    <Box
      width={24}
      height={24}
      style={{
        background: 'lightgray',
      }}
    />
    <Box
      width={24}
      height={24}
      style={{
        background: 'lightgray',
      }}
    />
    <Box
      width={24}
      height={24}
      style={{
        background: 'lightgray',
      }}
    />
  </Stack>
);

export const ColumnUnits3 = () => (
  <Stack
    column
    units={3}
    style={{
      background: '#f0f0f0',
    }}
  >
    <Box
      width={24}
      height={24}
      style={{
        background: 'lightgray',
      }}
    />
    <Box
      width={24}
      height={24}
      style={{
        background: 'lightgray',
      }}
    />
    <Box
      width={24}
      height={24}
      style={{
        background: 'lightgray',
      }}
    />
    <Box
      width={24}
      height={24}
      style={{
        background: 'lightgray',
      }}
    />
  </Stack>
);

export const RowFluid = () => (
  <div
    style={{
      width: '400px',
      background: '#f0f0f0',
    }}
  >
    <Stack fluid grow>
      <Box
        width={24}
        height={24}
        style={{
          background: 'lightgray',
        }}
      />
      <Box
        width={24}
        height={24}
        style={{
          background: 'lightgray',
        }}
      />
      <Box
        width={24}
        height={24}
        style={{
          background: 'lightgray',
        }}
      />
      <Box
        width={24}
        height={24}
        style={{
          background: 'lightgray',
        }}
      />
    </Stack>
  </div>
);

export const ColumnFluid = () => (
  <div
    style={{
      height: '400px',
      background: '#f0f0f0',
    }}
  >
    <Stack column fluid grow>
      <Box
        width={24}
        height={24}
        style={{
          background: 'lightgray',
        }}
      />
      <Box
        width={24}
        height={24}
        style={{
          background: 'lightgray',
        }}
      />
      <Box
        width={24}
        height={24}
        style={{
          background: 'lightgray',
        }}
      />
      <Box
        width={24}
        height={24}
        style={{
          background: 'lightgray',
        }}
      />
    </Stack>
  </div>
);
