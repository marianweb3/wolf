import React, { useEffect } from "react";
import useSWR from "swr";
import Breadcrumb from "@/components/common/breadcrumb";
import Layout from "@/components/layout/layout";
import ProductItem from "@/components/product/product-item";
import FiltersMenu from "@/pages/category/ui/filters-menu";
import useFiltersStore from "@/store/filtersStore";
import { API } from "@/utils/api";
import SortDropdown from "@/pages/category/ui/sort-dropdown";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { Product } from "@/pages/product";
import { IsLoadingResponse } from "swr/_internal";

interface ApiResponse {
  count: number;
  rows: Product[];
}

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const CategoryPage: React.FC = () => {
  const toggleMenu = useFiltersStore((state) => state.toggleMenu);
  const sortOption = useFiltersStore((state) => state.sortOption);
  const filters = useFiltersStore((state) => state.filters);
  const page = useFiltersStore((state) => state.page);
  const limit = useFiltersStore((state) => state.limit);
  const setPage = useFiltersStore((state) => state.setPage);

  const { type } = useParams();

  const typeName = type?.replace(/-/g, " ") || "";

  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: typeName }];

  const {
    data,
    error,
    isLoading,
  }: {
    data: ApiResponse;
    error: Error | undefined;
    isLoading: IsLoadingResponse;
  } = useSWR(
    `${API.api}/api/device?sort=${sortOption}&colors=${filters.selectedColors}&sizes=${filters.selectedSizes}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&typeName=${typeName}&page=${page}&limit=${limit}`,
    fetcher,
    {
      revalidateOnFocus: false, // Prevent revalidation when window gets focus
      // revalidateOnMount: sortOption || filters || type || limit || page, // Trigger refetching based on sorting or filter application
    }
  );

  const handleNextPage = () => {
    if (data && page * limit < data.count) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading data</div>;

  console.log("data?.rows.length=", data?.rows.length);
  console.log("loading", isLoading);
  console.log("error", error);
  return (
    <Layout>
      {/*filters & sort by section*/}
      <div className="flex flex-col gap-6 max-w-[1600px] mx-auto w-full mt-[30px] 2xl:px-0 px-4">
        <Breadcrumb items={breadcrumbItems} />
        <div className="w-full flex flex-col sm:flex-row justify-between items-center">
          <h1 className="font-saotorpes text-[32px] leading-[36.34px] text-black sm:text-[48px] sm:leading-[36.34px]">
            all clothes
          </h1>
          <div className="max-w-[285px] w-full flex flex-col sm:flex-row sm:justify-end">
            <button
              className="border-2 border-black py-2 px-4 sm:py-3 sm:px-[35px] mb-2 sm:mb-0 hover:bg-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              <span className="text-black font-maladroit font-bold text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20.13px]">
                Filters
              </span>
            </button>

            <SortDropdown />
          </div>
        </div>
      </div>

      {/*filter aside menu section*/}
      <FiltersMenu />

      {/*objects data section*/}
      <div className="max-w-[1600px] mx-auto w-full mt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 mb-[40px] 2xl:px-0 px-4">
        {isLoading ? (
          <div className="text-white text-center font-maladroit text-[18px]">
            Loading...
          </div>
        ) : error ? (
          <div className="text-white text-center font-maladroit text-[18px]">
            Error loading products
          </div>
        ) : data?.rows.length > 0 ? (
          data?.rows.map((item) => (
            <ProductItem
              key={item.id}
              title={item.name}
              price={parseFloat(item.price)}
              image={item.images?.at(0)}
              isBlack={true}
            />
          ))
        ) : (
          <div className="flex justify-center col-start-2 text-black w-full font-maladroit text-[18px]">
            No products found
          </div>
        )}
      </div>

      {/*pagination section*/}
      <div className="flex justify-center items-center gap-[30px] mb-[200px]">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className={clsx(
            "font-maladroit border-2 py-2 px-4 sm:py-3 sm:px-[35px] mb-2 sm:mb-0 transition-colors ",
            "disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:bg-transparent",
            "border-black text-black hover:bg-gray-300"
          )}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={data && page * limit >= data.count}
          className={clsx(
            "font-maladroit border-2 py-2 px-4 sm:py-3 sm:px-[35px] mb-2 sm:mb-0 transition-colors ",
            "disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:bg-transparent",
            "border-black text-black hover:bg-gray-300"
          )}
        >
          Next
        </button>
      </div>
    </Layout>
  );
};

export default CategoryPage;
