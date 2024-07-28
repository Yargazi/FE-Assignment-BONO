import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-45 z-50">
      <div className="bg-white p-4 rounded-lg custom-shadow">
        <p className="header-h3 text-black font-bold ">
          You can add only 3 causes. <br /> Please remove one if you wish to{" "}
          <br /> a different one.
        </p>

        <div className="custom-button mt-3 self-center " onClick={onClose}>
          <p>Got it</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
