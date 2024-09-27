import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is typically the 'lg' breakpoint in Tailwind
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-black flex items-center relative z-50 justify-between md:justify-center p-2">
      <div className="md:container min-[1680px]:mx-auto flex justify-center items-center">
        {isMobile ? (
          // Mobile Header
          <nav
            className={`
              ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }
              fixed top-0 left-0 w-full h-screen
              bg-black
              flex flex-col items-center justify-center
              transition-all duration-500 ease-in-out
              overflow-hidden
            `}
          >
            <ul className="flex flex-col space-y-6 w-full items-center">
              {["Apparel", "Accessories", "Artwork", "Tech Gear"].map(
                (item, index) => (
                  <li
                    key={item}
                    className={`transform transition-all duration-500 ease-in-out ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <a
                      href="/"
                      className="font-saotorpes text-[20px] leading-[16px] text-white uppercase block py-2 hover:text-purple-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        ) : (
          // Desktop Header (Original Design)
          <nav className="flex items-center gap-16 relative">
            <ul className="flex space-x-16">
              <li>
                <a
                  href="/"
                  className="font-saotorpes text-[16px] leading-[16px] text-white uppercase"
                >
                  Apparel
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="font-saotorpes text-[16px] leading-[16px] text-white uppercase"
                >
                  Accessories
                </a>
              </li>
            </ul>

            <div className="relative">
              <div
                className="absolute bg-contain bg-no-repeat left-1/2 top-full w-[300px] xl:w-[344px] h-[135px]"
                style={{
                  backgroundImage: "url('/logo-bg.png')",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
              <img
                src="/wolfshop.webp"
                alt="Wolf Shop"
                className="relative z-10 max-w-[220px] xl:max-w-[275px]"
              />
            </div>

            <ul className="flex space-x-16">
              <li>
                <a
                  href="/"
                  className="font-saotorpes text-[16px] leading-[16px] text-white uppercase"
                >
                  Artwork
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="font-saotorpes text-[16px] leading-[16px] text-white uppercase"
                >
                  Tech Gear
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {isMobile && (
        <button
          onClick={toggleMenu}
          className={`relative z-50 w-10 h-10 text-white focus:outline-none transition-transform duration-300 ${
            isMenuOpen ? "translate-x-[-25px]" : ""
          }`}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      )}

      <div className="relative md:hidden block">
        <div
          className={`absolute bg-contain bg-no-repeat left-1/2 top-full w-[300px] xl:w-[344px] h-[135px] transition-opacity duration-500 ease-in-out transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/logo-bg.png')",
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        <img
          src="/wolfshop.webp"
          alt="Wolf Shop"
          className="relative z-10 max-w-[170px] sm:max-w-[220px] xl:max-w-[275px]"
        />
      </div>

      <div className="flex gap-3 min-[1680px]:absolute right-[160px]">
        <div className="size-9 sm:size-[44px] rounded-full bg-white shrink-0 grid place-content-center">
          <img
            src="/header/search.svg"
            alt="Search"
            className="max-w-[25px] sm:max-w-full"
          />
        </div>
        <div className="size-9 sm:size-[44px] rounded-full bg-white shrink-0 grid place-content-center">
          <img
            src="/header/cart.svg"
            alt="Cart"
            className="max-w-[20px] sm:max-w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
