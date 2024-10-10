import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductItem from "../../product/product-item";
import useCartStore from "@/store/cartStore";
import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from '@solana/wallet-adapter-react';
import { API } from "@/utils/api";
import SearchMenu from "@/components/layout/header/ui/search-menu";
import { Product } from "@/pages/product";
import useSearchStore from "@/store/searchStore";
import useSWR from "swr";
import debounce from "lodash/debounce";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems = [
  { label: "Apparel", href: "/products/apparel" },
  // { label: "Apparel", href: "/apparel" },
  { label: "Accessories", href: "/products/accessories" },
  { label: "Artwork", href: "/products/artwork" },
  { label: "Tech Gear", href: "/products/tech-gear" },
];

export interface SearchResponse {
  currentPage: number;
  totalCount: number;
  totalPages: number;
  products: Product[];
}

const defaultValue = {
  currentPage: 0,
  products: [],
  totalCount: 0,
  totalPages: 0,
};

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { isOpen, toggleCart, cartItems } = useCartStore();

  const { publicKey } = useWallet();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm); // Store the debounced term

  const [isSearching, setIsSearching] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchTerm("");
    }
  };

  const page = useSearchStore((state) => state.page);
  const limit = useSearchStore((state) => state.limit);

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

  // Debounce the search term
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedTerm(value);
    }, 300),
    []
  );

  // Update the search term without debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value); // Apply debounce here
  };

  // Construct the search URL
  const searchUrl = debouncedTerm
    ? `${API.api}/api/products/search?name=${debouncedTerm}&page=${page}&limit=${limit}`
    : null;

  // Use SWR hook for data fetching
  const { data, error }: { data: SearchResponse; error: Error | undefined } =
    useSWR(searchUrl, fetcher, {
      revalidateOnFocus: false,
    });

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
              <div className="block lg:hidden mt-10">
                <WalletMultiButton className="connect-button ">
                { !publicKey ? "Connect wallet" : ""}
                </WalletMultiButton>
              </div>
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
                  className="relative z-10 mt-[-10px] max-w-[220px] xl:max-w-[275px]"
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
          <Link to={"/"} className="relative">
            <img
              src="/wolfshop.webp"
              alt="Wolf Shop"
              className="relative z-10 max-w-[170px] sm:max-w-[220px] xl:max-w-[275px]"
            />
          </Link>
        </div>
        <div className="hidden lg:flex w-auto mr-10">
          <WalletMultiButton className="connect-button">
          { !publicKey ? "Connect wallet" : ""}
          </WalletMultiButton>
        </div>

        <div className="flex gap-3 min-[1680px]:absolute right-[250px]">
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
            className="size-9 sm:size-[44px] rounded-full bg-white shrink-0 grid place-content-center cursor-pointer relative"
            onClick={toggleCart}
          >
            <img
              src="/header/cart.svg"
              alt="Search"
              className="max-w-[25px] sm:max-w-full"
            />
            {cartItems.length > 0 ? (
              <div className="absolute -top-1 size-4 rounded-full bg-black grid place-content-center">
                <span className="font-saotorpes text-[12px] font-bold text-[red]">
                  {cartItems.length}
                </span>
              </div>
            ) : null}
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
            <SearchMenu
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              toggleSearch={toggleSearch}
              isSearching={isSearching}
              data={data}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
