import Layout from "../../components/layout/layout";
import Banner from "./ui/banner/banner";
import ClothingCollection from "./ui/clothing-collection/clothing-collection";
import NewsUpdatesSection from "./ui/news-update-section/news-update-section";
import ShopByCategory from "./ui/shop-by-category/shop-by-category";

const HomePage = () => {
  const handleButtonClick = () => {
    console.log("View all clothes clicked");
  };
  return (
    <Layout>
      <Banner />
      <ClothingCollection
        title="T-SHIRTS"
        items={items}
        backgroundImage="/black-bg.webp"
        buttonLabel="All clothes"
        buttonAction={handleButtonClick}
      />
      <ShopByCategory />
      <ClothingCollection
        title="T-SHIRTS"
        items={items}
        backgroundImage="/black-bg.webp"
        buttonLabel="All clothes"
        buttonAction={handleButtonClick}
      />
      <NewsUpdatesSection />
    </Layout>
  );
};

export default HomePage;

export const items = [
  {
    title: "Land Wolf Hoodies",
    price: 1,
    image: "/clothes/t-shirt.png",
  },
  {
    title: "Wolf Socks",
    price: 135,
    image: "/clothes/t-shirt.png",
  },
  {
    title: "Wolf T-Shirt",
    price: 135,
    image: "/clothes/t-shirt.png",
  },
  {
    title: "Land Wolf Hoodie 2",
    price: 135,
    image: "/clothes/t-shirt.png",
  },
];
