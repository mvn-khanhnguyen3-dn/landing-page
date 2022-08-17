import Image from "next/image";
import React from "react";

const FeatureItem = (props) => {
  const { image, title, desc, time, price, btnGroup } = props;
  return (
    <li className="feature-item">
      <Image
        className="feature-item-image"
        src={image}
        width={306}
        height={250}
        alt=""
      />
      <div className="feature-item-content">
        <h4 className="feature-item-title">{title}</h4>
        <p className="feature-item-cap">
          {desc} <strong className="subCap">{time}</strong>
        </p>
        <span className="feature-item-price">{price}</span>
        <div className="btn-wrapper">
          {btnGroup.map((btn) => (
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
