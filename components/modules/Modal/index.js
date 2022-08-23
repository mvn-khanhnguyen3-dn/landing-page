import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ handleDelete, setIsShow, isShow }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsShow(false);
    }, 5000);
    return () => {
      clearTimeout(timeOut);
    };
  });
  return (
    isShow && (
      <div className="modal-delete">
        <AiOutlineCloseCircle
          className="delete-icon"
          onClick={() => setIsShow(false)}
        />
        <h3 className="modal-title px-10">
          Do you sure you wanna delete this ?
        </h3>
        <div className="btn-group px-30 flex">
          <button onClick={() => setIsShow(false)} className="btn btn-cancel">
            Cancel
          </button>
          <button onClick={handleDelete} className="btn btn-delete">
            Delete
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
