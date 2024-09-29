import React from "react";
import { Field, ErrorMessage } from "formik";
import clsx from "clsx";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
}

const CheckoutInput = ({ type, name, placeholder }: InputProps) => {
  return (
    <div className="relative flex flex-col w-full">
      <ErrorMessage
        name={name}
        component="div"
        className="absolute top-[-30%] md:top-[-35%] text-red-500 text-[8px] md:text-[10px] font-maladroit"
      />

      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "w-full py-[8px] md:py-[12px] px-[12px] md:px-[16px] border-2 border-black bg-white",
          "placeholder:text-[rgba(0,0,0,0.20)] placeholder:text-[14px] md:placeholder:text-[16px] placeholder:font-[700] placeholder:font-maladroit"
        )}
      />
    </div>
  );
};

export default CheckoutInput;
