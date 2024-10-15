import Breadcrumb from "@/components/common/breadcrumb";
import NumberControl from "@/components/common/form/number-control";
import {
  PlusCircleIcon,
  SizeGuideArrow,
  TShirtIcon,
} from "@/components/common/svg-icons";
import Layout from "@/components/layout/layout";
import { useEffect, useState } from "react";
import ProductImageGallery from "./ui/product-image-gallery";
import ClothingCollection from "../homepage/ui/clothing-collection/clothing-collection";
import { useParams } from "react-router-dom";
import { API } from "@/utils/api";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import ProductSizeSelection from "@/pages/product/ui/product-size-selection";
import ProductColorSelection from "@/pages/product/ui/product-color-selection";
import useCartStore from "@/store/cartStore";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "The real landwolf" },
];

export interface Image {
  id: number;
  imagePath: string;
}

export interface Size {
  id: number;
  value: string;
}

export interface Color {
  id: number;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  sizes: Size[];
  images: Image[];
  colors: Color[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const { quantity, setQuantity, selectedSize, selectedColor, addToCart } =
    useCartStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { data: product, error }: { data: Product; error: Error | undefined } =
    useSWR(`${API.api}/api/device/${title}`, fetcher);

  // Fetch apparel items
  const { data: apparelData, error: apparelError } = useSWR(
    `${API.api}/api/device?typeName=apparel`,
    fetcher
  );

  console.log("apparelData=", apparelData);
  const addToCartHandler = () => {
    if (!selectedColor) {
      setErrorMessage("Please select a color before adding to cart.");
      return;
    }
    if (!selectedSize) {
      setErrorMessage("Please select a size before adding to cart.");
      return;
    }

    addToCart({
      img: product.images?.at(0)?.imagePath || "",
      title: product.name,
      price: product.price,
      selectedSize,
      selectedColor,
      quantity,
    });
    setErrorMessage(null);
  };

  if (error) {
    return (
      <div className={"warning_error_success_text"}>Error fetching product</div>
    );
  }

  if (!product) {
    return <div className={"warning_error_success_text"}>Loading...</div>;
  }

  return (
    <Layout>
      <div className="pt-[91px] max-w-[1600px] mx-auto w-full mb-[130px] px-4 2xl:px-0">
        <Breadcrumb items={breadcrumbItems} />
        <div className="w-full gap-10 2xl:gap-[69px] flex xl:flex-row flex-col">
          <ProductImageGallery images={product.images} />

          <div className="xl:max-w-[585px] w-full md:py-6 flex flex-col gap-4 md:gap-8">
            <div className="w-full flex items-center justify-between">
              <h3 className="font-saotorpes text-[24px] sm:text-[28px] md:text-[32px] text-black uppercase">
                {product.name}
              </h3>
              <div className="size-[50px] rounded-full border-2 border-black grid place-content-center">
                <TShirtIcon />
              </div>
            </div>

            <span className="font-maladroit text-[18px] sm:text-[22px] md:text-[24px] font-bold text-black">
              {product.price} USDT
            </span>

            <ProductColorSelection colors={product.colors} />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-maladroit text-[16px] sm:text-[18px] md:text-[20px] font-bold text-black">
                  Size
                </span>
                <div className="flex items-center gap-[9px]">
                  <span className="font-maladroit text-[14px] sm:text-[16px] md:text-[16px] font-bold text-black">
                    Size Guide
                  </span>
                  <SizeGuideArrow />
                </div>
              </div>

              <ProductSizeSelection
                // handleChange={handleSizeChange}
                sizes={product.sizes}
              />
            </div>

            <div className="w-full flex items-center justify-between">
              <span className="font-maladroit text-[16px] sm:text-[18px] md:text-[20px] font-bold text-black">
                quantity
              </span>
              <NumberControl
                value={quantity}
                onChange={setQuantity}
                min={0}
                max={10}
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 font-maladroit text-[14px] sm:text-[16px] font-bold">
                {errorMessage}
              </p>
            )}

            <button
              className="py-3 px-5 w-full bg-black"
              onClick={addToCartHandler}
            >
              <span className="font-maladroit text-[16px] sm:text-[18px] font-bold text-white">
                add to cart
              </span>
            </button>

            <hr className="border border-black border-dashed" />

            <div className="flex flex-col gap-4">
              <p className="font-maladroit text-[14px] sm:text-[16px] font-bold text-black">
                Description ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a metus elementum quam fermentum lacinia. Nam porta nisi
                libero, eget mollis libero interdum vel.
              </p>
              <ul className="list-disc list-inside">
                <li className="font-maladroit text-[14px] sm:text-[16px] font-bold text-black">
                  100% cotton
                </li>
                <li className="font-maladroit text-[14px] sm:text-[16px] font-bold text-black">
                  cool solana glasses
                </li>
              </ul>
            </div>

            <div className="px-2 py-3 flex items-center justify-between border-y-2 border-black">
              <span className="font-maladroit text-[16px] sm:text-[18px] md:text-[20px] font-bold text-black">
                Shipping & returns
              </span>
              <PlusCircleIcon />
            </div>
          </div>
        </div>
      </div>

      <ClothingCollection
        title="You Might Also Like"
        items={apparelData?.rows}
        backgroundImage="/product-black-bg.webp"
        buttonLabel="All clothes"
        buttonAction={() => navigate("/products/apparel")}
      />

      <div className="bg-[#D7B8E7]">
        <div className="flex items-center 2xl:flex-row flex-col gap-10 pb-40 lg:pb-0">
          <img
            src="/product/wolf_fashion.webp"
            alt="Wolf Fashion"
            className="xl:max-w-[1042px] w-full h-[905px] object-cover "
          />
          <div className="flex items-center justify-center flex-col w-1/2 ">
            <img src="/product/luxury.png" alt="" />
            <span className="text-[#5F0DAE] text-[32px] 2xl:text-[40px] xxl:text-[79px] font-saotorpes xxl:leading-[63.2px]">
              Accessories
            </span>
            <button className="py-3 px-5 bg-black max-w-[250px] w-full mt-5">
              <span className="font-maladroit text-[18px] font-bold text-white">
                Shop now
              </span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
