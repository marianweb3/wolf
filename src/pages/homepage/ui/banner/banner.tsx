import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full relative">
      <motion.img
        src="/banner/Layer6.png"
        alt=""
        className="w-full relative z-[6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="/banner/Layer7.png"
        alt=""
        className="w-full absolute top-0 z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      />
      <motion.img
        src="/banner/Layer8.png"
        alt=""
        className="w-full absolute top-0 z-[4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.img
        src="/banner/Layer9.png"
        alt=""
        className="w-full absolute top-0 z-[3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.img
        src="/banner/Layer10.png"
        alt=""
        className="w-full absolute top-0 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.img
        src="/banner/title.webp"
        alt="Title"
        className="absolute top-0 lg:top-[53px] left-1/2 transform -translate-x-1/2 z-[7] max-w-[300px] sm:max-w-[400px] md:max-w-[650px] xl:max-w-[900px] 2xl:max-w-[1400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <div className="relative bottom-0 w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1300px] mx-auto">
        <div className="absolute bottom-[81px] lg:bottom-[120px] left-0 z-[10] flex flex-col items-center max-w-[210px] w-full sm:max-w-auto">
          <motion.img
            src="/banner/sale.webp"
            alt="Sale"
            className="max-w-[150px] sm:max-w-[200px] md:max-w-[229px] lg:max-w-[350px] xl:max-w-[500px] 2xl:max-w-[634.21px] sm:block hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <button
            className="relative mt-[-10%] uppercase font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[22.64px]
  text-black py-[8px] sm:py-[10px] md:py-[12px] lg:py-[15px] max-w-[160px] sm:max-w-[180px] md:max-w-[210px] lg:max-w-[314px] w-full border-[1px] sm:border-[2px] md:border-[4px] border-black border-l-[3px] sm:border-l-[5px] md:border-l-[10px] bg-[#FFDD20]
  hover:bg-black hover:text-white hover:border-l-[2px] hover:border-r-[4px] hover:border-black transition-all duration-300"
          >
            SHOP NOW
          </button>
        </div>

        <div className="absolute bottom-0 right-0 w-full flex justify-end z-[8]">
          <div className="relative w-[200px] h-[180px] sm:w-[300px] sm:h-[250px] lg:w-[400px] lg:h-[350px] xl:w-[500px] xl:h-[400px] 2xl:w-[706px] 2xl:h-[602px]">
            <motion.img
              src="/banner/wolf-avatar.webp"
              alt="Wolf Avatar"
              className="absolute z-[9]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <motion.img
              src="/banner/smoke.webp"
              alt="Smoke"
              className="absolute z-[10] top-[10%] left-[10%] xl:max-w-full max-w-[100px] sm:max-w-[150px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
