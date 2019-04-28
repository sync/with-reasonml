import React from 'react';
import { render } from '../../utils/testUtils';
import Header from '../Header.gen';

describe('Header', () => {
  it('renders a title and 2 links', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Robot Challenge')).toBeTruthy();
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('About')).toBeTruthy();
  });
});
