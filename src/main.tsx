import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import ScrollRestoration from "./components/ScrollRestoration.tsx";

// Redux
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";

// import WorldMapCard from "./components/WorldMap";xx`

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ScrollRestoration />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);