import * as React from 'react';
import { storiesOf } from '@storybook/react';
import RouterProvider from '../src/utils/RouterProvider';
import Header from '../src/components/Header.gen';
import Counter from '../src/components/Counter.gen';

storiesOf('Header', module)
  .add('Index', () => {
    return <Header />;
  })
  .add('About', () => {
    return (
      <RouterProvider router={{ pathname: '/about' }}>
        <Header />
      </RouterProvider>
    );
  })
  .addParameters({ viewport: { defaultViewport: 'iphone5' } })
  .add('iPhone 5', () => {
    return <Header />;
  });

storiesOf('Counter', module).add('Default', () => {
  return <Counter />;
});
