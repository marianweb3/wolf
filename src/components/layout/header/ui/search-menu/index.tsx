import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { API } from "@/utils/api";
import FoundItem from "@/components/layout/header/ui/search-menu/found-item";
import { SearchResponse } from "@/components/layout/header";
import clsx from "clsx";
import useSearchStore from "@/store/searchStore";

interface SearchMenuProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSearch: () => void;
  isSearching: boolean;
  data: SearchResponse;
}

const SearchMenu = ({
  searchTerm,
  handleSearchChange,
  toggleSearch,
  isSearching,
  data,
}: SearchMenuProps) => {
  const page = useSearchStore((state) => state.page);
  const limit = useSearchStore((state) => state.limit);
  const setPage = useSearchStore((state) => state.setPage);

  const handleNextPage = () => {
    if (data && page * limit < data.totalCount) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="bg-black py-8 px-4">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-6">
        {/* Search Input */}
        <div className="flex items-center pb-[15px] border-b">
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

        {/* Search Results */}
        {isSearching ? (
          <div className="text-white text-center font-maladroit text-[18px]">
            Searching...
          </div>
        ) : data?.products.length > 0 ? (
          <div className={"flex flex-col gap-10 "}>
            <div className="flex flex-col lg:flex-row justify-evenly gap-2">
              {data?.products.map((item) => (
                <FoundItem
                  key={item.id}
                  title={item.name}
                  price={parseFloat(item.price)}
                  image={item.images?.at(0)}
                  isBlack={false}
                />
              ))}
            </div>

            {/*pagination section*/}
            <div className="flex justify-center items-center gap-[30px] mb-[200px]">
              <button
                onClick={handlePreviousPage}
                disabled={page === 1}
                className={clsx(
                  "font-maladroit border-2 py-2 px-4 sm:py-3 sm:px-[35px] mb-2 sm:mb-0 transition-colors ",
                  "disabled:border-gray-500  disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent",
                  "border-white text-white hover:bg-gray-300 hover:text-black hover:border-transparent"
                )}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={data && page * limit >= data.totalCount}
                className={clsx(
                  "font-maladroit border-2 py-2 px-4 sm:py-3 sm:px-[35px] mb-2 sm:mb-0 transition-colors ",
                  "disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent",
                  "border-white text-white hover:bg-gray-300 hover:text-black hover:border-transparent"
                )}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="text-white text-center font-maladroit text-[18px]">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMenu;
