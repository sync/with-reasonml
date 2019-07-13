import React from 'react';
import RouterProvider from '../utils/RouterProvider';

const AllTheProviders = ({ children }) => {
  return <RouterProvider>{children}</RouterProvider>;
};

export default AllTheProviders;
