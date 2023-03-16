import { Meta } from "@storybook/react/types-6-0";
import { Box } from "../Box/Box";
import { Grid } from "./Grid";

export default {
  title: "Foundations/Grid",
  components: [Grid.Container, Grid.Item],
} as Meta;

export const AutoFill = () => (
  <Grid.Container
    style={{
      background: "lightgrey",
    }}
    rows={3}
    cols={2}
  >
    <Grid.Item
      style={{
        background: "red",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "orange",
        }}
      />
    </Grid.Item>
    <Grid.Item
      style={{
        background: "green",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "lime",
        }}
      />
    </Grid.Item>
    <Grid.Item
      style={{
        background: "yellow",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "gold",
        }}
      />
    </Grid.Item>
  </Grid.Container>
);

export const WithGaps = () => (
  <Grid.Container
    style={{
      background: "lightgrey",
    }}
    rows={3}
    cols={2}
    colsGap={8}
    rowsGap={3}
  >
    <Grid.Item
      style={{
        background: "red",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "orange",
        }}
      />
    </Grid.Item>
    <Grid.Item
      style={{
        background: "green",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "lime",
        }}
      />
    </Grid.Item>
    <Grid.Item
      style={{
        background: "yellow",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "gold",
        }}
      />
    </Grid.Item>
  </Grid.Container>
);

export const ItemsPositioning = () => (
  <Grid.Container
    style={{
      background: "lightgrey",
    }}
    rows={4}
    cols={2}
  >
    <Grid.Item
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={3}
      style={{
        background: "red",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "orange",
        }}
      />
    </Grid.Item>
    <Grid.Item
      colStart={2}
      colEnd={2}
      rowStart={2}
      rowEnd={4}
      style={{
        background: "green",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "lime",
        }}
      />
    </Grid.Item>
    <Grid.Item
      colStart={1}
      rowStart={4}
      style={{
        background: "yellow",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "gold",
        }}
      />
    </Grid.Item>
  </Grid.Container>
);

export const ItemsSelfJustifyAlign = () => (
  <Grid.Container
    style={{
      background: "lightgrey",
    }}
    rows={4}
    cols={2}
  >
    <Grid.Item
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={3}
      justifySelf="start"
      style={{
        background: "red",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "orange",
        }}
      />
    </Grid.Item>
    <Grid.Item
      colStart={2}
      colEnd={2}
      rowStart={2}
      rowEnd={4}
      alignSelf="end"
      style={{
        background: "green",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "lime",
        }}
      />
    </Grid.Item>
    <Grid.Item
      colStart={1}
      rowStart={4}
      justifySelf="center"
      style={{
        background: "yellow",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "gold",
        }}
      />
    </Grid.Item>
  </Grid.Container>
);

export const SingleChildPositioned = () => (
  <Grid.Container
    style={{
      background: "lightgrey",
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
        background: "green",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "lime",
        }}
      />
    </Grid.Item>
  </Grid.Container>
);

export const TypeError = () => (
  <Grid.Container
    style={{
      background: "lightgrey",
    }}
    rows={4}
    cols={2}
  >
    <div></div>

    <Grid.Item
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={3}
      justifySelf="start"
      style={{
        background: "red",
      }}
    >
      <Box
        width={100}
        height={100}
        style={{
          background: "orange",
        }}
      />
    </Grid.Item>
  </Grid.Container>
);
