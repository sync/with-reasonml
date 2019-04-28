import {
  configure,
  addDecorator,
  getStorybook,
  setAddon,
} from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import createPercyAddon from '@percy-io/percy-storybook';
import AllTheProviders from '../src/utils/AllTheProviders';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx?$/);
function loadStories() {
  addDecorator(centered);
  addDecorator(fn => <AllTheProviders>{fn()}</AllTheProviders>);
  req.keys().forEach(filename => req(filename));
}

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

configure(loadStories, module);

// NOTE: if you're using the Storybook options addon, call serializeStories *BEFORE* the setOptions call
serializeStories(getStorybook);
