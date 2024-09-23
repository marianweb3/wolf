import React from "react";

const Banner = () => {
  return (
    <section className="w-full relative ">
      {/* Layer images */}
      <img src="/banner/Layer6.png" alt="" className="w-full relative z-[6]" />
      <img
        src="/banner/Layer7.png"
        alt=""
        className="w-full absolute top-0 z-[5]"
      />
      <img
        src="/banner/Layer8.png"
        alt=""
        className="w-full absolute top-0 z-[4]"
      />
      <img
        src="/banner/Layer9.png"
        alt=""
        className="w-full absolute top-0 z-[3]"
      />
      <img
        src="/banner/Layer10.png"
        alt=""
        className="w-full absolute top-0 z-[2]"
      />

      {/* Title image positioned */}
      <img
        src="/banner/title.webp"
        alt="Title"
        className="absolute top-[53px] left-1/2 transform -translate-x-1/2 z-[7] max-w-[1400px]"
      />
      <div className="relative bottom-0 w-full max-w-[1600px] mx-auto">
        <div className="absolute bottom-[120px] left-0 z-[10] flex flex-col items-center">
          <img
            src="/banner/sale.webp"
            alt="Sale"
            className="max-w-[634.21px]"
          />
          <button className="relative mt-[-10%] uppercase font-bold text-[18px] leading-[22.64px] text-black py-[18px] max-w-[314px] w-full border-[4px] border-black border-l-[10px] bg-[#FFDD20]">
            SHOP now
          </button>
        </div>

        <div className="absolute bottom-0 right-0  w-full flex justify-end z-[8]">
          <div className="relative w-[706px] h-[602px]">
            <img
              src="/banner/wolf-avatar.webp"
              alt="Wolf Avatar"
              className="absolute z-[9]"
            />
            <img
              src="/banner/smoke.webp"
              alt="Smoke"
              className="absolute z-[10] top-[10%] left-[10%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
