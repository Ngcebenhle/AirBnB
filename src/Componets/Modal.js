import React from "react";
import "./Modal.css";

import { useSelector, useDispatch } from "react-redux";
import { openModal } from "./../Action/ModalAction";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;

  let modalInlineStyle;

  if (openClose === "OPEN_MODAL") {
    modalInlineStyle = {
      display: "block",
    };
  } else {
    modalInlineStyle = {
      display: "none",
    };
  }

  const closeModalHandler = () => {
    dispatch(openModal("close", ""));
  };
  return (
    <div className="site-modal" style={modalInlineStyle}>
      <div className="modal-content">
        <div className="col right">
          <span onClick={closeModalHandler} className="close">
            &times;
          </span>
        </div>

        <div className="">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
