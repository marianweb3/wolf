import React, { useState } from "react";
import useFiltersStore from "@/store/filtersStore";

const sortLabelHandler = (value: string) => {
  if (value === "asc") {
    return "Price ASC";
  } else if (value === "desc") {
    return "Price DESC";
  }
};

const SortDropdown = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const { sortOption, setSortOption } = useFiltersStore(); // Use Zustand store

  const handleToggleSortDropdown = () => {
    setIsSortOpen((prevState) => !prevState);
  };

  const handleOptionSortSelect = (option: string | null) => {
    setSortOption(option); // Update Zustand store
    setIsSortOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={handleToggleSortDropdown}
        className="border-2 h-full w-full sm:border-l-0 border-black py-2 px-4 sm:py-3 sm:px-[15.5px] flex items-center gap-2 hover:bg-gray-300 transition-colors"
      >
        <span className="text-black font-maladroit font-bold text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20.13px] whitespace-nowrap">
          {sortOption ? sortLabelHandler(sortOption) : "Sort by"}
        </span>
        <img
          src="/icons/arrow.svg"
          alt="Arrow Right"
          className={`transform ${
            isSortOpen ? "rotate-[90deg]" : "rotate-[-90deg]"
          } w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] transition-transform`}
        />
      </button>

      {/* Dropdown Menu */}
      {isSortOpen && (
        <div className="overflow-hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border-2 border-black z-10">
          <div className="">
            <button
              onClick={() => handleOptionSortSelect(null)}
              className="border-b-2 border-black block w-full text-left px-4 py-2 text-black font-maladroit text-[10px] leading-[18px] sm:text-[12px] sm:leading-[20.13px] hover:bg-gray-300 transition-colors"
            >
              Default
            </button>
            <button
              onClick={() => handleOptionSortSelect("asc")}
              className="border-b-2 border-black block w-full text-left px-4 py-2 text-black font-maladroit text-[10px] leading-[18px] sm:text-[12px] sm:leading-[20.13px] hover:bg-gray-300 transition-colors"
            >
              Price: Low to High (ASC)
            </button>
            <button
              onClick={() => handleOptionSortSelect("desc")}
              className="block w-full text-left px-4 py-2 px-4 py-2 text-black font-maladroit text-[10px] leading-[18px] sm:text-[12px] sm:leading-[20.13px] hover:bg-gray-300 transition-colors"
            >
              Price: High to Low (DESC)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
