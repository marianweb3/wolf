import React from "react";
import UnSubmittedForm from "@/pages/checkout/ui/form-layout/ui/unsubmitted-form-layout/ui/UnSubmittedForm";
import PaymentSection from "@/pages/checkout/ui/form-layout/ui/unsubmitted-form-layout/ui/PaymentSection";
import { FormValues } from "@/pages/checkout/ui/form-layout";

interface UnSubmittedFormLayoutProps {
  formValues: FormValues;
  setFormValues: (value: FormValues) => void;
  setSubmitted: (value: boolean) => void;
}

const UnSubmittedFormLayout = ({
  formValues,
  setSubmitted,
  setFormValues,
}: UnSubmittedFormLayoutProps) => {
  return (
    <>
      <UnSubmittedForm
        formValues={formValues}
        setFormValues={setFormValues}
        setSubmitted={setSubmitted}
      />
      <PaymentSection />
    </>
  );
};

export default UnSubmittedFormLayout;
