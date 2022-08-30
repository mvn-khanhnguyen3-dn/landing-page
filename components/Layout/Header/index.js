import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropDownCategory from "@/modules/DropDownCategory";
import DropDownChat from "@/modules/DropDownChat";
import DropDownUser from "@/modules/DropDownUser";
import {
  data,
  mesengeData,
  userData,
  pageData,
  languageData,
} from "../../../utils/data";
import { VscThreeBars } from "react-icons/vsc";
import { BsChevronDown, BsHeart, BsCaretDown } from "react-icons/bs";
import { SiRocketdotchat } from "react-icons/si";
import { RiUserLine } from "react-icons/ri";
import { FaEllipsisV } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import DropDownPage from "@/modules/DropDownPage";
import FormList from "@/modules/FormList";

const Header = () => {
  const [isshowCategory, setIsShowCategory] = useState(false);
  const [isshowChat, setIsShowChat] = useState(false);
  const [isshowUser, setIsShowUser] = useState(false);
  const [isshowMenu, setIsShowMenu] = useState(false);
  const [isshowSocials, setIsShowSocials] = useState(false);
  const [isshowLanguage, setIsShowLanguage] = useState(false);
  const [width, setWidth] = useState(0);

  const handleShowMenu = () => {
    setIsShowMenu(!isshowMenu);
    const btnShow = document.querySelector(".btn-bar");
    !isshowMenu
      ? btnShow.classList.add("active")
      : btnShow.classList.remove("active");
  };

  useEffect(() => {
    const getWidth = () => {
      setWidth(window.screen.availWidth);
    };
    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [width]);
  return (
    <header className="page-header">
      <div className="container flex align-items-center justify-content-between">
        <div className="header-logo logo position-relative">
          <Link href="/">
            <a>
              <Image src="/images/2.png" alt="logo" layout="fill" />
            </a>
          </Link>
        </div>
        <div className="header-category-list">
          <div
            className="btn-allCategory flex bg-hover"
            onClick={() => setIsShowCategory(!isshowCategory)}
            style={{
              background: isshowCategory ? "#f76631" : "#fff",
              color: isshowCategory ? "#fff" : "#344054",
            }}
          >
            <VscThreeBars className="icon-category" />
            <h5
              style={{
                color: isshowCategory ? "#fff" : "#344054",
              }}
              className="category-item flex"
            >
              All Categories
            </h5>
            <BsChevronDown className="icon-category" />
          </div>
          <ul
            style={{
              transform: isshowCategory ? `scaleY(1)` : "scaleY(0)",
            }}
            className="drop-down-list"
          >
            {data?.map((item) => (
              <DropDownCategory key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className="btn-toggle-wrapper is-hidden">
          <FaEllipsisV
            onClick={() => setIsShowSocials(!isshowSocials)}
            className="icon-show"
          />
          <a onClick={handleShowMenu} className="btn-show-menu">
            <span className="btn-bar"></span>
          </a>
        </div>
        <nav
          style={{
            maxHeight: isshowMenu ? "100vh" : "0",
            opacity: isshowMenu && "1",
            paddingTop: width < 580 && isshowMenu ? "3.2rem" : "0",
          }}
          className="header-nav-list flex "
        >
          <Link href="/">
            <a className="header-nav-item cls-hover">All Ads</a>
          </Link>
          <Link href="/">
            <a className="header-nav-item cls-hover">About Us</a>
          </Link>
          <Link href="/pages">
            <a className="header-nav-page header-nav-item cls-hover hidden-cursor flex">
              Pages <BsChevronDown className="nav-icon" />
              <ul className="drop-down-list w-fit-sm is-hidden border-none pages-mobile">
                {pageData?.map((item) => (
                  <DropDownPage key={item.id} {...item} />
                ))}
              </ul>
            </a>
          </Link>
          <Link href="/">
            <a className="header-nav-item cls-hover">Contact</a>
          </Link>
        </nav>
        <ul
          style={{
            maxHeight: isshowSocials ? "100vh" : "0",
            opacity: isshowSocials && "1",
          }}
          className="header-socials-list flex "
        >
          <li
            onClick={() => setIsShowChat(!isshowChat)}
            className="header-socials-item"
            style={{
              background: isshowChat ? "#f54709" : "inherit",
            }}
          >
            <button className="btn btn-socials btn-chat bg-hover flex">
              <SiRocketdotchat className="btn-chat-icon" />
              <span className="chat-name">Chat</span>
            </button>

            <div
              style={{
                maxHeight: isshowChat ? `100vh` : "0",
              }}
              className="drop-down-wrapper"
            >
              <h4 className="drop-down-title">All Mesenges</h4>
              <ul className="drop-down-list w-fit drop-scroll border-none">
                {mesengeData?.map((item) => (
                  <DropDownChat key={item.id} {...item} />
                ))}
              </ul>
              <h4 className="drop-down-title chat-all">See All Mesenges</h4>
            </div>
          </li>
          <li className="header-socials-item">
            <button className="btn btn-socials bg-hover btn-heart btn-radius">
              <BsHeart />
            </button>
          </li>
          <li
            onClick={() => setIsShowUser(!isshowUser)}
            className="header-socials-item"
            style={{
              background: isshowUser ? "#f54709" : "inherit",
              borderRadius: "50%",
            }}
          >
            <button className="btn btn-socials btn-user bg-hover btn-radius">
              <RiUserLine />
            </button>
            <div
              style={{
                maxHeight: isshowUser ? `100vh` : "0",
              }}
              className="drop-down-wrapper"
            >
              <h4 className="drop-down-title">User Account</h4>
              <ul className="drop-down-list w-fit drop-static">
                {userData?.map((item) => (
                  <DropDownUser key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </li>
          <li className="header-socials-item">
            <button className="btn btn-socials btn-plus">
              <AiOutlinePlusSquare className="btn-icon-plus" />
            </button>
          </li>
          <li className="header-socials-item change-language position-relative">
            <span
              className="change-language-item flex"
              onClick={() => setIsShowLanguage(!isshowLanguage)}
            >
              English
              <BsCaretDown className="btn-change-language" />
            </span>
            <FormList
              className="show-language"
              isShow={isshowLanguage}
              formData={languageData}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
