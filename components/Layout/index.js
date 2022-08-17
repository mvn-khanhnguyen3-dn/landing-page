import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { TbArrowTopBar } from "react-icons/tb";
import { useEffect, useRef } from "react";

const Layout = ({ children }) => {
  const progressRef = useRef();
  useEffect(() => {
    const calcScrollValue = () => {
      let scrollProgress = progressRef.current;
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.opacity = "1";
      } else {
        scrollProgress.style.opacity = "0";
      }
      scrollProgress.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      scrollProgress.style.background = `conic-gradient(#f76631 ${scrollValue}%, #d0d0d4 ${scrollValue}%)`;
    };
    window.addEventListener("scroll", calcScrollValue);
  }, []);
  return (
    <>
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
      <div className="cursor cursorOuter"></div>
      <div className="cursor2 cursorInter"></div>
      <div ref={progressRef} className="progress back-to-top">
        <TbArrowTopBar className="progress-icon" />
      </div>
    </>
  );
};

export default Layout;
