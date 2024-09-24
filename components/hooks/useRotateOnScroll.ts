import { useEffect } from "react";

// This hook takes a ref to the element you want to rotate
const useRotateOnScroll = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rotation = window.scrollY / 50;
        ref.current.style.transform = `rotate(${rotation * -0.1}deg)`;
      }
    };

    // Add the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);
};

export default useRotateOnScroll;
