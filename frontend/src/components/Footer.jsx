import { Link } from "react-router-dom";
import {
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="
      relative mt-24 border-t backdrop-blur-xl
      bg-white text-gray-900 border-gray-200
      dark:bg-[#020617] dark:text-white dark:border-gray-800
    ">

      <div className="container-app py-16">

        {/* GRID */}
        <div className="grid gap-12 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  AI Product
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Description Generator
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-300">
              Generate premium AI-powered product descriptions
              optimized for SEO, marketplaces, and conversions.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-4">

              <button className="rounded-xl border border-gray-200 dark:border-gray-700 p-3 transition hover:border-indigo-500">
                <Github size={18} />
              </button>

              <button className="rounded-xl border border-gray-200 dark:border-gray-700 p-3 transition hover:border-indigo-500">
                <Twitter size={18} />
              </button>

              <button className="rounded-xl border border-gray-200 dark:border-gray-700 p-3 transition hover:border-indigo-500">
                <Linkedin size={18} />
              </button>

              <button className="rounded-xl border border-gray-200 dark:border-gray-700 p-3 transition hover:border-indigo-500">
                <Mail size={18} />
              </button>

            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Product
            </h3>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">

              <li>
                <Link className="hover:text-indigo-500 transition" to="/generator">
                  AI Generator
                </Link>
              </li>

              <li>
                <Link className="hover:text-indigo-500 transition" to="/templates">
                  Templates
                </Link>
              </li>

              <li>
                <Link className="hover:text-indigo-500 transition" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link className="hover:text-indigo-500 transition" to="/history">
                  History
                </Link>
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">

              <li>
                <Link className="hover:text-indigo-500 transition" to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="hover:text-indigo-500 transition" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li>
                <Link className="hover:text-indigo-500 transition" to="/contact">
                  Contact
                </Link>
              </li>

              <li>
                <Link className="hover:text-indigo-500 transition" to="/settings">
                  Settings
                </Link>
              </li>

            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Stay Updated
            </h3>

            <p className="mb-5 text-sm text-gray-600 dark:text-gray-300">
              Get product updates, AI tips and new templates delivered to your inbox.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />

            <button className="primary-btn mt-4 w-full">
              Subscribe
            </button>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="
          mt-16 flex flex-col md:flex-row items-center justify-between gap-4
          border-t pt-8 text-sm
          border-gray-200 dark:border-gray-800
          text-gray-600 dark:text-gray-300
        ">

          <p>
            © {new Date().getFullYear()} AI Product Description Generator. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link className="hover:text-indigo-500 transition" to="/">
              Privacy
            </Link>

            <Link className="hover:text-indigo-500 transition" to="/">
              Terms
            </Link>

            <Link className="hover:text-indigo-500 transition" to="/">
              Cookies
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;