import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../ui/Logo";
import { cn } from "../../utils/cn";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        setNavbarHeight(height);
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateNavbarHeight);

    // Initial height calculation
    updateNavbarHeight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  // Update height when mobile menu opens/closes
  useEffect(() => {
    if (navbarRef.current) {
      const height = navbarRef.current.offsetHeight;
      setNavbarHeight(height);
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <header
      ref={navbarRef}
      className={cn(
        "fixed w-full z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-white/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 bg-transparent">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center -my-4"
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex space-x-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "relative px-3 py-1 text-lg font-medium rounded-md transition-all",
                      "hover:bg-blue-50/80 hover:text-blue-600",
                      isActive
                        ? "text-blue-600 bg-blue-50/80"
                        : isScrolled
                        ? "text-gray-800"
                        : "text-gray-800"
                    )
                  }
                  end={item.path === "/"}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600"
                          layoutId="navbar-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className={cn(
                  "w-full h-[2px] bg-gray-800 block transition-all",
                  isMobileMenuOpen && "rotate-45 translate-y-[9px]"
                )}
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={cn(
                  "w-full h-[2px] bg-gray-800 block transition-all",
                  isMobileMenuOpen && "opacity-0"
                )}
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={cn(
                  "w-full h-[2px] bg-gray-800 block transition-all",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[9px]"
                )}
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -9 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mb-4"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <motion.div
                  className="flex flex-col space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navItems.map((item) => (
                    <motion.div key={item.path} variants={itemVariants}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            "block px-3 py-1 text-lg font-medium rounded-md transition-colors",
                            "hover:bg-blue-50/80 hover:text-blue-600",
                            isActive
                              ? "text-blue-600 bg-blue-50/80"
                              : "text-gray-800"
                          )
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                        end={item.path === "/"}
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
