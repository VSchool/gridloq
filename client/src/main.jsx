import React from "react";
import ReactDOM from "react-dom/client";
import { RouteProvider } from "./providers/RouterProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { SocketProvider } from "./providers/SocketProvider";

import "./assets/global.css";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SocketProvider>
        <RouteProvider />
      </SocketProvider>
    </AuthProvider>
  </React.StrictMode>
);
