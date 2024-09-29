import React from "react";
import SubmittedForm from "@/pages/checkout/ui/form-layout/ui/submitted-form-layout/ui/SubmittedForm";
import PaymentSection from "@/pages/checkout/ui/form-layout/ui/submitted-form-layout/ui/PaymentSection";
import { FormValues } from "@/pages/checkout/ui/form-layout";

interface SubmittedFormProps {
  formValues: FormValues;
  setSubmitted: (value: boolean) => void;
}

const SubmittedFormLayout = ({
  formValues,
  setSubmitted,
}: SubmittedFormProps) => {
  return (
    <>
      <SubmittedForm formValues={formValues} setSubmitted={setSubmitted} />
      <PaymentSection />
    </>
  );
};

export default SubmittedFormLayout;
