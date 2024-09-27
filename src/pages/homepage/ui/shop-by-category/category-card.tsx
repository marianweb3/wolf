import { Link } from "react-router-dom";

interface CategoryCardProps {
  image: string;
  text: string;
  bgColor: string;
  link: string;
}

const CategoryCard = ({ image, text, bgColor, link }: CategoryCardProps) => {
  return (
    <div
      className={`w-full h-[400px] md:h-[715px] border-2 border-[#000000] relative`}
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={image}
        alt={text}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <Link to={link}>
        <div className="py-4 md:py-[21.5px] px-6 bg-white border-2 border-l-0 border-b-0 border-black absolute bottom-0 left-0 flex items-center gap-6">
          {/* Apply responsive text sizes */}
          <span className="font-saotorpes text-[28px] leading-[30.28px] md:text-[40px] md:leading-[30.28px] text-black">
            {text}
          </span>
          <img
            src="/icons/categoryArrow.svg"
            alt="Arrow"
            className="md:max-w-full max-w-[25px]"
          />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
