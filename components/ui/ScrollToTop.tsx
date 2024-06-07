"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { throttle } from "lodash";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = throttle(() => {
      setIsVisible(window.scrollY > 2000);
    }, 100);

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      toggleVisibility.cancel();
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

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
        onClick={scrollToTop}
        className="rounded-full bg-[rgba(180,42,254,0.2)] p-2 text-white transition duration-150 hover:bg-[rgba(180,42,254,0.3)] focus:outline-none"
      >
        <ArrowUp />
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
