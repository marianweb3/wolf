import React from "react";
import { ZeroConverter } from "@/pages/checkout/ui/aside-bag-cart";

const Details = () => {
  const sub_total = 78;
  const tax = 30;
  const delivery = 0;

  return (
    <>
      {/*Subtotal*/}
      <div className={"flex"}>
        <h3 className={"details_text mr-[8px]"}>SUBTOTAL:</h3>
        <div>
          <h3 className={"details_text"}>
            <ZeroConverter el={sub_total} />
          </h3>
        </div>
      </div>

      {/*Tax*/}
      <div className={"flex"}>
        <h3 className={"details_text mr-[8px]"}>TAX%:</h3>
        <div>
          <h3 className={"details_text"}>
            <ZeroConverter el={tax} />
          </h3>
        </div>
      </div>

      {/*Delivery/Shipping*/}

      <div className={"flex"}>
        <h3 className={"details_text mr-[8px]"}>DELIVERY/SHIPPING:</h3>
        <div>
          <h3 className={"details_text"}>
            <ZeroConverter el={delivery} />
          </h3>
        </div>
      </div>

      {/*Total*/}

      <div className={"flex "}>
        <h3 className={"details_text mr-[8px]"}>TOTAL:</h3>
        <div>
          <h3 className={"details_text"}>
            <ZeroConverter el={sub_total + tax + delivery} />
          </h3>
        </div>
      </div>
    </>
  );
};

export default Details;
