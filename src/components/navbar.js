import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import classNames from "classnames";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={classNames("fixed top-0 w-full z-50", {
        "bg-white shadow-md": isScrolled,
        "bg-transparent": !isScrolled,
      })}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 cursor-pointer"
              src="icon.svg"
              alt="Logo"
              onClick={handleScrollToTop}
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Tentang Kami", "Program", "Kontak"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    handleScrollToSection(
                      item === "Tentang Kami"
                        ? "prologue"
                        : item.toLowerCase().replace(" ", "-")
                    )
                  }
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-800 hover:bg-gray-200 px-5 py-2 rounded-md text-sm font-medium">
              Login
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <div
                className={classNames("tham tham-e-squeeze tham-w-6", {
                  "tham-active": isMenuOpen,
                })}
              >
                <div className="tham-box">
                  <div className="tham-inner" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          "md:hidden bg-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out",
          {
            "max-h-96 opacity-100": isMenuOpen,
            "max-h-0 opacity-0": !isMenuOpen,
          }
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["Tentang Kami", "Program", "Kontak"].map((item) => (
            <button
              key={item}
              onClick={() =>
                handleScrollToSection(
                  item === "Tentang Kami"
                    ? "prologue"
                    : item.toLowerCase().replace(" ", "-")
                )
              }
              className="w-full text-left text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="py-6 border-t border-gray-200">
          <div className="flex items-center px-5">
            <button className="w-full text-gray-800 hover:bg-gray-200 block px-4 py-2 rounded-md text-base font-medium">
              Login
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 w-full">
              Sign Up
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/gemapalapurworejo/"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
