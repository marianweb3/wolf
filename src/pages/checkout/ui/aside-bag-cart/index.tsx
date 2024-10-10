import React from "react";
import ItemCard from "@/pages/checkout/ui/aside-bag-cart/ItemCard";
import clsx from "clsx";
import useCartStore from "@/store/cartStore";

export const ZeroConverter = ({ el }: { el: number }) => {
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
  const { cartItems } = useCartStore();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const sub_total = totalPrice;
  const tax = 0;
  const delivery = 0;

  const { isOpen, toggleCart } = useCartStore();

  return (
    <aside
      className={clsx(
        "flex flex-col justify-start w-full  border-black bg-[#FFFDF7]",
        "w-full max-w-full lg:max-w-[440px] xl:max-w-[720px] border-t-2 xl:border-l-2",
        "pt-[50px] pb-[20px] pl-[30px] pr-[30px] md:pl-[50px] md:pr-[50px] lg:pb-[90px] lg:pt-[90px] lg:pr-[50px] xl:pb-[120px] xl:pt-[120px] xl:px-[80px] xl:pr-[160px]"
      )}
    >
      <div className={"flex justify-between mb-[30px] md:mb-[40px]"}>
        <h2
          className={
            "text-[24px] md:text-[34px] font-[400] text-black font-saotorpes whitespace-nowrap leading-[100%]"
          }
        >
          IN YOUR BAG
        </h2>

        <div className={"flex items-end border-b border-black"}>
          <button
            onClick={toggleCart}
            className={
              "text-[14px] md:text-[16px] font-[700] leading-[120%] text-black font-maladroit"
            }
          >
            EDIT
          </button>
        </div>
      </div>

      {sub_total === 0 ? (
        <div className="flex justify-center col-start-2 text-black w-full font-maladroit text-[18px]">
          No Products Found
        </div>
      ) : (
        <>
          {/*Subtotal*/}
          <div
            className={
              "flex justify-between border-t-2 border-[#0000004D] px-[8px] py-[8px] md:py-[12px]"
            }
          >
            <h3 className={"your_bag_text"}>SUBTOTAL</h3>
            <div>
              <h3 className={"your_bag_text"}>
                <ZeroConverter el={sub_total} />
              </h3>
            </div>
          </div>

          {/*Tax*/}
          <div
            className={
              "flex justify-between border-t-2 border-[#0000004D] px-[8px] py-[8px] md:py-[12px]"
            }
          >
            <h3 className={"your_bag_text"}>TAX%</h3>
            <div>
              <h3 className={"your_bag_text"}>
                <ZeroConverter el={tax} />
              </h3>
            </div>
          </div>

          {/*Delivery/Shipping*/}

          <div
            className={
              "flex justify-between border-t-2 border-[#0000004D] px-[8px] py-[8px] md:py-[12px]"
            }
          >
            <h3 className={"your_bag_text"}>DELIVERY/SHIPPING</h3>
            <div>
              <h3 className={"your_bag_text"}>
                <ZeroConverter el={delivery} />
              </h3>
            </div>
          </div>

          {/*Total*/}

          <div
            className={
              "flex justify-between border-y-2 border-black px-[8px] py-[8px] md:py-[12px]"
            }
          >
            <h3 className={"your_bag_text"}>TOTAL</h3>
            <div>
              <h3 className={"your_bag_text"}>
                <ZeroConverter el={sub_total + tax + delivery} />
              </h3>
            </div>
          </div>

          <div
            className="flex flex-col py-[24px] gap-[20px] overflow-y-scroll"
            style={{ maxHeight: "500px" }} // Adjust this height as necessary
          >
            {cartItems.map((item) => (
              <ItemCard
                item={item}
                className={"!py-0 border-b-2 border-b-[#0000004D] !pb-[10px]"}
              />
            ))}
          </div>
        </>
      )}
    </aside>
  );
};

export default AsideBagCart;
