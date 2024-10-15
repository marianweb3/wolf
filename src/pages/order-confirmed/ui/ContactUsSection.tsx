import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUsSection = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    console.log("Contact us triggerred");
  };

  const handleContinueShopping = () => {
    console.log("Continue shopping triggerred");
    navigate("/");
  };

  return (
    <div
      className={
        "flex gap-[30px] sm:flex-row flex-col justify-between items-baseline sm:items-center"
      }
    >
      <div className={"flex items-center gap-[8px]"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
        >
          <circle cx="9.60187" cy="10.095" r="8.39777" fill="black" />
          <path
            d="M6.36058 2.50038C6.02201 2.58502 5.77336 2.80367 5.4804 2.96705C5.15447 3.14882 4.80523 3.39754 4.52342 3.64048C3.89364 4.1834 3.11233 4.60131 2.78077 5.42448C2.66953 5.70067 2.65127 5.91965 2.46769 6.16879C2.26487 6.44405 2.12251 6.69717 2.04827 7.03126C1.86122 7.87298 1.35156 8.59105 1.19172 9.44142C1.02893 10.3074 1.15873 11.1455 1.36303 11.9934C1.45773 12.3864 1.48291 12.8583 1.64362 13.228C1.85156 13.7062 2.23411 14.1237 2.50313 14.5689C2.78827 15.0409 3.09736 15.3998 3.46602 15.8095C3.76831 16.1453 4.07338 16.5456 4.4289 16.8255C4.74156 17.0716 5.21153 17.3644 5.59559 17.4428C6.11748 17.5493 6.61966 17.7347 7.14625 17.8238C7.51823 17.8868 7.84805 18.113 8.21546 18.2049C10.0455 18.6624 12.0133 18.637 13.7919 17.9006C14.2559 17.7086 14.7569 17.4374 15.1447 17.115C15.7137 16.6418 16.019 15.9817 16.4088 15.3753C17.6623 13.4255 18.16 10.9042 17.6317 8.63213C17.418 7.71323 17.3514 6.50289 16.7397 5.74347C16.6011 5.57145 16.525 5.36692 16.3882 5.19409C16.1297 4.8676 15.8429 4.5641 15.5405 4.27847C15.0137 3.78098 14.497 3.30579 13.9012 2.89617C12.6381 2.02778 10.8997 1.49023 9.37329 1.49023C8.29354 1.49023 6.89161 1.59711 6.04159 2.34088"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9.49678 15.7384C9.461 15.2732 9.31806 14.8219 9.27231 14.3561C9.21925 13.8159 9.13504 13.2814 9.08032 12.7434C8.972 11.6782 9.08557 10.5254 9.17779 9.46484"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8.48616 5.85036C8.45529 6.1282 8.47757 6.3216 8.75199 6.45881C8.88773 6.52668 9.18819 6.49779 9.27183 6.35838C9.38432 6.17089 9.58045 5.84762 9.26297 5.74993C9.12846 5.70855 8.99799 5.68425 8.85832 5.6377"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <h3
          className={
            "text-[14px] md:text-[16px] font-maladroit font-[700] text-black leading-[100%] opacity-[0.4]"
          }
        >
          NEED HELP?
        </h3>
        <button
          className={
            "text-[14px] md:text-[16px] font-maladroit font-[700] text-black leading-[100%] underline"
          }
          onClick={handleContactUs}
        >
          CONTACT US
        </button>
      </div>

      <div className={"flex w-full sm:w-fit justify-end"}>
        <button
          onClick={handleContinueShopping}
          className="max-w-[248px] py-[12px] px-[20px] w-full bg-black text-white text-[12px] md:text-[14px] font-[700] font-maladroit transition-all hover:bg-opacity-80"
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;
