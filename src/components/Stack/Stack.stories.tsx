import { Meta } from "@storybook/react/types-6-0";
import { Box } from "../Box/Box";
import { Stack } from "./Stack";

export default {
  title: "Foundations/Stack",
  component: Stack,
} as Meta;

const SPACE_UNIT = 8;

const Item = () => (
  <Box width={24} height={24} style={{ background: "#00E3D8" }} />
);

export const RowDefinedGap = () => (
  <Box>
    <Stack
      gap={3 * SPACE_UNIT}
      style={{
        background: "#EAEAFB",
      }}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </Box>
);

export const ColumnDefinedGap = () => (
  <Box>
    <Stack
      column
      gap={3 * SPACE_UNIT}
      style={{
        background: "#EAEAFB",
      }}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </Box>
);

export const RowFluid = () => (
  <div
    style={{
      width: "400px",
      background: "#EAEAFB",
    }}
  >
    <Stack fluid grow>
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </div>
);

export const ColumnFluid = () => (
  <Box>
    <div
      style={{
        height: "400px",
        background: "#EAEAFB",
      }}
    >
      <Stack column fluid grow>
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    </div>
  </Box>
);

export const ColumnDivider = () => (
  <Box>
    <Stack
      column
      gap={3 * SPACE_UNIT}
      style={{
        background: "#EAEAFB",
      }}
      divider={<Box width={24} height={4} style={{ background: "#BC00FE" }} />}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </Box>
);

export const RowDivider = () => (
  <Box>
    <Stack
      gap={3 * SPACE_UNIT}
      style={{
        background: "#EAEAFB",
      }}
      shrink
      divider={<Box width={4} height={24} style={{ background: "#BC00FE" }} />}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </Stack>
  </Box>
);

export const WithUndefinedElement = () => (
  <Box>
    <Stack
      gap={3 * SPACE_UNIT}
      style={{
        background: "#EAEAFB",
      }}
    >
      <Item />
      <Item />
      {undefined}
      <Item />
    </Stack>
  </Box>
);
