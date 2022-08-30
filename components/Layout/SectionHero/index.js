import Image from "next/image";
import { useEffect, useRef, useState, memo } from "react";
import { GoLocation } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";
import FormList from "@/modules/FormList";
import { formData } from "@/utils/data";

const SectionHero = () => {
  const [isShow, setIsShow] = useState(false);
  const imageRef = useRef();
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleMove = (e) => {
      imageElement.style.transform = `perspective(300px) rotateX(${
        e.layerX / 90
      }deg) rotateY(${e.layerY / 95}deg)`;
    };
    const handleMoveOut = () => {
      imageElement.style.transform =
        "perspective(350px) rotateX(0deg) rotateY(0deg)";
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
        <div className="heroLeft col-6">
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
              <FormList formData={formData} isShow={isShow} />
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
          <div ref={imageRef} className="heroRight-image position-relative">
            <Image
              src="/images/hero-man3.png"
              objectFit="cover"
              width={542}
              height={523}
              objectPosition="center"
              alt="heroRight-image"
              loading="eager"
              unoptimized={true}
              priority={true}
            />
          </div>
          <div className="heroRight-sub-image position-relative">
            <Image
              className="heartbeat"
              objectFit="cover"
              objectPosition="center"
              src="/images/heroShape6.png"
              alt="heartbeat"
              width={126}
              height={126}
              loading="eager"
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SectionHero);
