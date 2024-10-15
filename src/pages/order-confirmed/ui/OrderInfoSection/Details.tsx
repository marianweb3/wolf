import React from "react";
import { ZeroConverter } from "@/pages/checkout/ui/aside-bag-cart";

interface DetailsProps {
  total: string | undefined;
}

const Details = ({ total }: DetailsProps) => {
  const sub_total = parseFloat(total || "");
  const tax = 0;
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
