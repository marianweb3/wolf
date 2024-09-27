import React from "react";

const ItemCard = () => {
  const title = "the real lanwolf";
  const size = "m";
  const color = "white";
  const qty = 1;
  const price = 78;

  return (
    <div className={"flex gap-[14px] py-[24px]"}>
      <div
        className={
          "py-[8px] px-[5px] bg-[#FFD85A] border-2 border-black size-[139px]"
        }
      >
        <img
          src="/clothes/t-shirt-checkout.svg"
          alt="shirt"
          className={"w-full h-full"}
        />
      </div>

      <div className={"flex flex-col gap-[8px]"}>
        <h3
          className={
            "font-saotorpes text-[18px] leading-[110%] font-[400] text-black uppercase"
          }
        >
          {title}
        </h3>
        <h3
          className={
            "font-maladroit text-[18px]  leading-[120%] font-[700] text-[rgba(0,0,0,0.30)] uppercase"
          }
        >
          size: {size}
        </h3>
        <h3
          className={
            "font-maladroit text-[18px] leading-[120%] font-[700] text-[rgba(0,0,0,0.30)] uppercase"
          }
        >
          color: {color}
        </h3>
        <h3
          className={
            "font-maladroit text-[18px] leading-[120%] font-[700] text-[rgba(0,0,0,0.30)] uppercase"
          }
        >
          qty: {qty}
        </h3>
        <h3
          className={
            "font-maladroit text-[18px] leading-[120%] font-[700] text-[rgba(0,0,0,0.30)] uppercase"
          }
        >
          ${price}
        </h3>
      </div>
    </div>
  );
};

export default ItemCard;
