import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <RouterProvider router={router} />
      </div>
    );
  }
}
