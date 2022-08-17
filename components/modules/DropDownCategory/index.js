import React from "react";
import SingleMenu from "../SingleMenu";
import SingleProduct from "../SingleProduct";

const DropDownCategory = (props) => {
  const { icon, title, icon2, product } = props;
  return (
    <li className="flex drop-down_item drop-down-category gap-sm cls-hover drop-item">
      {icon}
      <a className="drop-down-title" href="">
        {title}
      </a>
      <span className="drop-desc-icon">{icon2}</span>
      {icon2 && (
        <div className="menuWrapper">
          {product ? <SingleProduct {...props} /> : <SingleMenu {...props} />}
        </div>
      )}
    </li>
  );
};

export default DropDownCategory;
