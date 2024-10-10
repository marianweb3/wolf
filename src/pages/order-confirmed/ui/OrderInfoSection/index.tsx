import React from "react";
import ItemCard from "@/pages/checkout/ui/aside-bag-cart/ItemCard";
import Details from "@/pages/order-confirmed/ui/OrderInfoSection/Details";
import { paymentMethods } from "@/pages/checkout/ui/form-layout/ui/submitted-form-layout/ui/PaymentSection";
import clsx from "clsx";
import useCartStore from "@/store/cartStore";

const OrderInfoSection = () => {
  const shipping_address = "350 5th Ave, New York, NY 10118, USA";

  const payment = paymentMethods[0];

  const { cartItems } = useCartStore();

  return (
    <div className={"flex flex-col border-b-2 border-[rgba(0,0,0,0.20)]"}>
      <h2
        className={
          "uppercase text-black font-saotorpes text-[18px] md:text-[24px] font-[400] leading-[100%] mb-[16px] md:mb-[24px]"
        }
      >
        order number (#000000)
      </h2>
      {cartItems.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "grid grid-rows-1 grid-flow-row sm:grid-flow-col gap-y-[25px] gap-x-[5px] md:gap-x-[20px] justify-baseline",
              "lg:flex flex-row py-[24px] lg:gap-[30px] lg:justify-between border-t-2 border-[rgba(0,0,0,0.20)]"
            )}
          >
            <ItemCard className={"!py-0 row-span-3"} item={item} />
            <div
              className={clsx(
                "col-span-2",
                "flex flex-col gap-[8px] max-w-[250px] w-full"
              )}
            >
              <h3 className={"details_text_header"}>SHIPPING ADDRESS</h3>
              <h3 className={"details_text"}>{shipping_address}</h3>
            </div>

            <div
              className={clsx(
                "col-span-2",
                "flex flex-col gap-[8px] max-w-[215px] w-full"
              )}
            >
              <h3 className={"details_text_header"}>PAYMENT METHOD</h3>
              <h3
                className={
                  "font-maladroit text-[18px] font-[700] leading-[100%] text-[rgba(0,0,0,0.30)]"
                }
              >
                <img
                  src={payment.icon}
                  alt={`${payment.label} icon`}
                  className={"w-fit h-[28px] md:h-[32px]"}
                />
              </h3>
            </div>

            <div className={clsx("col-span-2", "flex flex-col gap-[8px]")}>
              <h3 className={"details_text_header"}>DETAILS</h3>
              <Details />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderInfoSection;
