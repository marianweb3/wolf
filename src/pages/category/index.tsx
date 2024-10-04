import React from "react";
import useSWR from "swr";
import Breadcrumb from "@/components/common/breadcrumb";
import Layout from "@/components/layout/layout";
import ProductItem from "@/components/product/product-item";
import FiltersMenu from "@/components/sidebars/filters/filters-menu";
import useFiltersStore from "@/store/filtersStore";
import { API } from "@/utils/api";

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

interface ApiResponse {
  count: number;
  rows: Product[];
}

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Apparel" }];

const CategoryPage: React.FC = () => {
  const toggleMenu = useFiltersStore((state) => state.toggleMenu);
  const { data, error, isLoading } = useSWR<ApiResponse, Error>(
    `${API.api}/api/device`,
    fetcher
  );

  return (
    <Layout>
      <div className="flex flex-col gap-6 max-w-[1600px] mx-auto w-full mt-[30px] 2xl:px-0 px-4">
        <Breadcrumb items={breadcrumbItems} />
        <div className="w-full flex flex-col sm:flex-row justify-between items-center">
          <h1 className="font-saotorpes text-[32px] leading-[36.34px] text-black sm:text-[48px] sm:leading-[36.34px]">
            all clothes
          </h1>
          <div className="max-w-[285px] w-full flex flex-col sm:flex-row sm:justify-end">
            <button
              className="border-2 border-black py-2 px-4 sm:py-3 sm:px-[35px] mb-2 sm:mb-0"
              onClick={toggleMenu}
            >
              <span className="text-black font-maladroit font-bold text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20.13px]">
                Filters
              </span>
            </button>
            <button className="border-2 sm:border-l-0 border-black py-2 px-4 sm:py-3 sm:px-[15.5px] flex items-center gap-2">
              <span className="text-black font-maladroit font-bold text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20.13px]">
                sort by
              </span>
              <img
                src="/icons/arrow.svg"
                alt="Arrow Right"
                className="transform rotate-[-90deg] w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
              />
            </button>
          </div>
        </div>
      </div>
      <FiltersMenu />
      <div className="max-w-[1600px] mx-auto w-full mt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 mb-[200px] 2xl:px-0 px-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading products</div>
        ) : (
          data?.rows.map((item) => (
            <ProductItem
              key={item.id}
              title={item.name}
              price={parseFloat(item.price)}
              image={`${API.api}/${item.img}`}
              isBlack={true}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
