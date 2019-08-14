import { findElementRegex } from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'SearchField';
const searchFieldPath = `molecules/input/${componentName}`;
const searchFieldInputRegex = /SearchField.{2}Input*/;
const clearInputButtonRegex = /.*ClearInputButton.*/;

describe(`${componentName}/large test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${searchFieldPath}/large`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });

  specify('looks correct after typing', () => {
    findElementRegex(searchFieldInputRegex).type('the');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });

  specify('correctly selects first result', () => {
    findElementRegex(searchFieldInputRegex)
      .type('the')
      .type('{enter}');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });

  specify('correctly selects second result', () => {
    findElementRegex(searchFieldInputRegex)
      .type('the')
      .type('{downarrow}')
      .type('{enter}');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });
});

describe(`${componentName}/small test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${searchFieldPath}/small`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });

  specify('looks correct after typing', () => {
    findElementRegex(searchFieldInputRegex).type('the');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });

  specify('correctly selects first result', () => {
    findElementRegex(searchFieldInputRegex)
      .type('the')
      .type('{enter}');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });

  specify('correctly selects second result', () => {
    findElementRegex(searchFieldInputRegex)
      .type('the')
      .type('{downarrow}')
      .type('{enter}');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });
});

export {};
