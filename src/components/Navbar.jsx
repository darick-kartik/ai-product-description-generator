import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Generator", path: "/generator" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Templates", path: "/templates" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useAppContext();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#020617]/80 border-gray-800 text-white"
          : "bg-white/80 border-gray-200 text-black"
      }`}
    >
      <div className="container-app flex h-20 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div className="hidden sm:block">
            <h2 className="text-lg font-bold">
              AI Product
            </h2>
            <p className="text-xs opacity-70">
              Description Generator
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : theme === "dark"
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-xl border text-sm transition ${
              theme === "dark"
                ? "border-gray-700 hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>

          <Link
            to="/login"
            className={`px-5 py-2.5 rounded-xl transition ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border p-2.5 lg:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className={`lg:hidden border-t ${
              theme === "dark"
                ? "bg-[#020617] border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="container-app flex flex-col py-6">

              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`mt-4 px-4 py-3 rounded-xl border transition ${
                  theme === "dark"
                    ? "border-gray-700 hover:bg-gray-800"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {theme === "dark"
                  ? "Switch to Light 🌞"
                  : "Switch to Dark 🌙"}
              </button>

              <div className="mt-6 flex flex-col gap-3">

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-center transition ${
                    theme === "dark"
                      ? "bg-gray-800"
                      : "bg-gray-200"
                  }`}
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-indigo-600 text-white text-center"
                >
                  Get Started
                </Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;