import React from "react";

const SingleMenu = (props) => {
  const { subMenu } = props;
  return (
    <>
      {subMenu?.map((menu) => (
        <div key={menu?.id} className="single-menu">
          <h5 className="single-title">{menu?.subTitle}</h5>
          <ul className="single-menu-list">
            {menu?.items.map((item) => {
              return (
                <li key={item?.id} className="single-menu-item">
                  <a className="list">{item?.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SingleMenu;
