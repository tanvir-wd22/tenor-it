import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import PublicRouter from './routes/PublicRouter.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={PublicRouter} />
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
