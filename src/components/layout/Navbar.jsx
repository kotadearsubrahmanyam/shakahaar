import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollState from "../../hooks/useScrollState";

function Navbar() {
  const scrolled = useScrollState();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className={`
          transition-all duration-500
          ${scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200 shadow-sm"
            : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-24 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold">
              <img
                src="/images/logo.png"
                alt="THALIMPU Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-2xl md:text-3xl font-medium text-darktext"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              THALIMPU
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-base font-medium text-darktext">
            <a href="#services" className="hover:text-gold transition-colors">
              Services
            </a>
            <a href="#health" className="hover:text-gold transition-colors">
              Health
            </a>
            <a href="#testimonials" className="hover:text-gold transition-colors">
              Customer Reviews
            </a>
          </div>

          {/* Hamburger (visible on both) */}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-darktext ml-4"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* Slide Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-t border-neutral-200"
            >
<div className="flex flex-col items-center py-8 gap-6 text-lg font-medium text-darktext">

  <a href="#services" onClick={() => setOpen(false)}>
    Services
  </a>

  <a href="#health" onClick={() => setOpen(false)}>
    Health
  </a>

  <a href="#testimonials" onClick={() => setOpen(false)}>
    Customer Reviews
  </a>

  {/* Book Now Button */}
  <a
    href="https://chat.whatsapp.com/YOUR_LINK"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => setOpen(false)}
    className="mt-4 bg-gold text-darktext px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
  >
    Book Now
  </a>

</div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}

export default Navbar;