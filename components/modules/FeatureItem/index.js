import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiDelete } from "react-icons/fi";
import { fetchData } from "../../../helper/fetchData";
import Modal from "../Modal";
import { apiUrl } from "../../../config";

const btnFormGroup = [
  {
    id: 1,
    name: "NEW",
    className: "pro-btn1 pro-btn",
  },
  {
    id: 2,
    name: "PROMTED",
    className: "pro-btn2 pro-btn",
  },
];
const FeatureItem = (props) => {
  const { image, title, desc, time, price, btnGroup, id } = props;
  const [isShow, setIsShow] = useState(false);

  let router = useRouter();
  const handleDelete = (id) => {
    fetchData.deleteData(`${apiUrl}/products/${id}`);
    // location.reload();
  };

  return (
    <>
      <Modal
        handleDelete={() => handleDelete(id)}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <li className="feature-item">
        <FiDelete
          onClick={() => setIsShow(true)}
          className="feature-delete-icon is-hidden"
        />
        <div className="feature-item-image position-relative">
          <Image
            src={image || "/images/default-image.png"}
            layout="fill"
            alt={title}
            objectFit="cover"
            unoptimized={true}
          />
        </div>
        <div className="feature-item-content">
          <h4
            onClick={() =>
              router.asPath === "/dashboard" && router.push(`/dashboard/${id}`)
            }
            className="feature-item-title"
          >
            {title || "Title"}
          </h4>
          <p className="feature-item-cap">
            {desc || "Los Angels, CA · "}
            <strong className="subCap">{time || "12 hrs ago"}</strong>
          </p>
          <span className="feature-item-price">{price}</span>
          <div className="btn-wrapper">
            {btnGroup
              ? btnGroup.map((btn) => (
                  <span key={btn.id} className={btn.className}>
                    {btn.name}
                  </span>
                ))
              : btnFormGroup.map((btn) => (
                  <span key={btn.id} className={btn.className}>
                    {btn.name}
                  </span>
                ))}
          </div>
        </div>
      </li>
    </>
  );
};

export default FeatureItem;
