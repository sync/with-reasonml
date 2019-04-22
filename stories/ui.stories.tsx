import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { make as Header } from '../components/Header.bs';

storiesOf('Header', module).add('Default', () => {
  return <Header />;
});
