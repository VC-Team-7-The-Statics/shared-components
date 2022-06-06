import React from "react";
import "../styles/_button.scss";

const Button = (props) => {
  const { ...others } = props;

  return (
    <div className="button-container">
      <button className="button" {...others} />
    </div>
  );
};

export default Button;
