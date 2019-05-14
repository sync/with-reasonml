import React from 'react';
import { render, fireEvent } from '../../utils/testUtils';
import ActiveLink from '../ActiveLink.gen';

describe('ActiveLink', () => {
  it('renders an active link', () => {
    const linkText = 'some text here';
    const activeClassName = 'test-active';

    const { getByText, container } = render(
      <ActiveLink href="/" activeClassName={activeClassName}>
        <span>{linkText}</span>
      </ActiveLink>,
    );

    expect(getByText(linkText)).toBeTruthy();
    expect(container.firstChild).toHaveClass(activeClassName);
  });

  it('renders an inactive link', () => {
    const linkText = 'some text here';
    const activeClassName = 'test-active';

    const { getByText, container } = render(
      <ActiveLink href="/something" activeClassName={activeClassName}>
        <span>{linkText}</span>
      </ActiveLink>,
    );

    expect(getByText(linkText)).toBeTruthy();
    expect(container.firstChild).not.toHaveClass(activeClassName);
  });

  it('handle having a null router', () => {
    const linkText = 'some text here';
    const activeClassName = 'test-active';

    const { getByText, container } = render(
      <ActiveLink href="/" activeClassName={activeClassName} router={null}>
        <span>{linkText}</span>
      </ActiveLink>,
    );

    expect(getByText(linkText)).toBeTruthy();
    expect(container.firstChild).toHaveClass(activeClassName);
  });

  it('can click on a link', () => {
    const linkText = 'some text here';
    const href = '/';
    const router: any = { pathname: href };
    router.push = jest.fn();

    const { getByText } = render(
      <ActiveLink href={href} activeClassName="test-active" router={router}>
        <span>{linkText}</span>
      </ActiveLink>,
    );

    const link = getByText(linkText);
    expect(link).toBeTruthy();

    fireEvent.click(link);
    expect(router.push).toHaveBeenCalledWith(href);
  });
});
