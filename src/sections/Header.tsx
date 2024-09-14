"use client";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const handleNavigation = (
    e: MouseEvent<HTMLAnchorElement>,
    url: string,
    sectionId?: string
  ) => {
    e.preventDefault(); // Prevent default anchor behavior

    if (url.startsWith("http")) {
      // Handle external links
      window.location.href = url;
    } else {
      // Smooth scrolling for internal links
      const section = document.getElementById(sectionId || "");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // Use History API to manipulate the URL without hash
        history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={(e) => handleNavigation(e, "", "home")}
          className="nav-item"
        >
          Home
        </a>
        <a
          href="#project"
          onClick={(e) => handleNavigation(e, "", "project")}
          className="nav-item"
        >
          Project
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavigation(e, "", "about")}
          className="nav-item"
        >
          About
        </a>
        <a
          href="https://surajk00.hashnode.dev"
          onClick={(e) => handleNavigation(e, "https://surajk00.hashnode.dev")}
          className="nav-item"
        >
          Blog
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavigation(e, "", "contact")}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
