import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-text">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-[-220px] right-[-180px] h-[480px] w-[480px] rounded-full bg-accent/20 blur-[160px]" />
      </div>

      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;