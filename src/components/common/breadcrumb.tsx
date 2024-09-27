import React from "react";
import clsx from "clsx";

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-3">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <a
              href={item.link}
              className={clsx(
                "font-maladroit font-bold text-[14px] leading-[17.61px]",
                index === items.length - 1
                  ? "text-[#000000]"
                  : "text-[#00000075]"
              )}
            >
              {item.label}
            </a>
          ) : (
            <span
              className={clsx(
                "font-maladroit font-bold text-[14px] leading-[17.61px]",
                index === items.length - 1
                  ? "text-[#000000]"
                  : "text-[#00000075]"
              )}
            >
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <div className="w-[6px] h-[6px] rounded-full bg-black"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
