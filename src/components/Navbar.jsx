import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="max-w-screen-xl mx-auto py-6 flex items-center justify-between px-10">
      {/* Left Section */}
      <div className="nleft flex items-center">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://cdn-icons-png.freepik.com/256/8421/8421523.png?ga=GA1.1.906195782.1713633078&semt=ais_hybrid"
            alt="Refokus Logo"
            className="w-12 h-12"
          />
        </a>

        {/* Navigation Links */}
        <nav className="ml-20">
          <ul className="flex gap-6">
            {["Home", "Work", "Culture", "", "News"].map((item, index) =>
              item.length === 0 ? (
                // Separator
                <li key={index} className="w-[3px] h-5 bg-zinc-700"></li>
              ) : (
                // Navigation Link
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-green-500 flex items-center gap-1 transition-colors duration-300"
                  >
                    {/* Highlight Dot for "Work" */}
                    {item === "Work" && (
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_4px_#00ff19]"></span>
                    )}
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* Right Section - Button */}
      <div className="nright">
        <Button title="Get Started" />
      </div>
    </header>
  );
}
