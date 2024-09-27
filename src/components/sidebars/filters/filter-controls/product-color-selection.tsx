import { useState } from "react";

interface SvgSelectorProps {
  handleChange: (selectedId: string | null) => void;
}

const ProductColorSelection = ({ handleChange }: SvgSelectorProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSvgClick = (id: string) => {
    const newSelectedId = id === selectedId ? null : id;
    setSelectedId(newSelectedId);
    handleChange(newSelectedId);
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-[14px]">
      {shapes.map((shape) => (
        <svg
          key={shape.id}
          xmlns="http://www.w3.org/2000/svg"
          width={shape.width}
          height={shape.height}
          viewBox={`0 0 ${shape.width} ${shape.height}`}
          fill="none"
          onClick={() => handleSvgClick(shape.id)}
          className={`cursor-pointer ${
            selectedId === shape.id ? "opacity-100" : "opacity-50"
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
    id: "shape1",
    width: 111,
    height: 58,
    fill: "#D24646",
    d: "M109.75 54.1401V2.56718L1 1.01438V56.9736L109.75 54.1401Z",
  },
  {
    id: "shape2",
    width: 112,
    height: 58,
    fill: "#D125BF",
    d: "M1.75 3.85986V55.4328L110.5 56.9856V1.0264L1.75 3.85986Z",
  },
  {
    id: "shape3",
    width: 112,
    height: 58,
    fill: "#45DCF0",
    d: "M1.5 3.85986V55.4328L110.25 56.9856V1.0264L1.5 3.85986Z",
  },
  {
    id: "shape4",
    width: 111,
    height: 58,
    fill: "#B8FF6D",
    d: "M1.25 3.85986V55.4328L110 56.9856V1.0264L1.25 3.85986Z",
  },
];
