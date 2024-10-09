import useCartStore from "@/store/cartStore";
import { Size } from "@/pages/product";

interface ProductSizeSelectionProps {
  sizes: Size[];
}
const ProductSizeSelection = ({ sizes }: ProductSizeSelectionProps) => {
  const { selectedSize, setSelectedSize } = useCartStore();

  const handleSizeClick = (sizeValue: string) => {
    // Toggle logic: if the same size is clicked, deselect it (set it to an empty string or null)
    if (selectedSize === sizeValue) {
      setSelectedSize(""); // Deselect the size
    } else {
      setSelectedSize(sizeValue); // Select the new size
    }
  };

  return (
    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-2">
      {sizes.map((size) => (
        <button
          key={size.id}
          onClick={() => handleSizeClick(size.value)}
          className={`border-2 border-black py-4 font-saotorpes text-[16px] leading-[14.94px] ${
            selectedSize === size.value ? "bg-black text-white" : ""
          }`}
        >
          {size.value}
        </button>
      ))}
    </div>
  );
};

export default ProductSizeSelection;
