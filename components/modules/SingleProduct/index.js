import React from "react";
import Image from "next/image";

const SingleProduct = (props) => {
  const { items } = props;
  return (
    <>
      {items?.map((item) => (
        <ul key={item?.id} className="single-product-list single-product">
          <li className="single-menu-item">
            <a className="list">
              <Image
                src={item?.image}
                width={100}
                height={80}
                objectFit="cover"
                quality={100}
                alt={item?.subTitle}
              />
            </a>
            <h5 className="single-title single-product-title">
              {item?.subTitle}
            </h5>
            <p className="single-product-desc flex">
              <strong>{item?.newPrice}</strong>
              <span className="old-price">{item?.oldPrice}</span>
            </p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default SingleProduct;
