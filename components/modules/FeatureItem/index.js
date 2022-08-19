import Image from "next/image";
import React from "react";

const btnFormGroup = [
  {
    id: 1,
    name: "NEW",
    className: "pro-btn1 pro-btn",
  },
  {
    id: 2,
    name: "PROMTED",
    className: "pro-btn2 pro-btn",
  },
];
const FeatureItem = (props) => {
  const { image, title, desc, time, price, btnGroup } = props;
  return (
    <li className="feature-item">
      <div className="feature-item-image position-relative">
        <Image
          src={image || "/images/catitems1.jpeg"}
          layout="fill"
          alt={title}
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="feature-item-content">
        <h4 className="feature-item-title">{title || "Title"}</h4>
        <p className="feature-item-cap">
          {desc || "Los Angels, CA · "}
          <strong className="subCap">{time || "12 hrs ago"}</strong>
        </p>
        <span className="feature-item-price">{`$ ${price}` || "Price"}</span>
        <div className="btn-wrapper">
          {btnGroup
            ? btnGroup.map((btn) => (
                <span key={btn.id} className={btn.className}>
                  {btn.name}
                </span>
              ))
            : btnFormGroup.map((btn) => (
                <span key={btn.id} className={btn.className}>
                  {btn.name}
                </span>
              ))}
        </div>
      </div>
    </li>
  );
};

export default FeatureItem;
