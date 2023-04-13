import React from "react";
import "./Button.css";
const Button = ({ text, onClick }) => {
  const className = () => {
    if (text === "ADD") {
      return "Addbtn";
    } else if (text === "EDIT") {
      return "Editbtn";
    } else if (text === "Delete") {
      return "Deletebtn";
    } else if (text === "Cancel") {
      return "btnWhite";
    } else {
      return "btnBlue";
    }
  };
  return (
    <button className={className()} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
