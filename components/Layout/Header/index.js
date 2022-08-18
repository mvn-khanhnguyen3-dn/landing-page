import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DropDownCategory from "../../modules/DropDownCategory";
import DropDownChat from "../../modules/DropDownChat";
import DropDownUser from "../../modules/DropDownUser";
import { data, mesengeData, userData, pageData } from "../../../utils/data";
import { VscThreeBars } from "react-icons/vsc";
import { BsChevronDown, BsHeart } from "react-icons/bs";
import { SiRocketdotchat } from "react-icons/si";
import { RiUserLine } from "react-icons/ri";
import { FaEllipsisV } from "react-icons/fa";
import { AiOutlinePlusSquare, AiFillCaretDown } from "react-icons/ai";
import DropDownPage from "../../modules/DropDownPage";

const Header = () => {
  const [isshowCategory, setIsShowCategory] = useState(false);
  const [isshowChat, setIsShowChat] = useState(false);
  const [isshowUser, setIsShowUser] = useState(false);
  const [isshowMenu, setIsShowMenu] = useState(false);
  const [isshowSocials, setIsShowSocials] = useState(false);

  return (
    <header className="page-header">
      <div className="container flex align-items-center justify-content-between">
        <div className="header-logo logo position-relative">
          <Image src="/images/2.png" alt="logo" layout="fill" />
        </div>
        <div className="header-category-list bg-hover ">
          <div
            className="btn-allCategory flex"
            onClick={() => setIsShowCategory(!isshowCategory)}
          >
            <VscThreeBars className="icon-category" />
            <h5 className="category-item flex">All Categories</h5>
            <BsChevronDown className="icon-category" />
          </div>
          <ul
            style={{
              transform: isshowCategory ? `scaleY(1)` : "scaleY(0)",
            }}
            className="drop-down-list"
          >
            {data.map((item) => (
              <DropDownCategory key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className="btn-toggle-wrapper is-hidden">
          <FaEllipsisV
            onClick={() => setIsShowSocials(!isshowSocials)}
            className="icon-show"
          />
          <a
            onClick={() => setIsShowMenu(!isshowMenu)}
            className="btn-show-menu"
          >
            <span className="btn-bar"></span>
          </a>
        </div>
        <nav
          style={{
            maxHeight: isshowMenu ? "100vh" : "0",
            opacity: isshowMenu && "1",
          }}
          className="header-nav-list flex"
        >
          <Link href="/">
            <a className="header-nav-item cls-hover">All Ads</a>
          </Link>
          <Link href="/">
            <a className="header-nav-item cls-hover">About Us</a>
          </Link>
          <Link href="/pages">
            <a className="header-nav-page header-nav-item cls-hover hidden-cursor flex">
              Pages <BsChevronDown />
              <ul className="drop-down-list w-fit-sm is-hidden border-none">
                {pageData.map((item) => (
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
          className="header-socials-list flex"
        >
          <li
            onClick={() => setIsShowChat(!isshowChat)}
            className="header-socials-item"
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
                {mesengeData.map((item) => (
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
                {userData.map((item) => (
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
          <li className="header-socials-item change-language flex">
            English <AiFillCaretDown className="btn-change-language" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
