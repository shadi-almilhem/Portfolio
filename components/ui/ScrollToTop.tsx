"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const throttle = (func: any, delay: any) => {
    let lastCall = 0;
    return (...args: any) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      return func(...args);
    };
  };

  const toggleVisibility = useCallback(
    throttle(() => {
      setIsVisible(window.scrollY > 2000);
    }, 100),
    [],
  );

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 200 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-10 right-10 z-50"
    >
      <button
        aria-label="Scroll To Top"
        onClick={scrollToTop}
        className="rounded-full bg-[rgba(180,42,254,0.2)] p-2 text-white transition duration-150 hover:bg-[rgba(180,42,254,0.3)] focus:outline-none"
      >
        <ArrowUp />
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
