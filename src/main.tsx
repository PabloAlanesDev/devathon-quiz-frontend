import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.tsx';
import './globals.css';
import CreateRoomPage from './pages/CreateRoomPage.tsx';
import JoinRoomPage from './pages/JoinRoomPage.tsx';
import Quizpage from './pages/quiz/QuizPage.tsx';
import WelcomePage from './pages/WelcomePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
  },
  { path: "/room", element: <Game /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </Theme>
  </StrictMode>
);
