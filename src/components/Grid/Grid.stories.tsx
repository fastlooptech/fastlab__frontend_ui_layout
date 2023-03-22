import { Meta } from '@storybook/react/types-6-0';
import { Box } from '../Box/Box';
import { Grid } from './Grid';
import palette from '../../../assets/fl-color-palette.json';

export default {
  title: 'Foundations/Grid',
  components: [Grid.Container, Grid.Item],
} as Meta;

export const AutoFill = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    rows={3}
    cols={2}
    colsGap={8}
    rowsGap={3}
  >
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);

export const WithGaps = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    cols={2}
    rows={2}
    colsGap={8}
    rowsGap={8}
  >
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);

export const ItemsPositioning = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    rows={4}
    cols={2}
    rowsGap={8}
    colsGap={8}
  >
    <Grid.Item
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={3}
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      colStart={2}
      colEnd={2}
      rowStart={2}
      rowEnd={4}
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      colStart={1}
      rowStart={4}
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);

export const ItemsSelfJustifyAlign = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    rows={4}
    cols={2}
  >
    <Grid.Item
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={2}
      justifySelf="start"
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      colStart={2}
      rowStart={3}
      rowEnd={4}
      justifySelf="end"
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
    <Grid.Item
      colStart={1}
      rowStart={4}
      justifySelf="center"
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);

export const SingleChildPositioned = () => (
  <Grid.Container
    style={{
      background: palette.neutral[100],
    }}
    rows={4}
    cols={2}
  >
    <Grid.Item
      colStart={2}
      colEnd={2}
      rowStart={2}
      rowEnd={4}
      style={{
        background: palette.neutral[300],
      }}
    >
      <Box width={100} height={100} />
    </Grid.Item>
  </Grid.Container>
);
