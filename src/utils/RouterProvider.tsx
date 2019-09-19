import React from 'react';
import { parse } from 'querystring';
import { NextRouter } from 'next/router';

const RouterContext = React.createContext<NextRouter>(null as any);

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
