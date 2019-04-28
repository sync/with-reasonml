import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RouterProvider from '../src/utils/RouterProvider';
import Header from '../src/components/Header.gen';
import Counter from '../src/components/Counter.gen';
import CommmandsArea from '../src/components/CommandsArea.gen';

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

storiesOf('CommmandsArea', module).add('Default', () => {
  const Wrapper: React.SFC<{}> = () => {
    let [text, setText] = React.useState('');

    React.useEffect(() => {
      action('text-changed')(text);
    }, [text]);

    return <CommmandsArea text={text} setText={setText} />;
  };

  return <Wrapper />;
});
