import Layout from "@/components/layout/layout";
import ProductItem from "@/components/product/product-item";
import FiltersMenu from "@/components/sidebar/filters-menu";
import useFiltersStore from "@/store/filtersStore";

const CategoryPage = () => {
  const toggleMenu = useFiltersStore((state) => state.toggleMenu);

  return (
    <Layout>
      <div className="flex flex-col gap-6 max-w-[1600px] mx-auto w-full mt-[30px]">
        <div className="flex items-center gap-3">
          <span className="text-[#00000075] font-maladroit font-bold text-[14px] leading-[17.61px]">
            Home
          </span>
          <div className="size-[6px] rounded-full bg-black"></div>
          <span className="text-[#000000] font-maladroit font-bold text-[14px] leading-[17.61px]">
            Apparel
          </span>
        </div>
        <div className="w-full flex justify-between">
          <h1 className="font-saotorpes text-[48px] leading-[36.34px] text-black">
            all clothes
          </h1>
          <div className="max-w-[280px] w-full flex">
            <button
              className="border-2 border-black py-3 px-[35px]"
              onClick={toggleMenu}
            >
              <span className="text-black font-maladroit font-bold text-[16px] leading-[20.13px]">
                Filters
              </span>
            </button>
            <button className="border-2 border-l-0 border-black py-3 px-[15.5px] flex items-center gap-3">
              <span className="text-black font-maladroit font-bold text-[16px] leading-[20.13px]">
                sort by
              </span>
              <img
                src="/icons/arrow.svg"
                alt="Arrow Right"
                className="transform rotate-[-90deg]"
              />
            </button>
          </div>
        </div>
      </div>
      <FiltersMenu />
      <div className="max-w-[1600px] mx-auto w-full mt-[30px] grid grid-cols-3 gap-5 gap-y-10 mb-[200px]">
        {items.map((item, index) => (
          <ProductItem
            key={index}
            title={item.title}
            price={item.price}
            image={item.image}
            isBlack={true}
          />
        ))}
      </div>
    </Layout>
  );
};

export default CategoryPage;

const items = [
  {
    title: "Land Wolf Hoodies",
    price: "135 USDT",
    image: "/clothes/t-shirt.png",
  },
  {
    title: "Wolf Socks",
    price: "50 USDT",
    image: "/clothes/t-shirt.png",
  },
  {
    title: "Wolf T-Shirt",
    price: "80 USDT",
    image: "/clothes/t-shirt.png",
  },
  {
    title: "Land Wolf Hoodie 2",
    price: "150 USDT",
    image: "/clothes/t-shirt.png",
  },
];
