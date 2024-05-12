import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './globals.css';
import WelcomePage from './pages/WelcomePage.tsx';
import { Home } from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
  },
  { path: "/home", element: <Home /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
        <RouterProvider router={router}></RouterProvider>
    </Theme>
  </StrictMode>
);
