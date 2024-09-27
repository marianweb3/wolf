import React from "react";
import { Field, ErrorMessage } from "formik";
import clsx from "clsx";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
}

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <div className="relative flex flex-col w-full">
      <ErrorMessage
        name={name}
        component="div"
        className="absolute top-[-35%] text-red-500 text-[10px] font-maladroit"
      />

      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "w-full py-[12px] px-[16px] border-2 border-black bg-white",
          "placeholder:text-[rgba(0,0,0,0.20)] placeholder:text-[16px] placeholder:font-[700] placeholder:leading-[110%] placeholder:font-maladroit"
        )}
      />
    </div>
  );
};

export default Input;
