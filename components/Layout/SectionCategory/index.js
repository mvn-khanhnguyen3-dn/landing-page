import React from "react";
import { categoryData } from "../../../utils/data";
import CategoryItem from "../../modules/CategoryItem";

const SectionCategory = () => {
  return (
    <section className="section-category section-padding">
      <div className="container">
        <h2 className="title title-center">
          <span className="shape"></span>Post and Promote Your Listings
        </h2>
        <ul className="section-category-list items-list">
          {categoryData?.map((category) => (
            <CategoryItem key={category.id} {...category} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionCategory;
