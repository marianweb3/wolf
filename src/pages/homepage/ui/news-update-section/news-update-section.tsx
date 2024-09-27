import { useState } from "react";

const NewsUpdatesSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <section className="bg-[#D0F5FF] min-h-[900px] lg:min-h-[727.25px] flex items-center 2xl:px-0 px-4 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-lg w-full">
          <h2 className="font-saotorpes font-normal text-3xl md:text-4xl lg:text-5xl leading-tight text-black transition-all duration-300 ease-in-out">
            Sign up for news and updates
          </h2>
          <p className="font-maladroit font-bold text-lg md:text-xl text-black transition-all duration-300 ease-in-out">
            Be the first to hear about new products, collaborations, and offers
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            <div className="w-full relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-black w-full px-4 py-3 font-maladroit font-bold text-base md:text-lg placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="email@email.com"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
              >
                <img
                  src="/icons/input-arrow.svg"
                  alt="Submit"
                  className="w-6 h-6"
                />
              </button>
            </div>
            <p className="font-maladroit font-extrabold text-sm text-black/40 transition-all duration-300 ease-in-out">
              By subscribing you agree with our Privacy Policy
            </p>
          </form>
        </div>
        <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <img
            src="/icons/swolf.png"
            alt="Swolf"
            className="w-full h-auto object-cover transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsUpdatesSection;
