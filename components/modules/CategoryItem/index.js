import React from "react";
import Image from "next/image";

const CategoryItem = (props) => {
  const { image, title, pera } = props;
  return (
    <li className="category-item">
      <div className="category-item-image">
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="category-item-content">
        <h6 className="category-item-name">{title}</h6>
        <p className="category-item-pera">{pera}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
