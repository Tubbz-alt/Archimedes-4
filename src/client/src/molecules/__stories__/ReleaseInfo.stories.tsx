// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import React from 'react';
import { ReleaseInfo } from '../ReleaseInfo';

storiesOf('molecules/text', module).addWithJSX('ReleaseInfo', () => (
  <ReleaseInfo releaseDate="20190327T130000Z" semVerCategory="Patch" />
));
