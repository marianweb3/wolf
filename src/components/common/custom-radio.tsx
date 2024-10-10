import React from "react";

interface CustomRadioProps {
  checked: boolean;
  setChecked: (value: string) => void;
  className?: string;
  value: string;
  name: string;
}

const CustomRadio = ({
  checked,
  setChecked,
  className,
  value,
  name,
}: CustomRadioProps) => {
  return (
    <>
      {/* Hidden default radio */}
      <input
        type="radio"
        className="hidden"
        value={value}
        name={name}
        checked={checked}
        onClick={() => setChecked(value)}
      />

      {/* Radio (shown when checked) */}
      {checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`${className}`}
        >
          <circle cx="10" cy="10" r="9.5" stroke="black" />
          <circle cx="10" cy="10" r="6" fill="black" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`${className}`}
        >
          <circle cx="10" cy="10" r="9.5" stroke="black" />
        </svg>
      )}
    </>
  );
};

export default CustomRadio;
