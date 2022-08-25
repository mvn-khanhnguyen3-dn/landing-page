import React, { useEffect } from "react";
import Image from "next/image";
import { useHookScroll } from "../../../hook/useScroll";

const CategoryItem = (props) => {
  const { image, title, pera } = props;
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".lazy-scroll");
      const revealsAbout = document.querySelectorAll(".about-lazy-scroll");
      const revealsAboutDesc = document.querySelector(".lazy-scroll-desc");

      useHookScroll.useSimpleScroll(revealsAboutDesc);

      useHookScroll.useScroll(reveals);
      useHookScroll.useScroll(revealsAbout);
    };

    window.addEventListener("scroll", reveal);
  });
  return (
    <li className="category-item lazy-scroll">
      <div className="category-item-image">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          quality={100}
        />
      </div>
      <div className="category-item-content">
        <h6 className="category-item-name">{title}</h6>
        <p className="category-item-pera">{pera}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
