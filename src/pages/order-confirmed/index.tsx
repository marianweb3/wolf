import React from "react";
import Layout from "@/components/layout/layout";
import TitleSection from "@/pages/order-confirmed/ui/TitleSection";
import ContactUsSection from "@/pages/order-confirmed/ui/ContactUsSection";
import OrderInfoSection from "@/pages/order-confirmed/ui/OrderInfoSection";

const OrderConfirmedPage = () => {
  return (
    <Layout>
      <section
        className={
          "flex justify-center items-center bg-[#FFFDF7] pb-[150px] pt-[70px] md:pt-[120px] mx-[20px]"
        }
      >
        <div
          className={
            "flex flex-col gap-[40px] md:gap-[65px] max-w-[1600px] w-full"
          }
        >
          <TitleSection />
          <OrderInfoSection />
          <ContactUsSection />
        </div>
      </section>
    </Layout>
  );
};

export default OrderConfirmedPage;
