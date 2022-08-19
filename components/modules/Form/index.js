import React from "react";
import { useForm } from "react-hook-form";
import FeatureItem from "../FeatureItem";

const Form = (props) => {
  const { register, handleSubmit, watch, reset } = useForm();
  const { onImageChange, onSubmitProps, image, data } = props;
  return (
    <>
      <form
        className="form-admin flex gap-md"
        onSubmit={handleSubmit(onSubmitProps)}
      >
        <input onChange={onImageChange} type="file" className="form-label" />
        <div className="form-control">
          <lable className="form-label">Title</lable>
          <input
            className="input-title form-input"
            type="text"
            placeholder="Please writing title..."
            {...register("title", { required: true })}
          />
        </div>
        <div className="form-control">
          <lable className="form-label">Description</lable>
          <textarea
            className="input-desc form-input"
            placeholder="Please writing description..."
            rows="4"
            cols="50"
            {...register("description", { required: true })}
          />
        </div>
        <div className="form-control">
          <lable className="form-label">Price</lable>
          <input
            className="input-price form-input"
            type="text"
            placeholder="Please writing price..."
            {...register("price", { required: true })}
          />
        </div>
        <div className="form-btn-group flex gap-md">
          <input value="Submit" type="submit" className="btn btn-submit" />
          <button onClick={() => reset()} className="btn btn-cancel">
            Cancel
          </button>
        </div>
      </form>
      <div className="product-cart">
        <FeatureItem
          image={image}
          title={watch("title") || data?.title}
          desc={watch("description")}
          price={watch("price")}
        />
      </div>
    </>
  );
};

export default Form;
