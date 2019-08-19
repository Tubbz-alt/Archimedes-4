import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { SmallProjectDescription } from '../SmallProjectDescription';

storiesOf('molecules/output', module).addWithJSX(
  getDisplayName(SmallProjectDescription),
  () => (
    <SmallProjectDescription>
      💾 Database Tools incl. ORM, Migrations and Admin UI (Postgres, MySQL &
      MongoDB)
    </SmallProjectDescription>
  ),
);
