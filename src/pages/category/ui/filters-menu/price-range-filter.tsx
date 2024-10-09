import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import useFiltersStore from "@/store/filtersStore";

const PriceRangeFilter = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useFiltersStore();

  const minAllowedPrice = 0;
  const maxAllowedPrice = 17000;

  const handleSliderChange = (values: [number, number]) => {
    const [min, max] = values;
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="wrapper mb-6 mt-4">
      <RangeSlider
        id={"range-slider-gradient"}
        min={minAllowedPrice}
        max={maxAllowedPrice}
        value={[minPrice, maxPrice]} // bind Zustand state
        onInput={handleSliderChange}
      />
    </div>
  );
};

export default PriceRangeFilter;
