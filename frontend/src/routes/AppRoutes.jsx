import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import GeneratorPage from "../pages/GeneratorPage";
import DashboardPage from "../pages/DashboardPage";
import TemplatesPage from "../pages/TemplatesPage";
import HistoryPage from "../pages/HistoryPage";
import PricingPage from "../pages/PricingPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import SettingsPage from "../pages/SettingsPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/generator" element={<GeneratorPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/templates" element={<TemplatesPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;