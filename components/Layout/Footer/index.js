import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { footerData } from "../../../utils/data";
import FooterColItem from "../../modules/FooterColItem";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="footer-container flex justify-content-between">
          <div className="footer-col-1 col-padding">
            <div className="footer-logo">
              <Image src="/images/2.png" width={225} height={50} alt="logo" />
            </div>
            <ul className="col-1-list listsing">
              <li className="col-1-item">
                <Link href="/">
                  <a className="col-1-address col-icon-text flex">
                    <FiMapPin className="col-1-icon" /> 631 Elgin St. Celina,
                    Delaware
                  </a>
                </Link>
              </li>
              <li className="col-1-item">
                <Link href="/">
                  <a className="col-1-phone col-icon-text flex">
                    <BsTelephone className="col-1-icon" />
                    (702) 555-0122
                  </a>
                </Link>
              </li>
              <li className="col-1-item">
                <Link href="/">
                  <a className="col-1-gmail col-icon-text flex">
                    <CgMail className="col-1-icon" />
                    Xgenious@mail.com
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {footerData.map((data) => (
            <FooterColItem key={data.id} {...data} />
          ))}
          <div className="footer-col-3 col-padding">
            <h4 className="footer-title">Newsletter</h4>
            <p className="col-3-desc">
              Be the first one to know news, offers and events weekly in your.
              Unsubscribe whenever you like with one click.
            </p>
            <form className="col-3-form position-relative">
              <input
                className="col-3-input"
                type="text"
                name="email"
                placeholder="Your Email Address"
              />
              <button className="col-3-btn" type="submit" name="submit">
                Submit
              </button>
            </form>
            <ul className="footer-socials flex align-items-center">
              <li className="socials-item">
                <BsFacebook />
              </li>
              <li className="socials-item">
                <AiFillYoutube />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copy-right">
          <p className="copy-right-text">
            © 2022 , Xgenious All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
