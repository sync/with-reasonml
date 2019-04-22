import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { make as Counter } from '../Counter.gen';

describe('Counter', () => {
  it('renders a clickable count', () => {
    const { getByText } = render(<Counter />);

    expect(getByText('Count: 0')).toBeTruthy();

    const link = getByText('Add');
    expect(link).toBeTruthy();

    fireEvent.click(link);
    expect(getByText('Count: 1')).toBeTruthy();
  });
});
