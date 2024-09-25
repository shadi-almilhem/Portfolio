import React, { useRef, useEffect } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.classList.add("open");
    } else {
      ref.current?.classList.remove("open");
    }
  }, [isOpen]);

  return (
    <div ref={ref} className="z-50 overflow-hidden md:hidden">
      {isOpen && (
        <div className="fixed left-0 right-0 top-[4.8rem] z-50 border-b border-b-white/20 bg-transparent p-3 backdrop-blur-lg transition-opacity duration-500">
          <ul className="z-50 grid gap-2">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.name}
                className="animate-fadeIn w-full font-semibold"
                style={{ animationDelay: `${0.2 + index / 10}s` }}
              >
                <Link
                  aria-label={link.name}
                  onClick={toggleMenu}
                  className="flex w-full items-center justify-between p-5 text-white/90 hover:text-white"
                  href={link.link}
                  prefetch={true}
                >
                  <span className="flex gap-1 text-lg">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
