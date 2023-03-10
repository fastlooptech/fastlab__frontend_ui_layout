import { Meta } from '@storybook/react/types-6-0';
import { Box } from '../Box/Box';
import { Space } from './Space';

export default {
  title: 'Foundations/Space',
  component: Space,
} as Meta;

export const Horizontal = () => (
  <Box>
    <span>Start</span>
    <Space
      units={2}
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
      units={2}
      style={{
        background: 'lightgray',
        width: '16px',
      }}
    />
    <span>End</span>
  </Box>
);
