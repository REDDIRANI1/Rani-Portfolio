import { useState } from "react";
import userDetails from "../utils/Details.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const Details = userDetails;
  const navLinks = Details.navlinks;

  return (
    <header className="backdrop-blur-md bg-[color:var(--backgroundPrimary)]/90 border-b border-[color:var(--borderPrimary)] sticky top-0 z-50 transition-all duration-500">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left Side - Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[color:var(--primary)] to-[color:var(--primaryHover)] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[color:var(--primaryHover)]/40">
              {Details.personal.name[0]}
            </div>
            <div className="absolute inset-0 rounded-full ring-2 ring-[color:var(--primary)]/30 animate-pulse"></div>
          </div>
          <h1 className="text-lg font-semibold text-[color:var(--textPrimary)]">
            {Details.personal.name}
          </h1>
        </div>

        {/* Center - Desktop Navlinks */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-[color:var(--textSecondary)]">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-[color:var(--primary)] transition-all duration-300 hover:underline underline-offset-4"
              >
                {item.linkName}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side - Resume Button */}
        <div className="hidden md:block">
          <a
            href={Details.personal.resume_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[color:var(--primary)] hover:bg-[color:var(--primaryHover)] text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300 font-medium text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[color:var(--textPrimary)] focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-[color:var(--backgroundPrimary)] border-t border-[color:var(--borderPrimary)] px-6 py-4 space-y-4 shadow-lg transition-all duration-300">
          <ul className="flex flex-col gap-3 text-[color:var(--textSecondary)] font-medium text-sm text-center">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-[color:var(--primary)] transition-colors"
                >
                  {item.linkName}
                </a>
              </li>
            ))}
            <li>
              <a
                href={Details.personal.resume_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[color:var(--primary)] hover:bg-[color:var(--primaryHover)] text-white px-4 py-2 rounded-md font-medium transition-all duration-300 block"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
