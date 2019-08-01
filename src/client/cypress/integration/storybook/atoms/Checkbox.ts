import STYLES from '../../../../src/STYLE';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

import { clickAndVerifyBgColor, verifyBgColor } from '../../../util/archimedes';

const CheckboxContainerRegex = /Checkbox.{2}CheckboxContainer.*/;
const BoxDarkRegex = /Checkbox.{2}BoxDark.*/;

const checkboxPath = 'atoms/Checkbox';

describe('Checkbox/unchecked test suite', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${checkboxPath}/unchecked`,
      'Checkbox',
    );
  });

  describe('Checkbox tests', () => {
    specify('default view looks correct', () => {
      verifyBgColor(STYLES.color.darkSecondary, BoxDarkRegex);
    });

    specify('looks good after click', () => {
      clickAndVerifyBgColor(
        STYLES.color.darkSecondary,
        STYLES.color.primary,
        BoxDarkRegex,
        CheckboxContainerRegex,
      );
    });
  });
});

describe('Checkbox/checked test suite', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${checkboxPath}/checked`,
      'Checkbox',
    );
  });

  describe('Checkbox tests', () => {
    specify('default view looks correct', () => {
      verifyBgColor(STYLES.color.primary, BoxDarkRegex);
    });

    specify('looks good after click', () => {
      clickAndVerifyBgColor(
        STYLES.color.primary,
        STYLES.color.darkSecondary,
        BoxDarkRegex,
        CheckboxContainerRegex,
      );
    });
  });
});

export {};
