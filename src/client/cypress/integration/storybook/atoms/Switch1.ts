import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

import { findElementRegex } from '../../../util/archimedes';

describe('Switch1/off', () => {
  describe('Switch1 (no animation) tests', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        'Switch1 (no animation)',
        'Switch1/off',
      );
    });
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      findElementRegex('button', 'Switch1.{2}Track.*')
        .click()
        .then(() => {
          // we have to disable cypress' disabling of animations in this case
          // since here we have set the animations to have a 0s duration,
          // thus effectively disabling them; but in apparently a different
          // manner than cypress.
          cy.matchImageSnapshot({
            disableTimersAndAnimations: false,
          });
        });
    });
  });

  describe('Switch1 tests', () => {
    before(() => {
      visitComponentStoryIframe(getStorybookUrl(), 'Switch1', 'Switch1/off');
    });
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      // cypress.screenshot() will automatically stop animations
      // but this screenshot will look slightly different due to this behavior
      // (the thumb will not be on the right side)
      findElementRegex('button', 'Switch1.{2}Track.*')
        .click()
        .then(() => {
          cy.matchImageSnapshot();
        });
    });
  });
});

describe('Switch1/on', () => {
  describe('Switch1 (no animation) tests', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        'Switch1 (no animation)',
        'Switch1/on',
      );
    });
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      findElementRegex('button', 'Switch1.{2}Track.*')
        .click()
        .then(() => {
          // we have to disable cypress' disabling of animations in this case
          // since here we have set the animations to have a 0s duration,
          // thus effectively disabling them; but in apparently a different
          // manner than cypress.
          cy.matchImageSnapshot({
            disableTimersAndAnimations: false,
          });
        });
    });
  });

  describe('Switch1 tests', () => {
    before(() => {
      visitComponentStoryIframe(getStorybookUrl(), 'Switch1', 'Switch1/on');
    });
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      // cypress.screenshot() will automatically stop animations
      // but this screenshot will look slightly different due to this behavior
      // (the thumb will not be on the right side)
      findElementRegex('button', 'Switch1.{2}Track.*')
        .click()
        .then(() => {
          cy.matchImageSnapshot();
        });
    });
  });
});

export {};
