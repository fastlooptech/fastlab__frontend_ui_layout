import { mount } from 'cypress/react';
import { Space } from './Space';

const TEST_VALUE = 24;

it('Should have defined height in a column', () => {
  mount(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Space size={TEST_VALUE} data-test-id="col" />
    </div>
  );
  cy.get('[data-test-id="col"]').should('have.css', 'height', TEST_VALUE + 'px');
});

it('Should have defined width and basis in a row', () => {
  mount(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Space size={TEST_VALUE} data-test-id="row" />
    </div>
  );
  cy.get('[data-test-id="row"]').should('have.css', 'width', TEST_VALUE + 'px');
});

it('Should have flex-grow and flex-shrink if fluid', () => {
  mount(
    <div
      style={{
        display: 'flex',
      }}
    >
      <Space fluid data-test-id="fluid" />
    </div>
  );
  cy.get('[data-test-id="fluid"]').should('have.css', 'flex-grow', '1');
});
