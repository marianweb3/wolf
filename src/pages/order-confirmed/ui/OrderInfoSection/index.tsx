import React from "react";
import ItemCard from "@/pages/checkout/ui/aside-bag-cart/ItemCard";
import Details from "@/pages/order-confirmed/ui/OrderInfoSection/Details";
import { paymentMethods } from "@/pages/checkout/ui/form-layout/ui/submitted-form-layout/ui/PaymentSection";
import clsx from "clsx";
import useSWR from "swr";
import { CartItem } from "@/store/cartStore";
import { useParams } from "react-router-dom";
import { API } from "@/utils/api";
import { FormValues } from "@/pages/checkout/ui/form-layout";

interface Order {
  id: number;
  total: string;
  OrderItems: CartItem[];
  shipping: FormValues;
}

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const OrderInfoSection = () => {
  const { hash } = useParams(); // Access the dynamic 'hash' parameter

  // Use SWR to fetch the order by hash
  const { data, error, isLoading } = useSWR<Order[]>(
    `${API.api}/api/ordersbyhash/${hash}`,
    fetcher
  );

  // Handle loading and error states
  if (isLoading)
    return <div className={"warning_error_success_text"}>Loading...</div>;
  if (error)
    return (
      <div className={"warning_error_success_text"}>
        Error fetching order data
      </div>
    );
  if (!data || data.length === 0)
    return <div className={"warning_error_success_text"}>No order found</div>;

  const order = data.at(0);

  console.log(order);

  // const shipping_address = "350 5th Ave, New York, NY 10118, USA";

  const payment = paymentMethods[0];

  return (
    <div className={"flex flex-col border-b-2 border-[rgba(0,0,0,0.20)]"}>
      <h2
        className={
          "uppercase text-black font-saotorpes text-[18px] md:text-[24px] font-[400] leading-[100%] mb-[16px] md:mb-[24px]"
        }
      >
        order number (#{order?.id.toString().padStart(5, "0")})
      </h2>
      {order?.OrderItems.map((item, index) => {
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
              <h3 className={"details_text"}>
                {order?.shipping.address +
                  ", " +
                  order?.shipping.city +
                  ", " +
                  order?.shipping.postal_code +
                  ", " +
                  order?.shipping.region}
              </h3>
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
              <Details total={order?.total} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderInfoSection;
