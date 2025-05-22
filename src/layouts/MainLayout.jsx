import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AIAssistant from "../components/ui/AIAssistant";

const MainLayout = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Get navbar height from CSS variable set by Navbar component
    const updateNavbarHeight = () => {
      const height = getComputedStyle(document.documentElement)
        .getPropertyValue("--navbar-height")
        .trim();

      // Default to 80px if not set yet
      setNavbarHeight(height ? parseInt(height) : 80);
    };

    // Initial update
    updateNavbarHeight();

    // Update whenever it might change
    const observer = new MutationObserver(updateNavbarHeight);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // Also update on resize
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow" style={{ paddingTop: `${navbarHeight}px` }}>
        <Outlet />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default MainLayout;
