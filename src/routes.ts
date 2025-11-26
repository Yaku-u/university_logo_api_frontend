import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () =>
      import('./modules/home/home.view').then((module) => ({ Component: module.default })),
  },
]);
