import { mount } from "cypress/react";
import { Box } from "~/index";
import { Grid } from "./Grid";

const SPACE_UNIT = 8;

it("Grid Container should have correct css props", () => {
  mount(
    <Grid.Container
      rows={3}
      cols={2}
      colsGap={SPACE_UNIT * 4}
      rowsGap={SPACE_UNIT}
      data-test-id="grid-container"
      style={{
        background: "red",
      }}
    >
      <Grid.Item data-test-id="grid-item-1">
        <Box width={100} height={100} />
      </Grid.Item>
    </Grid.Container>
  );
  cy.get('[data-test-id="grid-container"]')
    .should("exist")
    .should(
      "have.attr",
      "style",
      `display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(3, 1fr); gap: ${SPACE_UNIT}px ${
        SPACE_UNIT * 4
      }px; background: red;`
    );
});

it("Grid Container should have correct children", () => {
  mount(
    <Grid.Container rows={3} cols={2} data-test-id="grid-container">
      <Grid.Item data-test-id="grid-item-1">
        <Box width={100} height={100} />
      </Grid.Item>
      <Grid.Item data-test-id="grid-item-2">
        <Box width={100} height={100} />
      </Grid.Item>
      <Grid.Item data-test-id="grid-item-3">
        <Box width={100} height={100} />
      </Grid.Item>
    </Grid.Container>
  );
  cy.get('[data-test-id="grid-container"]').children().should("have.length", 3);

  cy.get('[data-test-id="grid-container"]')
    .should("exist")
    .find('[data-test-id="grid-item-1"]')
    .should("exist");
  cy.get('[data-test-id="grid-container"]')
    .should("exist")
    .find('[data-test-id="grid-item-2"]')
    .should("exist");
  cy.get('[data-test-id="grid-container"]')
    .should("exist")
    .find('[data-test-id="grid-item-3"]')
    .should("exist");
  cy.get('[data-test-id="grid-container"]')
    .should("exist")
    .find('[data-test-id="grid-item-4"]')
    .should("not.exist");
});

it("Grid Items should have correct parent", () => {
  mount(
    <Grid.Container rows={3} cols={2} data-test-id="grid-container">
      <Grid.Item data-test-id="grid-item-1">
        <Box width={100} height={100} />
      </Grid.Item>
      <Grid.Item data-test-id="grid-item-2">
        <Box width={100} height={100} />
      </Grid.Item>
      <Grid.Item data-test-id="grid-item-3">
        <Box width={100} height={100} />
      </Grid.Item>
    </Grid.Container>
  );
  cy.get('[data-test-id="grid-item-1"]')
    .should("exist")
    .parent('[data-test-id="grid-container"]');
  cy.get('[data-test-id="grid-item-2"]')
    .should("exist")
    .parent('[data-test-id="grid-container"]');
  cy.get('[data-test-id="grid-item-3"]')
    .should("exist")
    .parent('[data-test-id="grid-container"]');
});

it("Grid Items should have correct css", () => {
  mount(
    <Grid.Container rows={3} cols={2} data-test-id="grid-container">
      <Grid.Item
        colStart={1}
        colEnd={3}
        rowStart={1}
        rowEnd={3}
        data-test-id="grid-item-1"
        style={{
          background: "yellow",
        }}
      >
        <Box width={100} height={100} />
      </Grid.Item>
      <Grid.Item
        colStart={2}
        colEnd={2}
        rowStart={2}
        rowEnd={4}
        data-test-id="grid-item-2"
        style={{
          background: "green",
        }}
      >
        <Box width={100} height={100} />
      </Grid.Item>
      <Grid.Item
        colStart={1}
        rowStart={4}
        data-test-id="grid-item-3"
        style={{
          background: "red",
        }}
      >
        <Box width={100} height={100} />
      </Grid.Item>
    </Grid.Container>
  );
  cy.get('[data-test-id="grid-item-1"]')
    .should("exist")
    .should(
      "have.attr",
      "style",
      `grid-area: 1 / 1 / 3 / 3; background: yellow;`
    );
  cy.get('[data-test-id="grid-item-2"]')
    .should("exist")
    .should(
      "have.attr",
      "style",
      `grid-area: 2 / 2 / 4 / 2; background: green;`
    );
  cy.get('[data-test-id="grid-item-3"]')
    .should("exist")
    .should(
      "have.attr",
      "style",
      `grid-column-start: 1; grid-row-start: 4; background: red;`
    );
});
