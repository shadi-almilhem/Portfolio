import React from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
];

interface NavMobileProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ isOpen, toggleMenu }) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="z-50  overflow-hidden md:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[4rem] z-50 border-b border-b-white/20 bg-transparent p-3 backdrop-blur-lg"
          >
            <ul className="z-50 grid gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "tween",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2 + index / 10,
                  }}
                  key={link.name}
                  className="w-full font-semibold "
                >
                  <Link
                    onClick={toggleMenu}
                    className=" flex w-full items-center justify-between p-5 text-white/90 hover:text-white"
                    href={link.link}
                    prefetch={true}
                  >
                    <span className="flex gap-1 text-lg">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
