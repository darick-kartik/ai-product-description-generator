import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./context/AuthContext";

import App from "./App";
import { AppProvider } from "./context/AppContext";

import "./index.css";
import "./styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <AuthProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        

        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={10}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#0F172A",
              color: "#F8FAFC",
              border: "1px solid #1E293B",
              borderRadius: "14px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            },
            success: {
              iconTheme: {
                primary: "#22C55E",
                secondary: "#FFFFFF",
              },
            },
            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#FFFFFF",
              },
            },
          }}
        />
      </AuthProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);