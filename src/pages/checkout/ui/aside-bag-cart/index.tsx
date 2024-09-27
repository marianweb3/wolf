import React from "react";
import ItemCard from "@/pages/checkout/ui/aside-bag-cart/ItemCard";
import clsx from "clsx";

const ZeroConverter = ({ el }: { el: number }) => {
  return (
    <>
      {el === 0 ? (
        "FREE"
      ) : (
        <>
          <p className="inline mr-[10px]">{el}</p>USDT
        </>
      )}
    </>
  );
};

const AsideBagCart = () => {
  const sub_total = 78;
  const tax = 30;
  const delivery = 0;

  return (
    <aside
      className={clsx(
        "flex flex-col  w-full  border-black bg-[#FFFDF7]",
        "w-full xl:max-w-[720px] border-t-2 xl:border-l-2",
        "py-[90px] pl-[50px] pr-[130px] xl:py-[120px] xl:pl-[80px] xl:pr-[160px]"
      )}
    >
      <div className={"flex justify-between mb-[40px]"}>
        <h2
          className={
            "text-[34px] font-[400] text-black font-saotorpes whitespace-nowrap leading-[100%]"
          }
        >
          IN YOUR BAG
        </h2>

        <button
          className={
            "text-[16px] font-[700] underline text-black font-maladroit"
          }
        >
          EDIT
        </button>
      </div>

      {/*Subtotal*/}
      <div
        className={
          "flex justify-between border-t-2 border-[#0000004D] px-[8px] py-[12px]"
        }
      >
        <h3
          className={"text-[#0000004D] text-[20px] font-[700] font-maladroit"}
        >
          SUBTOTAL
        </h3>
        <div>
          <h3
            className={"text-[#0000004D] text-[20px] font-[700] font-maladroit"}
          >
            <ZeroConverter el={sub_total} />
          </h3>
        </div>
      </div>

      {/*Tax*/}
      <div
        className={
          "flex justify-between border-t-2 border-[#0000004D] px-[8px] py-[12px]"
        }
      >
        <h3
          className={"text-[#0000004D] text-[20px] font-[700] font-maladroit"}
        >
          TAX%
        </h3>
        <div>
          <h3
            className={"text-[#0000004D] text-[20px] font-[700] font-maladroit"}
          >
            <ZeroConverter el={tax} />
          </h3>
        </div>
      </div>

      {/*Delivery/Shipping*/}

      <div
        className={
          "flex justify-between border-t-2 border-[#0000004D] px-[8px] py-[12px]"
        }
      >
        <h3
          className={"text-[#0000004D] text-[20px] font-[700] font-maladroit"}
        >
          DELIVERY/SHIPPING
        </h3>
        <div>
          <h3
            className={"text-[#0000004D] text-[20px] font-[700] font-maladroit"}
          >
            <ZeroConverter el={delivery} />
          </h3>
        </div>
      </div>

      {/*Total*/}

      <div
        className={
          "flex justify-between border-y-2 border-black px-[8px] py-[12px]"
        }
      >
        <h3 className={"text-black text-[20px] font-[700] font-maladroit"}>
          TOTAL
        </h3>
        <div>
          <h3 className={"text-black text-[20px] font-[700] font-maladroit"}>
            <ZeroConverter el={sub_total + tax + delivery} />
          </h3>
        </div>
      </div>

      <ItemCard />
    </aside>
  );
};

export default AsideBagCart;
