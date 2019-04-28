import React from 'react';
import { RouterContext } from 'next-server/dist/lib/router-context';

const RouterProvider = ({ router = { pathname: '/' }, children }) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};

export default RouterProvider;
