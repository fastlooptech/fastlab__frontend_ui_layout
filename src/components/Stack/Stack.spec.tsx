import { mount } from 'cypress/react';
import { Box } from '~/index';
import { Stack } from './Stack';

const Item = () => <Box width={24} height={24} />;

describe('Stack', () => {
  it('should render successfully', () => {
    mount(
      <Stack data-test-id="stack" gap={24}>
        <Item />
        <Item />
        <Item />
      </Stack>
    );

    cy.get('[data-test-id="stack"]').should('exist');
    cy.get('[data-test-id="stack"]').children().should('have.length', 3);
  });

  it('should render divider', () => {
    mount(
      <Stack
        data-test-id="stack"
        gap={24}
        divider={<Box width={24} height={4} style={{ background: '#BC00FE' }} data-test-id="divider" />}
      >
        <Item />
        <Item />
        <Item />
      </Stack>
    );

    cy.get('[data-test-id="stack"]').children().should('have.length', 5);
    cy.get('[data-test-id="divider"]').should('have.length', 2);
  });

  it('should render column', () => {
    mount(
      <Stack data-test-id="stack" column gap={24}>
        <Item />
        <Item />
        <Item />
      </Stack>
    );
    cy.get('[data-test-id="stack"]').should(
      'have.attr',
      'style',
      'box-sizing: border-box; min-width: 0px; min-height: 0px; display: flex; flex-flow: column nowrap; flex: 0 1 auto; gap: 24px;'
    );
  });

  it('should render fluid', () => {
    mount(
      <Box width={200} height={200}>
        <Stack data-test-id="stack" fluid>
          <Item />
          <Item />
          <Item />
        </Stack>
      </Box>
    );

    cy.get('[data-test-id="stack"]').should(
      'have.attr',
      'style',
      'box-sizing: border-box; min-width: 0px; min-height: 0px; display: flex; flex-flow: row nowrap; flex: 0 1 auto; justify-content: space-between; width: 100%;'
    );
  });

  it('should render fluid and column', () => {
    mount(
      <Box width={200} height={200}>
        <Stack data-test-id="stack" fluid column>
          <Item />
          <Item />
          <Item />
        </Stack>
      </Box>
    );
    cy.get('[data-test-id="stack"]').should(
      'have.attr',
      'style',
      'box-sizing: border-box; min-width: 0px; min-height: 0px; display: flex; flex-flow: column nowrap; flex: 0 1 auto; justify-content: space-between; height: 100%;'
    );
  });

  it('should render row with wrap', () => {
    mount(
      <Box width={200} height={200}>
        <Stack data-test-id="stack" wrap gap={24}>
          <Item />
          <Item />
          <Item />
        </Stack>
      </Box>
    );

    cy.get('[data-test-id="stack"]').should(
      'have.attr',
      'style',
      'box-sizing: border-box; min-width: 0px; min-height: 0px; display: flex; flex-flow: row wrap; flex: 0 1 auto; gap: 24px;'
    );
  });
});
