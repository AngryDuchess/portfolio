import React from "react";
// import "../index.css";
import { CloseCircle } from "iconsax-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-portfolioWhite  max-w-5xl h-3/4 w-full rounded-3xl overflow-hidden pt-4 md:px-12">
        <CloseCircle
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 icon-hover"
          size="32"
          color="#656560"
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
