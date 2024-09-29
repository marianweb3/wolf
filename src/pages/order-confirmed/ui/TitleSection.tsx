import React from "react";

const TitleSection = () => {
  return (
    <div className={"flex flex-col items-center gap-[16px] md:gap-[24px]"}>
      <h1
        className={
          "font-saotorpes text-[32px] md:text-[48px] font-[400] leading-[90%] text-black text-center"
        }
      >
        ORDER CONFIRMED
      </h1>

      <h2
        className={
          "uppercase font-maladroit text-[14px] md:text-[18px] font-[700] leading-[130%] text-[rgba(0,0,0,0.60)] text-center"
        }
      >
        Your order has been successfully placed and is on its way.
      </h2>
    </div>
  );
};

export default TitleSection;
