import React from "react";

const PriceItem = (props) => {
  const { priceTitle, priceList, price, forTime, btn } = props;
  return (
    <li className="price-item">
      <h4 className="price-item-title mutilate-hover">{priceTitle}</h4>
      <ul className="price-item-list">
        {priceList?.map((item) => (
          <li key={item.id} className="item-listing">
            <span className="icon-listing">{item.icon}</span>
            {item.desc}
          </li>
        ))}
      </ul>
      <span className="item-price mutilate-hover">
        {price}
        <span className="sub-title"> {forTime}</span>
      </span>
      <button className="btn-item-price">{btn}</button>
    </li>
  );
};

export default PriceItem;
