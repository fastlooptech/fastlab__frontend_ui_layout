import { mount } from 'cypress/react';
import { SPACE_UNIT } from '~/utils/constants';
import { Space } from './Space';

const TEST_VALUE = 2;

it('Should have defined height in a column', () => {
  mount(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Space units={TEST_VALUE} data-test-id="col" />
    </div>
  );
  cy.get('[data-test-id="col"]').should('have.css', 'height', SPACE_UNIT * TEST_VALUE + 'px');
});

it('Should have defined width and basis in a row', () => {
  mount(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Space units={TEST_VALUE} data-test-id="row" />
    </div>
  );
  cy.get('[data-test-id="row"]').should('have.css', 'width', SPACE_UNIT * TEST_VALUE + 'px');
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
