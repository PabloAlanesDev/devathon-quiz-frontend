import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from '@radix-ui/themes';
import App from "./App.tsx";
import "./globals.css";
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);
