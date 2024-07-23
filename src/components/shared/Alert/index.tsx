import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: "success" | "error";
}

const Alert: React.FC<AlertProps> = ({ isOpen, onClose, message, type }) => {
  const isSuccess = type === "success";
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#33333336] flex transition-transform z-50 ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div
        className={`transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-[200%]"
        } ${
          isSuccess ? "bg-green-600" : "bg-red-600"
        } transition-all absolute right-4 bottom-4 w-full sm:w-[350px] max-w-[400px] h-[75px] rounded-md  flex items-center justify-center z-20`}
      >
        <p className="text-[19px] font-medium">{message}</p>
        <button className="absolute top-2 right-2" onClick={onClose}>
          <IoCloseCircleOutline size={22} />
        </button>
      </div>
    </div>
  );
};

export default Alert;
