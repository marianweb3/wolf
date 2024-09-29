import React from "react";
import { FormValues } from "@/pages/checkout/ui/form-layout";

interface SubmittedDeliveryProps {
  formValues: FormValues;
  setSubmitted: (value: boolean) => void;
}
const SubmittedForm = ({
  formValues,
  setSubmitted,
}: SubmittedDeliveryProps) => {
  return (
    <div className={"flex flex-col gap-[24px]"}>
      <div className={"flex md:flex-row flex-col gap-[10px] justify-between"}>
        <div className={"flex items-start gap-[12px]"}>
          <h1 className="font-saotorpes text-[30px] md:text-[40px] font-[400] leading-[100%] text-black">
            DELIVERY
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="29"
            viewBox="0 0 34 29"
            fill="none"
            className={"w-[28px] h-[23px] md:w-[34px] md:h-[29px]"}
          >
            <path
              opacity="0.9"
              d="M29.0395 0L13.4605 20.0217L4.25 11.0498L0 15.1926L14.1645 29L34 4.14286L29.0395 0Z"
              fill="#DA37FF"
            />
          </svg>
        </div>

        <div className={"flex justify-end items-start"}>
          <div className={"flex border-b border-black"}>
            <button
              onClick={() => setSubmitted(false)}
              className={
                "text-[14px] md:text-[16px] font-[700] leading-[120%] text-black font-maladroit"
              }
            >
              EDIT
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-[32px] md:mb-[42px]">
        <h2 className="text-[14px] md:text-[16px] font-maladroit font-[700] leading-[160%] text-black">
          SHIPPING ADDRESS
        </h2>
        <p
          className={
            "text-[14px] md:text-[16px] font-maladroit font-[700] leading-[160%] text-[rgba(0,0,0,0.20)]"
          }
        >
          {formValues.firstName} {formValues.lastName}
        </p>
        <p
          className={
            "text-[14px] md:text-[16px] font-maladroit font-[700] leading-[160%] text-[rgba(0,0,0,0.20)]"
          }
        >
          {formValues.address}
        </p>
        <p
          className={
            "text-[14px] md:text-[16px] font-maladroit font-[700] leading-[160%] text-[rgba(0,0,0,0.20)]"
          }
        >
          {formValues.city}, {formValues.region}, {formValues.postal_code}
        </p>
        <p
          className={
            "text-[14px] md:text-[16px] font-maladroit font-[700] leading-[160%] text-[rgba(0,0,0,0.20)]"
          }
        >
          {formValues.email}
        </p>
        <p
          className={
            "text-[14px] md:text-[16px] font-maladroit font-[700] leading-[160%] text-[rgba(0,0,0,0.20)]"
          }
        >
          {formValues.phone}
        </p>
      </div>
    </div>
  );
};

export default SubmittedForm;
