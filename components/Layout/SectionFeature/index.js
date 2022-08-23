import React from "react";
import FeatureItem from "../../modules/FeatureItem";

const SectionFeature = ({ featureData }) => {
  return (
    <section className="section-feature">
      <div className="container">
        <h2 className="title feature-title">
          <span className="shape"></span>Featured Listings
        </h2>
        <ul className="items-list section-feature-list">
          {featureData?.map((feature) => (
            <FeatureItem key={feature.id} {...feature} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionFeature;
