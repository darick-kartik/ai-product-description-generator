import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // =========================
  // STATE
  // =========================
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // =========================
  // THEME STATE (NEW)
  // =========================
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // =========================
  // FUNCTIONS
  // =========================
  const addToHistory = (item) => {
    setHistory((prev) => [item, ...prev]);
  };

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((value) => value.id === item.id);

      if (exists) {
        return prev.filter((value) => value.id !== item.id);
      }

      return [item, ...prev];
    });
  };

  // =========================
  // CONTEXT VALUE
  // =========================
  const value = useMemo(
    () => ({
      // generator
      generatedDescription,
      setGeneratedDescription,

      // history
      history,
      addToHistory,

      // favorites
      favorites,
      toggleFavorite,

      // templates
      selectedTemplate,
      setSelectedTemplate,

      // theme
      theme,
      toggleTheme,
    }),
    [
      generatedDescription,
      history,
      favorites,
      selectedTemplate,
      theme,
    ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// =========================
// CUSTOM HOOK
// =========================
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider.");
  }

  return context;
};