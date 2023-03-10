import { mount } from 'cypress/react';
import { Box } from './Box';

describe('View', () => {
  it('should render successfully', () => {
    mount(
      <Box data-test-id="view" vAlignContent="center" hAlignContent="right" grow shrink wrap>
        <span>CONTENT</span>
      </Box>
    );

    cy.get('[data-test-id=view]').should('exist');
  });

  it('should render with default styles', () => {
    mount(
      <Box data-test-id="view">
        <span>CONTENT</span>
      </Box>
    );

    cy.get('[data-test-id=view]').should('exist');
    cy.get('[data-test-id=view]').should($el => {
      expect($el).to.have.attr(
        'style',
        'box-sizing: border-box; min-width: 0px; min-height: 0px; display: flex; flex-flow: row nowrap; flex: 0 1 auto;'
      );
    });
  });

  it('should render with custom styles', () => {
    mount(
      <Box data-test-id="view" vAlignContent="center" hAlignContent="right" grow shrink wrap>
        <span>CONTENT</span>
      </Box>
    );

    cy.get('[data-test-id=view]').should('exist');
    cy.get('[data-test-id=view]').should($el => {
      expect($el).to.have.attr(
        'style',
        'box-sizing: border-box; min-width: 0px; min-height: 0px; display: flex; flex-flow: row wrap; flex: 1 1 auto; justify-content: flex-end; align-items: center;'
      );
    });
  });

  it('should render successfully defined element', () => {
    mount(
      <Box data-test-id="view" component="form">
        <span>CONTENT</span>
      </Box>
    );

    cy.get('form[data-test-id=view]').should('exist');
  });
});
