import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () =>
      import('./modules/home.view').then((module) => ({ Component: module.default })),
  },
]);
