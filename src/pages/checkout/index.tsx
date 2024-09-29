import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import AsideBagCart from "@/pages/checkout/ui/aside-bag-cart";
import { motion } from "framer-motion";
import FormLayout from "@/pages/checkout/ui/form-layout";

const CheckoutPage = () => {
  const [submitted, setSubmitted] = useState(false); // Track form submission

  return (
    <Layout>
      <section className={"flex flex-col-reverse lg:flex-row bg-[#F0F0F0]"}>
        <div className={"w-full flex justify-center"}>
          <div
            className={
              "flex flex-col max-w-[792px] w-full px-[20px] pt-[60px] md:pt-[120px]"
            }
          >
            <FormLayout submitted={submitted} setSubmitted={setSubmitted} />

            {/* Payment and Order Review sections always visible */}
            {/*helper div for making smooth animation between unsubmitted and submitted form changing cause div overlapping forms*/}
            <div className="relative z-0 bg-[#F0F0F0] h-full w-full pb-[185px]">
              {/* Animate Order Review disappearance */}
              <motion.h1
                className="font-saotorpes px-[10px] pt-[20px] md:pt-[30px] pb-[10px] md:pb-[20px] text-[#C0C0C0] text-[30px] md:text-[40px] font-[400] leading-[100%] border-b border-[#C0C0C0]"
                initial={{ opacity: 1 }} // Fully visible initially
                animate={submitted ? { opacity: 0 } : { opacity: 1 }} // Fade out on submit
                transition={{ duration: 1 }} // Adjust the duration for smoothness
              >
                ORDER REVIEW
              </motion.h1>
            </div>
          </div>
        </div>
        <AsideBagCart />
      </section>
    </Layout>
  );
};

export default CheckoutPage;
