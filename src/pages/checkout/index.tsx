import React from "react";
import Layout from "@/components/layout/layout";
import AsideBagCart from "@/pages/checkout/ui/aside-bag-cart";
import DeliverySection from "@/pages/checkout/ui/delivery-section";

const CheckoutPage = () => {
  return (
    <Layout>
      <section className={"flex flex-col xl:flex-row bg-[#F0F0F0]"}>
        <div className={"w-full flex justify-center"}>
          <div
            className={
              "flex flex-col gap-[24px] max-w-[792px] w-full p-[20px] pt-[120px] pb-[185px]"
            }
          >
            <DeliverySection />
            <div className={"flex flex-col"}>
              <h1 className="font-saotorpes px-[10px] pt-[30px] pb-[20px] text-[40px] font-[400] leading-[100%] text-black border-y border-black opacity-[0.2]">
                PAYMENT
              </h1>
              <h1 className="font-saotorpes px-[10px] pt-[30px] pb-[20px] text-[40px] font-[400] leading-[100%] text-black border-b border-black opacity-[0.2]">
                ORDER REVIEW
              </h1>
            </div>
          </div>
        </div>
        <AsideBagCart />
      </section>
    </Layout>
  );
};

export default CheckoutPage;
