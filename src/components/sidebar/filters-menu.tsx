import useFiltersStore from "@/store/filtersStore";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const FilterItem = ({ label }: { label: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-gray-200">
    <span className="text-lg">{label}</span>
    <span className="text-xl">&gt;</span>
  </div>
);

const FiltersMenu = () => {
  const { isOpen, toggleMenu } = useFiltersStore();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white z-50 max-w-[549px] flex flex-col justify-between p-8"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex flex-col gap-[]">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">FILTERS</h2>
          <button onClick={toggleMenu} className="text-2xl">
            <X size={24} />
          </button>
        </div>
        <FilterItem label="PRICE" />
        <FilterItem label="COLOR" />
        <FilterItem label="SIZE" />
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
