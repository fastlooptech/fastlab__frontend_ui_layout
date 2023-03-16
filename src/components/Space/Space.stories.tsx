import { Meta } from '@storybook/react/types-6-0';
import { Box } from '../Box/Box';
import { Space } from './Space';

export default {
  title: 'Foundations/Space',
  component: Space,
} as Meta;

const SPACE_UNIT = 8;

export const Horizontal = () => (
  <Box>
    <span>Start</span>
    <Space
      size={2 * SPACE_UNIT}
      style={{
        background: 'lightgray',
        height: '16px',
      }}
    />
    <span>End</span>
  </Box>
);

export const Vertical = () => (
  <Box column>
    <span>Start</span>
    <Space
      size={2 * SPACE_UNIT}
      style={{
        background: 'lightgray',
        width: '16px',
      }}
    />
    <span>End</span>
  </Box>
);
