import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'Body1';

describe(`${componentName} test suite`, () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms/text', componentName);
    cy.matchImageSnapshot();
  });
});

export {};
