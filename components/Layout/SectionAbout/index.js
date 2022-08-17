/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const SectionAbout = () => {
  return (
    <section className="section-about section-padding">
      <div className="container position-relative ">
        <div className="about-container">
          <h2 className="about-title">
            Earn cash by selling <br /> or Find anything you desire
          </h2>
          <p className="about-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humo
            or randomised words which don't look even slightlys
          </p>
          <div className="btn-wrapper flex">
            <button className="btn-main btn-post">Post your ad</button>
            <button className="btn-main btn-browser">Browse ads</button>
          </div>
          <div className="about-image1">
            <Image
              src="/images/aboutShape1.png"
              width={230}
              height={360}
              alt=""
            />
          </div>
          <div className="about-image2">
            <Image
              src="/images/aboutShape2.png"
              width={230}
              height={360}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
