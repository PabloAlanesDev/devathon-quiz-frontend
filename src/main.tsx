import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.tsx";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateRoomPage from "./pages/CreateRoomPage.tsx";
import JoinRoomPage from "./pages/JoinRoomPage.tsx";
import Lobby from "./pages/Lobby.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/create", element: <CreateRoomPage /> },
  { path: "/join", element: <JoinRoomPage /> },
  { path: "/lobby", element: <Lobby /> } /*just for code review demo*/,
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={router}></RouterProvider>
    </Theme>
  </StrictMode>
);
