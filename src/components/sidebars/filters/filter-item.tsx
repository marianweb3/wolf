import { useState, ReactNode } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

interface FilterItemProps {
  label: string;
  children: ReactNode;
}

const FilterItem = ({ label, children }: FilterItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-black last:border-0">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-maladroit font-bold text-[18px] leading-[22.64px] text-black">
          {label}
        </span>
        <span className="text-xl">
          {isOpen ? (
            <RiArrowUpSLine size={40} />
          ) : (
            <RiArrowDownSLine size={40} />
          )}
        </span>
      </div>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default FilterItem;
