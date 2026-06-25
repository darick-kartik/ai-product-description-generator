const HISTORY_KEY = "ai_product_history";
const FAVORITES_KEY = "ai_product_favorites";
const SETTINGS_KEY = "ai_product_settings";

const getItem = (key, defaultValue = null) => {
  try {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const storage = {
  // History
  getHistory: () => getItem(HISTORY_KEY, []),

  saveHistory: (history) =>
    setItem(HISTORY_KEY, history),

  clearHistory: () =>
    removeItem(HISTORY_KEY),

  // Favorites
  getFavorites: () =>
    getItem(FAVORITES_KEY, []),

  saveFavorites: (favorites) =>
    setItem(FAVORITES_KEY, favorites),

  clearFavorites: () =>
    removeItem(FAVORITES_KEY),

  // Settings
  getSettings: () =>
    getItem(SETTINGS_KEY, {
      notifications: true,
      darkMode: true,
      language: "English",
    }),

  saveSettings: (settings) =>
    setItem(SETTINGS_KEY, settings),

  clearSettings: () =>
    removeItem(SETTINGS_KEY),

  // Generic
  getItem,
  setItem,
  removeItem,
};

export default storage;