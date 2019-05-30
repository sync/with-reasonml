import React from 'react';
import { render } from '@testing-library/react';
import AllTheProviders from '../utils/AllTheProviders';

const customRender = (ui: React.ReactElement<any>, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
