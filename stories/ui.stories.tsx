import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../src/components/Header.gen';
import Counter from '../src/components/Counter.gen';

storiesOf('Header', module).add('Default', () => {
  return <Header />;
});

storiesOf('Counter', module).add('Default', () => {
  return <Counter />;
});
