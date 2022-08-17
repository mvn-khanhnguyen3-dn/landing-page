import React from "react";
import Image from "next/image";

const CategoryItem = (props) => {
  const { image, title, pera } = props;
  return (
    <li className="category-item">
      <Image
        className="category-item-image"
        src={image}
        width={240}
        height={190}
        objectFit="cover"
        alt=""
      />
      <div className="category-item-content">
        <h6 className="category-item-name">{title}</h6>
        <p className="category-item-pera">{pera}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
