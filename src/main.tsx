import React from 'react'
import ReactDOM from 'react-dom/client'
import './src_poc/index.css'
import './src_poc/App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './src_poc/pages/Home'
import { Game } from './src_poc/pages/Game'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/room', element: <Game /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
