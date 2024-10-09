import useCartStore from "@/store/cartStore";
import { Color } from "@/pages/product";

interface ProductColorSelectionProps {
  colors: Color[];
}

const ProductColorSelection = ({ colors }: ProductColorSelectionProps) => {
  const { selectedColor, setSelectedColor } = useCartStore();

  // Extract the color values from the colors array
  const colorValues = colors.map((color) => color.value);

  // Filter the shapes array based on the color values
  const filteredShapes = shapes.filter((shape) =>
    colorValues.includes(shape.id)
  );

  const handleColorClick = (colorId: string) => {
    // Toggle logic: if the same color is clicked, deselect it (set it to empty string or null)
    if (selectedColor === colorId) {
      setSelectedColor(""); // Deselect the color
    } else {
      setSelectedColor(colorId); // Select the new color
    }
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-[14px]">
      {filteredShapes.map((shape) => (
        <svg
          key={shape.id}
          xmlns="http://www.w3.org/2000/svg"
          width={shape.width}
          height={shape.height}
          viewBox={`0 0 ${shape.width} ${shape.height}`}
          fill="none"
          onClick={() => handleColorClick(shape.id)}
          className={`cursor-pointer ${
            selectedColor === shape.id ? "opacity-100" : "opacity-50"
          }`}
        >
          <path d={shape.d} fill={shape.fill} stroke="black" strokeWidth="2" />
        </svg>
      ))}
    </div>
  );
};

export default ProductColorSelection;

const shapes = [
  {
    id: "red",
    width: 111,
    height: 58,
    fill: "#D24646",
    d: "M109.75 54.1401V2.56718L1 1.01438V56.9736L109.75 54.1401Z",
  },
  {
    id: "pink",
    width: 112,
    height: 58,
    fill: "#D125BF",
    d: "M1.75 3.85986V55.4328L110.5 56.9856V1.0264L1.75 3.85986Z",
  },
  {
    id: "blue",
    width: 112,
    height: 58,
    fill: "#45DCF0",
    d: "M1.5 3.85986V55.4328L110.25 56.9856V1.0264L1.5 3.85986Z",
  },
  {
    id: "green",
    width: 111,
    height: 58,
    fill: "#B8FF6D",
    d: "M1.25 3.85986V55.4328L110 56.9856V1.0264L1.25 3.85986Z",
  },
  {
    id: "yellow",
    width: 111,
    height: 58,
    fill: "#FFFF00",
    d: "M1.25 3.85986V55.4328L110 56.9856V1.0264L1.25 3.85986Z",
  },
];
