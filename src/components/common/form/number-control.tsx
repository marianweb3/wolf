import { MinusIcon, PlusIcon } from "../svg-icons";

interface NumberControlProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

const NumberControl = ({
  value,
  onChange,
  min = 1,
  max = 10,
}: NumberControlProps) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center justify-between px-[6px] py-[10px] max-w-[138px] w-full border-2 border-black">
      <button
        onClick={handleDecrement}
        className={`flex items-center justify-center focus:outline-none ${
          value <= min ? "text-gray-400" : "text-black"
        }`}
        disabled={value <= min}
      >
        <MinusIcon />
      </button>
      <div className="text-[16px] font-maladroit font-bold">{value}</div>
      <button
        onClick={handleIncrement}
        className={`flex items-center justify-center focus:outline-none ${
          value >= max ? "text-gray-400" : "text-black"
        }`}
        disabled={value >= max}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default NumberControl;
