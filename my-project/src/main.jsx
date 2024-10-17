import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopingCartProvider from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopingCartProvider>
      <App />
    </ShopingCartProvider>
  </BrowserRouter>
);
