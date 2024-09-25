const NewsUpdatesSection = () => {
  return (
    <section className="bg-[#D0F5FF] min-h-[727.25px] flex items-center">
      <div className="max-w-[1586px] mx-auto w-full flex items-center justify-between">
        <div className="flex flex-col gap-6 max-w-[573px]">
          <h2 className="font-saotorpes font-normal text-[40px] leading-[43.2px] text-black">
            Sign up for news and updates
          </h2>
          <p className="font-maladroit font-bold text-[18px] leading-[19.44px] text-black">
            Be the first to hear about new products, collaborations, and offers
          </p>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full relative">
              <input
                type="text"
                className="border-2 border-black w-full px-[10px] py-3 font-maladroit font-bold text-[16px] leading-[20.13px] placeholder:text-[#00000066]"
                placeholder="email@email.com"
              />
              <img
                src="/icons/input-arrow.svg"
                alt="Input Arrow"
                className="absolute right-[10px] top-0 bottom-0 m-auto"
              />
            </div>
            <p className="font-maladroit font-extrabold text-[14px] leading-[17.61px] text-[#00000066]">
              By subscribing you agree with our Privacy Policy
            </p>
          </div>
        </div>
        <img src="/icons/swolf.png" alt="" />
      </div>
    </section>
  );
};

export default NewsUpdatesSection;
