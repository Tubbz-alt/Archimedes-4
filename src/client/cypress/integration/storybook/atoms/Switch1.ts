import STYLES from '../../../../src/STYLE';
import {
  clickAndVerifyTransform,
  verifyBgColor,
} from '../../../util/archimedes';
import { translateX } from '../../../util/css';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

const switch1Path = 'atoms/Switch1';

const SwitchTrackRegex = /Switch1.{2}Track.*/;
const ThumbRegex = /Switch1.{2}Thumb.*/;

// the offset from the left, in pixels that the thumb is when in the on position
const offsetOnRightSide = 27;

describe('Switch1/off test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${switch1Path}/off`,
      'Switch1',
    );
  });
  specify('default view looks correct', () => {
    verifyBgColor(STYLES.color.darkSecondary, SwitchTrackRegex);
  });

  specify('looks good after click', () => {
    clickAndVerifyTransform(
      translateX(0),
      translateX(offsetOnRightSide),
      ThumbRegex,
      SwitchTrackRegex,
    );
  });
});

describe('Switch1/on test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${switch1Path}/on`,
      'Switch1',
    );
  });
  specify('default view looks correct', () => {
    verifyBgColor(STYLES.color.primary, SwitchTrackRegex);
  });

  specify('looks good after click', () => {
    clickAndVerifyTransform(
      translateX(offsetOnRightSide),
      translateX(0),
      ThumbRegex,
      SwitchTrackRegex,
    );
  });
});

export {};
