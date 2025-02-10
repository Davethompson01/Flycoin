import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/mega.jpg";

interface NavProps {
  activeLink: string;
  setActiveLink: (value: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const Nav: React.FC<NavProps> = ({
  activeLink,
  scrollToSection,
  setActiveLink,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", sectionId: "Home" },
    { name: "About", sectionId: "About" },
    { name: "Community", sectionId: "Community" },
    { name: "Mega de", sectionId: "BuyToken" },
  ];

  const handleItemClick = (sectionId: string, activeLinkValue: string) => {
    scrollToSection(sectionId);
    setActiveLink(activeLinkValue);
    setMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="fixed z-50 w-full top-0 px-4">
      <nav className="flex items-center justify-between px-2 sm:px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 bg-[#93E45A] border-[4.35px] border-[#93E45A] py-2 px-4 md:px-8 rounded-[21.89px]"
        >
          <div className="w-8">
            <img src={logo} alt="Fly Coin Logo" className="w-full" />
          </div>
          <span className="text-white font-bold text-base lg:text-[28px]">
            Mega rabbit
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 bg-[#93E45A] border-[4.35px] border-[#93E45A] py-4 px-8 rounded-[21.89px]">
          {navItems.map(({ name, sectionId }) => (
            <motion.div
              key={sectionId}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <h3
                className={`cursor-pointer text- text-xs lg:text-[20px] ${
                  sectionId === "BuyToken"
                    ? "border px-4 py-3 rounded-lg text-[#277b1c] bg-white"
                    : "text-white"
                }`}
                onClick={() => handleItemClick(sectionId, sectionId)}
              >
                {name}
              </h3>
              {activeLink === sectionId && activeLink != "BuyToken" && (
                <motion.div
                  className="absolute left-0 bottom-[-4px] h-[3px] bg-[#26480d]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div
          className="md:hidden cursor-pointer fixed z-[999] top-6 right-6"
          onClick={() => setMenuOpen((prev) => !prev)}
          animate={menuOpen ? "open" : "closed"}
          variants={iconVariants}
        >
          <motion.div
            initial={false}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {menuOpen ? (
              <X className="text-[#ffff] w-8 h-8" />
            ) : (
              <Menu className="text-[#ffff] w-8 h-8" />
            )}
          </motion.div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-0 left-0 w-full h-screen bg-[#E98112] border-t border-[#FFB86C] p-4 flex flex-col space-y-4 z-20"
            >
              <div className=" flex flex-col gap-6 items-center justify-center h-full">
                {navItems.map(({ name, sectionId }) => (
                  <motion.h3
                    key={sectionId}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer text-white text-base block ${
                      activeLink === sectionId ? "font-bold " : ""
                    }`}
                    onClick={() => handleItemClick(sectionId, sectionId)}
                  >
                    {name}
                  </motion.h3>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Nav;
