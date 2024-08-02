import React from "react";

const Modal = ({ onClose, modalText }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-45 z-50">
      <div className="bg-white p-4 rounded-lg custom-shadow">
        <p className="header-h3 text-black font-bold text-wrap max-w-[300px] p-3">
          {modalText}
        </p>
        <div className="custom-button mt-3 self-center mb-4 " onClick={onClose}>
          <p>Got it</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
