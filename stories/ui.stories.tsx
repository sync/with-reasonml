import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../src/components/Header.gen';
import CommmandsArea from '../src/components/CommandsArea.gen';

storiesOf('Header', module).add('Index', () => {
  return <Header />;
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
