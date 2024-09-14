"use client";
// Updated to use next/navigation
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export const Header = () => {
  const router = useRouter();

  const handleNavigation = (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault(); // Prevent default anchor behavior (removes the # from URL)
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Use router.push to update the URL without the hash
      // router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={(e) => handleNavigation(e, "home")}
          className="nav-item"
        >
          Home
        </a>
        <a
          href="#project"
          onClick={(e) => handleNavigation(e, "project")}
          className="nav-item"
        >
          Project
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavigation(e, "about")}
          className="nav-item"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavigation(e, "contact")}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
