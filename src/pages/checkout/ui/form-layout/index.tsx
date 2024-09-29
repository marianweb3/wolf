import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SubmittedFormLayout from "@/pages/checkout/ui/form-layout/ui/submitted-form-layout";
import UnSubmittedFormLayout from "@/pages/checkout/ui/form-layout/ui/unsubmitted-form-layout";

export interface FormValues {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  city: string;
  region: string;
  postal_code: string;
}

interface FormLayoutProps {
  setSubmitted: (value: boolean) => void;
  submitted: boolean;
}

const FormLayout = ({ setSubmitted, submitted }: FormLayoutProps) => {
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

  const [formValues, setFormValues] = useState<FormValues>(initialValues); // Store submitted values

  return (
    <section className={"flex flex-col gap-[40px] w-full"}>
      <AnimatePresence mode="wait">
        {/* Animate between the two forms */}
        {submitted && formValues ? (
          <motion.div
            key="submitted"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Adjust the speed as needed
            layout
          >
            <SubmittedFormLayout
              formValues={formValues}
              setSubmitted={setSubmitted}
            />
          </motion.div>
        ) : (
          <motion.div
            key="unsubmitted"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Adjust the speed as needed
            layout
          >
            <UnSubmittedFormLayout
              formValues={formValues}
              setFormValues={setFormValues}
              setSubmitted={setSubmitted}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FormLayout;
