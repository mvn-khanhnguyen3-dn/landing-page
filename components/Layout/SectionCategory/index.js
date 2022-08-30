import { useEffect } from "react";
import { categoryData } from "@/utils/data";
import CategoryItem from "@/modules/CategoryItem";
import { useHookScroll } from "@/hooks/useScroll";

const SectionCategory = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".lazy-scroll");
      const revealsAbout = document.querySelectorAll(".about-lazy-scroll");
      const revealsAboutDesc = document.querySelector(".lazy-scroll-desc");

      useHookScroll.useSimpleScroll(revealsAboutDesc);
      useHookScroll.useScroll(reveals);
      useHookScroll.useScroll(revealsAbout);
    };

    window.addEventListener("scroll", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
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
