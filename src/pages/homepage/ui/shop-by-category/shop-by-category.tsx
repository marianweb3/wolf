import { API } from "@/utils/api";
import CategoryCard from "./category-card";
import useSWR from "swr";

interface Category {
  id: string;
  name: string;
  prewiewImg: string;
}

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

const ShopByCategory: React.FC = () => {
  const { data, error, isLoading } = useSWR<Category[]>(
    `${API}/api/type`,
    fetcher
  );

  if (error) return <div>Failed to load categories</div>;
  if (isLoading) return <div>Loading categories...</div>;

  return (
    <section className="bg-[#FCE8FF] py-[150px] px-4 2xl:px-0">
      <div className="max-w-[1600px] mx-auto w-full">
        <h2 className="font-saotorpes text-[28px] sm:text-[36px] md:text-[48px] leading-[32px] md:leading-[36.34px] text-black mb-[43px]">
          Shop by category
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data?.map((category) => (
            <CategoryCard
              key={category.id}
              image={`${API}/${category.prewiewImg}`}
              text={category.name}
              bgColor="#FA51FF"
              link="/products"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
