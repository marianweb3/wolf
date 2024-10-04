import { useState } from "react";

interface SizeSelectionProps {
  handleChange: (selectedSize: string | null) => void;
  sizes: string[];
}

const ProductSizeSelection = ({ handleChange, sizes }: SizeSelectionProps) => {
  const sizesDefault = ["XS", "S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [availableSize, setAvailableSize] = useState(
    sizes.length > 0 ? sizes : sizesDefault
  );
  const handleSizeClick = (size: string) => {
    const newSelectedSize = size === selectedSize ? null : size;
    setSelectedSize(newSelectedSize);
    handleChange(newSelectedSize);
  };

  return (
    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-2">
      {availableSize.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeClick(size)}
          className={`border-2 border-black py-4 font-saotorpes text-[16px] leading-[14.94px] ${
            selectedSize === size ? "bg-black text-white" : ""
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default ProductSizeSelection;
