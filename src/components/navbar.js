import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  // navbar logic and styles
  const [isThamActive, setIsThamActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleTham = () => {
    setIsThamActive(!isThamActive);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsThamActive(false);
    }
  };

  useEffect(() => {
    if (isThamActive) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isThamActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
    <header>
      <nav>
        {/*Navbar Section*/}
        <header
          className={`bg-white fixed top-0 w-full z-50 ${
            isScrolled ? "shadow" : ""
          } transition-shadow duration-300`}
        >
          <nav>
            <section>
              <div className="flex text-sm font-medium px-4 sm:px-12 py-2 justify-between">
                <div className="flex flex-wrap">
                  <img
                    src="icon.svg"
                    alt="An SVG of an eye"
                    className="size-12"
                  />
                </div>

                <div className="hidden sm:flex flex-col mt-4 sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
                  <a
                    href="#prologue"
                    className="hover:underline hover:transition-all hover:duration-300"
                  >
                    Tentang Kami
                  </a>
                  <a
                    href="#"
                    className="hover:underline hover:transition-all hover:duration-300"
                  >
                    Program
                  </a>
                  <a
                    href="#"
                    className="hover:underline hover:transition-all hover:duration-300"
                  >
                    Kontak
                  </a>
                </div>

                <div className="sm:hidden mt-4">
                  <div
                    className={`tham tham-e-squeeze tham-w-6 ${
                      isThamActive ? "tham-active" : ""
                    }`}
                    onClick={toggleTham}
                  >
                    <div className="tham-box">
                      <div className="tham-inner" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              ref={navRef}
              className={`sm:hidden fixed inset-y-0 right-0 w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 ${
                isThamActive ? "translate-x-0" : "translate-x-full"
              } p-6`}
            >
              <div className="flex flex-col space-y-4 text-white">
                <a
                  href="#prologue"
                  className="hover:underline hover:text-white"
                  onClick={() => setIsThamActive(false)}
                >
                  Tentang Kami
                </a>
                <a
                  href="#"
                  className="hover:underline hover:text-white"
                  onClick={() => setIsThamActive(false)}
                >
                  Program
                </a>
                <a
                  href="#"
                  className="hover:underline hover:text-white"
                  onClick={() => setIsThamActive(false)}
                >
                  Kontak
                </a>
              </div>
            </section>
          </nav>
        </header>
      </nav>
    </header>
  );
};

export default Navbar;
