import useFiltersStore from "@/store/filtersStore";
import { motion } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";
import FilterItem from "../../../../components/sidebars/filters/filter-item";
import ProductColorSelection from "../../../../components/sidebars/filters/filter-controls/product-color-selection";
import { ChangeEvent } from "react";
import ProductSizeSelection from "../../../../components/sidebars/filters/filter-controls/product-size-selection";
import PriceRangeFilter from "@/pages/category/ui/filters-menu/price-range-filter";

const FiltersMenu = () => {
  const {
    isOpen,
    toggleMenu,
    selectedColors,
    selectedSizes,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
  } = useFiltersStore();

  const setFilters = useFiltersStore((state) => state.setFilters);

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0; // Handle NaN case
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0; // Handle NaN case
    setMaxPrice(value);
  };

  // Handler to apply filters
  const handleApplyFilters = () => {
    const filters = {
      minPrice,
      maxPrice,
      selectedSizes,
      selectedColors,
    };

    setFilters(filters);
  };

  // console.log(
  //   "zustand store",
  //   minPrice,
  //   maxPrice,
  //   selectedColors,
  //   selectedSizes,
  //   sortOption
  // );

  return (
    <motion.div
      className="fixed top-0 left-0 border-r-2 border-black w-full h-full bg-white z-50 max-w-[549px] flex flex-col justify-between p-8"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex flex-col gap-[50px]">
        <div className="flex justify-between items-center">
          <h2 className="font-saotorpes text-[40px] leading-[30.28px]">
            FILTERS
          </h2>
          <button onClick={toggleMenu} className="text-2xl">
            <IoCloseCircleSharp size={40} />
          </button>
        </div>
        <div>
          <FilterItem label="PRICE">
            <PriceRangeFilter />
            <div className="flex items-center gap-4">
              <div className="px-5 py-4 bg-white grow border-2 flex border-black items-center justify-between">
                <img src="/public/cryptocurrency_usdt.svg" alt="" />
                <input
                  type="text"
                  placeholder="0"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="bg-transparent border-none text-[24px] leading-[30.19px] font-maladroit text-[#00000066] max-w-[100px] outline-none text-right"
                />
              </div>
              <span className="text-black font-maladroit font-bold text-[20px] leading-[25.16px]">
                to
              </span>
              <div className="px-5 py-4 bg-white grow border-2 flex border-black items-center justify-between">
                <img src="/public/cryptocurrency_usdt.svg" alt="" />{" "}
                <input
                  type="text"
                  placeholder="17.000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="bg-transparent border-none text-[24px] leading-[30.19px] font-maladroit text-[#00000066] max-w-[100px] outline-none text-right"
                />
              </div>
            </div>
          </FilterItem>
          <FilterItem label="COLOR">
            <ProductColorSelection />
          </FilterItem>
          <FilterItem label="SIZE">
            <ProductSizeSelection />
          </FilterItem>
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={handleApplyFilters}
          className="w-full bg-black text-white py-3 text-[18px] leading-[22.64px] font-maladroit"
        >
          SET ITEMS
        </button>
      </div>
    </motion.div>
  );
};

export default FiltersMenu;
