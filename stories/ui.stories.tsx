import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { make as Header } from '../src/components/Header.gen';
import { make as Counter } from '../src/components/Counter.gen';

storiesOf('Header', module).add('Default', () => {
  return <Header />;
});

storiesOf('Counter', module).add('Default', () => {
  return <Counter />;
});
