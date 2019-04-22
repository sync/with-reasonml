import React from 'react';
import { render } from 'react-testing-library';
import { make as Header } from '../Header.gen';

describe('Header', () => {
  it('renders 2 links', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Home')).toBeTruthy();
    expect(getByText('About')).toBeTruthy();
  });
});
