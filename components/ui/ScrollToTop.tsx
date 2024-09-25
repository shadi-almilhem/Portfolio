"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const throttle = (func: Function, delay: number) => {
    let lastCall = 0;
    return (...args: any[]) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      return func(...args);
    };
  };

  const checkVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 1500);
  }, []);

  const throttledCheckVisibility = useMemo(
    () => throttle(checkVisibility, 100),
    [checkVisibility],
  );

  useEffect(() => {
    window.addEventListener("scroll", throttledCheckVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", throttledCheckVisibility);
    };
  }, [throttledCheckVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-20 opacity-0"
      }`}
    >
      <button
        aria-label="Scroll To Top"
        onClick={scrollToTop}
        className="rounded-full bg-[rgba(180,42,254,0.2)] p-2 text-white transition duration-150 hover:bg-[rgba(180,42,254,0.3)] focus:outline-none"
      >
        <ArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
