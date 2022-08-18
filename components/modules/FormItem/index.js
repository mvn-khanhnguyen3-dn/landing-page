import React from "react";

const FormItem = (props) => {
  const { item, className } = props;
  return <li className={className}>{item}</li>;
};

export default FormItem;
