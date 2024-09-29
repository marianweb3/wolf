import CategoryCard from "./category-card";

const ShopByCategory = () => {
  return (
    <section className="bg-[#FCE8FF] py-[150px] px-4 2xl:px-0">
      <div className="max-w-[1600px] mx-auto w-full">
        <h2 className="font-saotorpes text-[28px] sm:text-[36px] md:text-[48px] leading-[32px] md:leading-[36.34px] text-black mb-[43px]">
          Shop by category
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <CategoryCard
            image="/categories/apparel.png"
            text="Apparel"
            bgColor="#FA51FF"
            link="/products"
          />
          <CategoryCard
            image="/categories/tech-gear.png"
            text="Tech Gear"
            bgColor="#000000"
            link="/products"
          />
          <CategoryCard
            image="/categories/artwork.png"
            text="Artwork"
            bgColor="#FFFAED"
            link="/products"
          />
          <CategoryCard
            image="/categories/accessories.png"
            text="Accessories"
            bgColor="#FFD85A"
            link="/products"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
