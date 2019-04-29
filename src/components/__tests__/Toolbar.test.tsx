import React from 'react';
import { render } from '../../utils/testUtils';
import Toolbar from '../Toolbar.gen';

describe('Toolbar', () => {
  it('renders no result by default', () => {
    const { getByText } = render(<Toolbar />);

    expect(getByText('Output:')).toBeTruthy();
  });

  it('renders the result when provided', () => {
    const result = 'test result';
    const { getByText } = render(<Toolbar result={result} />);

    expect(getByText('Output:')).toBeTruthy();
    expect(getByText(result)).toBeTruthy();
  });
});
