const Footer = () => {
  return (
    <div className="relative">
      <img
        src={"/black-bg.webp"}
        alt="Background"
        className="absolute w-full h-[120%] md:h-[140%] z-0 top-[-10%] sm:top-[-17%] md:object-fill object-cover"
      />
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between py-[50px] relative z-10 2xl:px-0 px-4 gap-10 2xl:gap-0 xl:flex-row flex-col">
        <img src="/icons/footer-text.svg" alt="Footer Logo" />
        <img
          src="/icons/footer-car.png"
          alt="Footer Logo"
          className="absolute car-rotate"
        />
        <div className="flex flex-col gap-14 max-w-[761px] w-full">
          <div className="w-full flex justify-between text-white flex-wrap gap-10">
            <div className="flex flex-col gap-5 ">
              <h4 className="font-saotorpes text-[20px] leading-[18.68px] text-white">
                Shop
              </h4>
              <div className="flex flex-col gap-4">
                <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                  Apparel
                </span>
                <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                  Tech Gear
                </span>
                <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
                  artwork
                </span>
                <span className="font-maladroit font-bold text-[16px] leading-[20.13px] text-white">
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
