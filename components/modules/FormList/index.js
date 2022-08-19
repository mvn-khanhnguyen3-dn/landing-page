import React from "react";
import FormItem from "../FormItem";

const FormList = (props) => {
  const { isShow, formData, className } = props;
  return (
    <div
      className={`${className} select-form-list`}
      style={{
        transform: isShow ? "scaleY(1)" : "scaleY(0)",
      }}
    >
      <input className="search-sub-form" type="text" placeholder="Search..." />
      <ul className="form-list">
        {formData?.map((item) => (
          <FormItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default FormList;
