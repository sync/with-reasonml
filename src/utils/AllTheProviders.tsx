import React from 'react';
import RouterProvider from '../utils/RouterProvider';

const AllTheProviders = ({ children }) => {
  return <RouterProvider router={{ pathname: '/' }}>{children}</RouterProvider>;
};

export default AllTheProviders;
