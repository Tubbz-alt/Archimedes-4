import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

describe('SmallProjectImage', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'SmallProjectImage');
  });

  describe('SmallProjectImage tests', () => {
    specify('it looks correct', () => {
      cy.matchImageSnapshot();
    });
  });
});

export {};
