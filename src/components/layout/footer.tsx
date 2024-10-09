import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // Create a reference for the car image
  const carRef = useRef(null);
  const navigate = useNavigate(); // Initialize the navigate function

  // Use the inView hook to detect when the car comes into view
  const isInView = useInView(carRef, { once: true });

  return (
    <div className="relative">
      <img
        src={"/black-bg.webp"}
        alt="Background"
        className="absolute w-full h-[120%] md:h-[140%] z-0 top-[-10%] sm:top-[-17%] md:object-fill object-cover"
      />
      <div
        ref={carRef} // Attach the ref to the car element
        className="max-w-[1600px] mx-auto w-full flex items-center justify-between py-[50px] relative z-10 2xl:px-0 px-4 gap-10 2xl:gap-0 xl:flex-row flex-col"
      >
        <img src="/icons/footer-text.svg" alt="Footer Logo" />
        {/* Animated Footer Car with Full 360 X-Axis Spin */}
        <motion.img
          src="/icons/footer-car.png"
          alt="Footer Car"
          className="absolute"
          ref={carRef} // Attach the ref to the car element
          initial={{ x: "-100vw" }} // Start off-screen to the left
          animate={
            isInView
              ? { x: 0, rotateY: [0, 360], rotate: [0, -2, 2, -2, 0] } // Back-and-forth "dribbling" // Full 360-degree X-axis spin when in view
              : { x: "-100vw", rotateY: 0, rotate: 0 }
          }
          transition={{
            x: { duration: 1, ease: "easeInOut" }, // Smooth slide transition
            rotateY: {
              duration: 2, // Time for full spin
              ease: "easeInOut", // Smooth spinning
            },
            rotate: {
              duration: 2, // Time for full spin
              ease: "easeInOut", // Smooth spinning
              repeat: Infinity, // Continuous spinning
            },
          }}
        />

        <div className="flex flex-col gap-14 max-w-[761px] w-full">
          <div className="w-full flex justify-between text-white flex-wrap gap-10">
            <div className="flex flex-col gap-5 ">
              <h4 className="font-saotorpes text-[20px] leading-[18.68px] text-white">
                Shop
              </h4>
              <div className="flex flex-col gap-4">
                <span
                  onClick={() => navigate("/products/apparel")}
                  className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white cursor-pointer hover:text-gray-500 transition-colors"
                >
                  Apparel
                </span>
                <span
                  onClick={() => navigate("/products/tech-gear")}
                  className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white cursor-pointer hover:text-gray-500 transition-colors"
                >
                  Tech Gear
                </span>
                <span
                  onClick={() => navigate("/products/antwork")}
                  className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white cursor-pointer hover:text-gray-500 transition-colors"
                >
                  artwork
                </span>
                <span
                  onClick={() => navigate("/products/accessories")}
                  className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white cursor-pointer hover:text-gray-500 transition-colors"
                >
                  Accessories
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <h4 className="font-saotorpes text-[20px] leading-[18.68px] text-white">
                support
              </h4>
              <div className="flex flex-col gap-4">
                <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                  Returns / exchanges
                </span>
                <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                  shipping and Delivery
                </span>
                <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                  Contuct us
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <h4 className="font-saotorpes text-[20px] leading-[18.68px] text-white">
                Follow us
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <img src="/icons/telegram.svg" alt="" />
                  <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                    Landwolf
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/icons/twitter.svg" alt="" />
                  <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                    Landwolf
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/icons/mdi_instagram.svg" alt="" />
                  <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                    Landwolf
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/icons/ic_baseline-tiktok.svg" alt="" />
                  <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                    Landwolf
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <p className="font-maladroit font-extrabold text-[16px] leading-[22.4px] text-[#FFFFFF]">
              Stay up to date with the latest Landwolf news
            </p>
            <div className="w-full relative">
              <input
                type="text"
                className="border-2 border-white bg-black w-full px-[10px] py-3 font-maladroit font-bold text-[16px] leading-[20.13px] placeholder:text-[#FFFFFF66]"
                placeholder="email@email.com"
              />
              <img
                src="/icons/white-input-color.svg"
                alt="CheckoutInput Arrow"
                className="absolute right-[10px] top-0 bottom-0 m-auto"
              />
            </div>
            <p className="font-maladroit font-extrabold text-[14px] leading-[17.61px] text-[#FFFFFF99]">
              By subscribing you agree with our Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <div className=" py-5 border-t-[3px] border-white relative z-10">
        <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center sm:flex-row flex-col">
          <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
            2024 © ALL RIGHTS RESERVED
          </span>
          <div className="flex items-center gap-2">
            <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
              Designed by
            </span>
            <img src="/osnovo.svg" alt="" />
            <span className="font-maladroit  text-[16px] leading-[19.06px] text-white">
              © 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
