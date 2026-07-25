import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("Application Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#020617] px-6">
          <h1 className="text-5xl font-black text-indigo-600">
            Oops!
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Something went wrong.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
          >
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;