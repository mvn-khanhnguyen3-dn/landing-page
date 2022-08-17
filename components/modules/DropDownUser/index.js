import React from "react";

const DropDownUser = (props) => {
  const { icon, name } = props;
  return (
    <li className="flex drop-down_item fz-md bg-hover gap-sm">
      {icon}
      {name}
    </li>
  );
};

export default DropDownUser;
