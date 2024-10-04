import React, { useState, useEffect, useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import ProductItem from "../product/product-item";
import useCartStore from "@/store/cartStore";
import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import debounce from "lodash/debounce";
import { API } from "@/utils/api";

interface MenuItem {
  label: string;
  href: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

const menuItems = [
  { label: "Apparel", href: "/products" },
  // { label: "Apparel", href: "/apparel" },
  { label: "Accessories", href: "/accessories" },
  { label: "Artwork", href: "/artwork" },
  { label: "Tech Gear", href: "/tech-gear" },
];
interface SearchResponse {
  message?: string;
  rows?: Product[];
}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { isOpen, toggleCart } = useCartStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const debouncedSearch = useCallback(
    debounce(async (term: string) => {
      if (term.length > 0) {
        setIsSearching(true);
        try {
          const response = await fetch(
            `${API.api}/api/products/search?name=${term}`
          );
          const data: Product[] | { message: string } = await response.json();
          if (Array.isArray(data)) {
            setSearchResults(data);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header className="bg-black flex items-center relative z-50 justify-between md:justify-center p-2">
        <div className="md:container min-[1680px]:mx-auto flex justify-center items-center">
          {isMobile ? (
            <nav
              className={`${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              } fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-all duration-500 ease-in-out overflow-hidden`}
            >
              <ul className="flex flex-col space-y-6 w-full items-center">
                {menuItems.map((item, index) => (
                  <li
                    key={item.label}
                    className={`transform transition-all duration-500 ease-in-out ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={item.href}
                      className="font-saotorpes text-[20px] leading-[16px] text-white uppercase block py-2 transition-all duration-300 ease-in-out text-shadow-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            // Desktop Header (Original Design)
            <nav className="flex items-center gap-16 relative">
              <ul className="flex space-x-16">
                {menuItems.slice(0, 2).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-saotorpes text-[16px] leading-[16px] text-white uppercase text-shadow-white transition-all duration-300 ease-in-out"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <Link to={"/"} className="relative">
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
              </Link>

              <ul className="flex space-x-16">
                {menuItems.slice(2).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-saotorpes text-[16px] leading-[16px] text-white uppercase text-shadow-white transition-all duration-300 ease-in-out"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
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
        <WalletMultiButton className="connect-button">
          Select Wallet
        </WalletMultiButton>

        <div className="flex gap-3 min-[1680px]:absolute right-[160px]">
          <div
            className="size-9 sm:size-[44px] rounded-full bg-white shrink-0 grid place-content-center cursor-pointer"
            onClick={toggleSearch}
          >
            <img
              src="/header/search.svg"
              alt="Search"
              className="max-w-[25px] sm:max-w-full"
            />
          </div>
          <div
            className="size-9 sm:size-[44px] rounded-full bg-white shrink-0 grid place-content-center cursor-pointer"
            onClick={toggleCart}
          >
            <img
              src="/header/cart.svg"
              alt="Search"
              className="max-w-[25px] sm:max-w-full"
            />
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isSearchVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-black py-8">
              <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-6">
                <div className="flex items-center">
                  <div className="flex items-center gap-4 w-full">
                    <div className="size-9 sm:size-[44px] rounded-full bg-white shrink-0 grid place-content-center">
                      <img
                        src="/header/search.svg"
                        alt="Search"
                        className="max-w-[25px] sm:max-w-full"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 font-maladroit bg-transparent font-bold text-base md:text-[20px] placeholder:text-[#FFFFFF99] text-[#FFFFFF99] focus:outline-none transition-all duration-300 ease-in-out"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      required
                    />
                  </div>
                  <IoCloseSharp
                    size={40}
                    color="white"
                    className="cursor-pointer"
                    onClick={toggleSearch}
                  />
                </div>
                {isSearching ? (
                  <div className="text-white text-center font-maladroit text-[18px]">
                    Searching...
                  </div>
                ) : searchResults.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {searchResults.slice(0, 3).map((item) => (
                        <ProductItem
                          key={item.id}
                          title={item.name}
                          price={parseFloat(item.price)}
                          image={`${API.api}/${item.img}`}
                          isBlack={false}
                        />
                      ))}
                    </div>
                    {searchResults.length > 3 && (
                      <button className="py-3 px-5 border-[3px] border-black max-w-[337px] w-full bg-white mx-auto">
                        <span className="font-maladroit text-[18px] font-bold text-black">
                          view all results
                        </span>
                      </button>
                    )}
                  </>
                ) : searchTerm.length > 0 ? (
                  <div className="text-white text-center font-maladroit text-[18px]">
                    No products found
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
