import Layout from "../../components/layout/layout";
import Banner from "./ui/banner/banner";
import ClothingCollection from "./ui/clothing-collection/clothing-collection";
import NewsUpdatesSection from "./ui/news-update-section/news-update-section";
import ShopByCategory from "./ui/shop-by-category/shop-by-category";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { API } from "@/utils/api"; // Import your API utility

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Fetch apparel items
  const { data: apparelData, error: apparelError } = useSWR(
    `${API.api}/api/device?typeName=apparel`,
    fetcher
  );

  // Fetch tech gear items
  const { data: techGearData, error: techGearError } = useSWR(
    `${API.api}/api/device?typeName=tech gear`, // Adjust the type as per your API structure
    fetcher
  );

  // Handle errors or loading states
  if (apparelError || techGearError) return <div>Error loading items</div>;
  if (!apparelData || !techGearData) return <div>Loading...</div>;

  const apparel_items = apparelData.rows || [];
  const tech_gear_items = techGearData.rows || [];

  return (
    <Layout>
      <Banner />
      <ClothingCollection
        title="APPAREL"
        items={apparel_items}
        backgroundImage="/black-bg.webp"
        buttonLabel="All clothes"
        buttonAction={() => navigate("/products/apparel")}
      />
      <ShopByCategory />
      <ClothingCollection
        title="TECH GEAR"
        items={tech_gear_items}
        backgroundImage="/black-bg.webp"
        buttonLabel="All clothes"
        buttonAction={() => navigate("/products/tech-gear")}
      />
      <NewsUpdatesSection />
    </Layout>
  );
};

export default HomePage;
