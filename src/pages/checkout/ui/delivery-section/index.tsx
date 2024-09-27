import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Input from "@/pages/checkout/ui/delivery-section/Input";

interface FormValues {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  city: string;
  region: string;
  postal_code: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("required*"),
  lastName: Yup.string().required("required*"),
  address: Yup.string().required("required*"),
  email: Yup.string().email("Invalid email").required("required*"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .required("required*"),
  city: Yup.string().required("required*"),
  region: Yup.string().required("required*"),
  postal_code: Yup.string().required("required*"),
});

const DeliverySection = () => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    city: "",
    region: "",
    postal_code: "",
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  const [isAddressManually, setIsAddressManually] = useState(false);

  const addressManuallyHandler = () => {
    setIsAddressManually((prevState) => !prevState);
  };

  return (
    <section className={"flex flex-col gap-[40px] w-full"}>
      <h1 className="font-saotorpes text-[40px] font-[400] leading-[100%] text-black">
        DELIVERY
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-[24px]">
            {/*first name and last name inputs*/}

            <div className="flex gap-[16px]">
              <Input
                name={"firstName"}
                placeholder={"FIRST NAME"}
                type={"text"}
              />

              <Input
                name={"lastName"}
                placeholder={"LAST NAME"}
                type={"text"}
              />
            </div>

            {/*address input*/}

            <Input
              name={"address"}
              placeholder={"START TYPING ADDRESS"}
              type={"text"}
            />

            {/*address manually button*/}

            {isAddressManually ? (
              <div className="flex gap-[16px]">
                <Input name={"city"} placeholder={"CITY"} type={"text"} />
                <Input name={"region"} placeholder={"REGION"} type={"text"} />
                <Input
                  name={"postal_code"}
                  placeholder={"POSTAL CODE"}
                  type={"text"}
                />
              </div>
            ) : (
              <div className={"w-full flex justify-start"}>
                <button
                  onClick={addressManuallyHandler}
                  className="font-maladroit font-[700] text-[16px] leading-[110%] text-black border-b border-black w-fit"
                >
                  ENTER ADDRESS MANUALLY
                </button>
              </div>
            )}

            {/*email and phone inputs*/}

            <div className="flex gap-[16px]">
              <Input name={"email"} placeholder={"EMAIL"} type={"email"} />
              <Input name={"phone"} placeholder={"PHONE"} type={"tel"}></Input>
            </div>

            <div className="flex justify-end mt-[20px]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-maladroit text-[14px] font-[700] py-[12px] px-[20px] leading-[150%] bg-[rgba(0,0,0,0.20)] text-[#909090] hover:bg-gray-400 transition-colors"
              >
                SAVE AND CONTINUE
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DeliverySection;
