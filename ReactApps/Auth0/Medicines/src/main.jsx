
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain="dev-lgbh6eddofb5czeh.us.auth0.com"
  clientId="TmeKUxoR58VX0tpIt6i0pPiA5j9cfWCF"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <App />
  </Auth0Provider>
);
