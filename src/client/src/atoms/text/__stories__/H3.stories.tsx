import { storiesOf } from '@storybook/react';
import React from 'react';
import { H3 } from '../H3';

storiesOf('atoms/text', module).addWithJSX('H3', () => <H3>Lorem ipsum</H3>);