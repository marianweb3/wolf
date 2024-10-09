import useFiltersStore from "@/store/filtersStore";

const ProductSizeSelection = () => {
  const sizesDefault = ["XS", "S", "M", "L", "XL", "XXL"];
  const { selectedSizes, toggleSize } = useFiltersStore();

  const handleSizeClick = (size: string) => {
    toggleSize(size);
  };

  return (
    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-2">
      {sizesDefault.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeClick(size)}
          className={`border-2 border-black py-4 font-saotorpes text-[16px] leading-[14.94px] ${
            selectedSizes.includes(size) ? "bg-black text-white" : ""
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default ProductSizeSelection;
