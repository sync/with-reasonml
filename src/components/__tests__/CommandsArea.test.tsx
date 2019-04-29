import React from 'react';
import { render, fireEvent } from '../../utils/testUtils';
import CommandsArea from '../CommandsArea.gen';

describe('CommandsArea', () => {
  it('renders a text area', () => {
    const { getByPlaceholderText } = render(<CommandsArea />);

    expect(getByPlaceholderText('Enter commands...')).toBeTruthy();
  });

  it('renders a text area with provided default value', () => {
    const defaultText = 'default test';

    const { getByText } = render(<CommandsArea defaultText={defaultText} />);

    expect(getByText(defaultText)).toBeTruthy();
  });

  it('renders when controlled', () => {
    const setText = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <CommandsArea text={'def'} setText={setText} />,
    );

    expect(getByText('def')).toBeTruthy();

    fireEvent.change(getByPlaceholderText('Enter commands...'), {
      target: { value: 'abc' },
    });
    expect(setText).toHaveBeenCalledWith('abc');
  });
});
