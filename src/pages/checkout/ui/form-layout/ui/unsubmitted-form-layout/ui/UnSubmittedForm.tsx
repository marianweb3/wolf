import React, { useState } from "react";
import CheckoutInput from "@/components/common/form/checkout-input";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import clsx from "clsx";
import { FormValues } from "@/pages/checkout/ui/form-layout";

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

interface UnSubmittedDeliveryFormProps {
  formValues: FormValues;
  setFormValues: (value: FormValues) => void;
  setSubmitted: (value: boolean) => void;
}

const UnSubmittedForm = ({
  setFormValues,
  setSubmitted,
  formValues,
}: UnSubmittedDeliveryFormProps) => {
  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values);
    setFormValues(values); // Save form data
    setSubmitted(true); // Hide form and show summary
    setSubmitting(false);
  };

  const [isAddressManually, setIsAddressManually] = useState(false);

  const addressManuallyHandler = () => {
    setIsAddressManually((prevState) => !prevState);
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-[18px] md:gap-[24px] mb-[24px]">
          <h1 className="font-saotorpes text-[30px] md:text-[40px] font-[400] leading-[100%] text-black">
            DELIVERY
          </h1>

          {/*first name and last name inputs*/}

          <div className="flex gap-[16px]">
            <CheckoutInput
              name={"firstName"}
              placeholder={"FIRST NAME"}
              type={"text"}
            />

            <CheckoutInput
              name={"lastName"}
              placeholder={"LAST NAME"}
              type={"text"}
            />
          </div>

          {/*address input*/}

          <CheckoutInput
            name={"address"}
            placeholder={"START TYPING ADDRESS"}
            type={"text"}
          />

          {/*address manually button*/}

          {isAddressManually ? (
            <div className="flex flex-col md:flex-row gap-[18px] md:gap-[16px]">
              <CheckoutInput name={"city"} placeholder={"CITY"} type={"text"} />
              <CheckoutInput
                name={"region"}
                placeholder={"REGION"}
                type={"text"}
              />
              <CheckoutInput
                name={"postal_code"}
                placeholder={"POSTAL CODE"}
                type={"text"}
              />
            </div>
          ) : (
            <div className={"w-full flex justify-start"}>
              <button
                onClick={addressManuallyHandler}
                className="font-maladroit font-[700] text-[14px] md:text-[16px] leading-[110%] text-black border-b border-black w-fit"
              >
                ENTER ADDRESS MANUALLY
              </button>
            </div>
          )}

          {/*email and phone inputs*/}

          <div className="flex gap-[16px]">
            <CheckoutInput
              name={"email"}
              placeholder={"EMAIL"}
              type={"email"}
            />
            <CheckoutInput
              name={"phone"}
              placeholder={"PHONE"}
              type={"tel"}
            ></CheckoutInput>
          </div>

          <div className="flex justify-end mt-[20px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className={clsx(
                "font-maladroit text-[12px] md:text-[14px] font-[700] py-[10px] md:py-[12px] px-[16px] md:px-[20px] leading-[150%] bg-[rgba(0,0,0,0.20)] text-[#909090] transition-colors"
              )}
            >
              SAVE AND CONTINUE
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UnSubmittedForm;
