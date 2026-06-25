import { useAppContext } from "./context/AppContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { theme } = useAppContext();

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <div className="min-h-screen transition-all duration-300 bg-white text-black dark:bg-[#020617] dark:text-white">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;