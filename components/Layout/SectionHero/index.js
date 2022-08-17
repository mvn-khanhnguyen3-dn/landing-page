import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GoLocation } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";

const SectionHero = () => {
  const [isShow, setIsShow] = useState(false);
  const imageRef = useRef();
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleMove = (e) => {
      imageElement.style.transform = `perspective(300px) rotateX(${
        e.layerX / 100
      }deg) rotateY(${e.layerY / 100}deg)`;
    };
    const handleMoveOut = () => {
      imageElement.style.transform =
        "perspective(300px) rotateX(0deg) rotateY(0deg)";
    };
    imageElement.addEventListener("mousemove", handleMove);
    imageElement.addEventListener("mouseout", handleMoveOut);
    return () => {
      imageElement.removeEventListener("mousemove", handleMove);
      imageElement.removeEventListener("mouseout", handleMoveOut);
    };
  }, []);
  return (
    <section className="section-hero">
      <div className="container flex align-items-center justify-content-between pX-12">
        <div className="heroLeft">
          <h1 className="heroLeft-title">
            Buy and sell anything
            <span className="line">you want</span>
          </h1>
          <p className="heroLeft-desc">
            Countrys most loved and trusted classified ad listing website.
            Browse thou-sand of items near you Browse thousand.
          </p>
          <form className="heroLeft-form-search flex">
            <div className="select-form">
              <div
                onClick={() => setIsShow(!isShow)}
                className="select-form-value flex"
              >
                <GoLocation /> <span className="current">New Youk, USA</span>
                <BsChevronDown />
              </div>
              <div
                className="select-form-list"
                style={{
                  transform: isShow ? "scaleY(1)" : "scaleY(0)",
                }}
              >
                <input
                  className="search-sub-form"
                  type="text"
                  placeholder="Search..."
                />
                <ul className="form-list">
                  <li className="form-item focus">New Youk, USA</li>
                  <li className="form-item">Location PK</li>
                  <li className="form-item">Location US</li>
                </ul>
              </div>
            </div>
            <input
              className="searchBox-wrapper"
              type="text"
              placeholder="Search..."
            />
            <input className="searchBox-btn" type="submit" value="Search" />
          </form>
        </div>
        <div className="heroRight">
          <div ref={imageRef} className="heroRight-image">
            <Image
              width={540}
              height={520}
              src="/images/hero-man3.png"
              objectFit="cover"
              objectPosition="center"
              alt="heroRight-image"
            />
          </div>
          <div className="heroRight-sub-image">
            <Image
              className="heartbeat"
              src="/images/heroShape6.png"
              width={127}
              height={126}
              alt="heartbeat"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
