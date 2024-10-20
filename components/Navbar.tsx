"use client"
import { useEffect, useState } from "react";
import { Leaf, User } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 py-4 ${
        isScrolled ? "bg-cream bg-opacity-50 text-white" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between px-8 py-3">
        <Leaf width={50} />
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <div className="flex items-center">
          <User />
        </div>
      </div>
    </nav>
  );
};
