import { storiesOf } from '@storybook/react';
import React from 'react';
import { SmallProjectDescription } from '../SmallProjectDescription';

storiesOf('molecules/text', module).addWithJSX(
  'SmallProjectDescription',
  () => (
    <SmallProjectDescription>
      💾 Database Tools incl. ORM, Migrations and Admin UI (Postgres, MySQL &
      MongoDB)
    </SmallProjectDescription>
  ),
);
