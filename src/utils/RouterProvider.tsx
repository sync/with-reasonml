import React from 'react';
import { parse } from 'querystring';
import { RouterContext } from 'next-server/dist/lib/router-context';

const defaultRouter: any = {
  route: '/',
  pathname: '/',
  query: parse(''),
  asPath: '/',
};

const RouterProvider = ({ router = defaultRouter, children }) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};

export default RouterProvider;
