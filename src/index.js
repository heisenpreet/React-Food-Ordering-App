import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoadingSpinner from "./UIComponents/minorComponents/LoadingSpinner";
import reportWebVitals from "./reportWebVitals";
import { Suspense, lazy } from "react";
import { ThemeContextProvider } from "./Store/themeContext";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<LoadingSpinner />}>
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </React.StrictMode>
  </Suspense>
);

reportWebVitals();
