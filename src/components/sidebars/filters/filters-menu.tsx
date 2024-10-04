import useFiltersStore from "@/store/filtersStore";
import { motion } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";
import FilterItem from "./filter-item";
import ProductColorSelection from "./filter-controls/product-color-selection";
import { useState } from "react";
import ProductSizeSelection from "./filter-controls/product-size-selection";

const FiltersMenu = () => {
  const { isOpen, toggleMenu } = useFiltersStore();
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  const handleColorChange = (selectedId: string | null) => {
    setSelectedColorId(selectedId);
  };

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeChange = (size: string | null) => {
    setSelectedSize(size);
    console.log("Selected Size:", size);
  };
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
            <div className="wrapper mb-6 mt-4s">
              <div className="range">
                <input type="range" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="px-5 py-4 bg-white grow border-2 flex border-black items-center justify-between">
                <img src="/cryptocurrency_usdt.svg" alt="" />
                <input
                  type="text"
                  placeholder="0"
                  className="bg-transparent border-none text-[24px] leading-[30.19px] font-maladroit text-[#00000066] max-w-[100px] outline-none text-right"
                />
              </div>
              <span className="text-black font-maladroit font-bold text-[20px] leading-[25.16px]">
                to
              </span>
              <div className="px-5 py-4 bg-white grow border-2 flex border-black items-center justify-between">
                <img src="/cryptocurrency_usdt.svg" alt="" />{" "}
                <input
                  type="text"
                  placeholder="17.000"
                  className="bg-transparent border-none text-[24px] leading-[30.19px] font-maladroit text-[#00000066] max-w-[100px] outline-none text-right"
                />
              </div>
            </div>
          </FilterItem>
          <FilterItem label="COLOR">
            <ProductColorSelection handleChange={handleColorChange} />
          </FilterItem>
          <FilterItem label="SIZE">
            <ProductSizeSelection handleChange={handleSizeChange} sizes={[]} />
          </FilterItem>
        </div>
      </div>
      <div className="w-full">
        <button className="w-full bg-black text-white py-3 text-[18px] leading-[22.64px] font-maladroit">
          SET ITEMS
        </button>
      </div>
    </motion.div>
  );
};

export default FiltersMenu;
