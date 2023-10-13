import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
