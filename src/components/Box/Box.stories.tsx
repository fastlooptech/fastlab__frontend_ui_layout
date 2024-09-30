import { Meta } from "@storybook/react/types-6-0";
import { Box } from "../Box/Box";

export default {
  title: "Foundations/Box",
  component: Box,
} as Meta;

const Item = () => (
  <Box width={50} height={50} style={{ background: "#00E3D8" }} />
);

export const Default = () => {
  return (
    <div className="flex w-full">
      <Box
        width={300}
        height={300}
        style={{ background: "lightblue", margin: "auto" }}
      />
    </div>
  );
};

export const WithChildrenRow = () => {
  return (
    <Box style={{ gap: 24, margin: "auto", width: "100%" }}>
      <Item />
      <Item />
      <Item />
    </Box>
  );
};

export const WithChildrenColumn = () => {
  return (
    <Box column style={{ gap: 24, margin: "auto", width: "100%" }}>
      <Item />
      <Item />
      <Item />
    </Box>
  );
};
