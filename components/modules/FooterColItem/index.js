import React from "react";
import Link from "next/link";

const FooterColItem = (props) => {
  const { title, items } = props;
  return (
    <div className="footer-col-middle col-padding">
      <h4 className="footer-title">{title}</h4>
      <ul className="listsing col-middle-list">
        {items?.map((item) => (
          <li key={item?.id} className="listsing-item col-middle-item">
            <Link href={"/"}>
              <a className="single-item">{item?.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColItem;
