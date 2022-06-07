import React from "react";
import "../styles/_button.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Button01 = (props) => {
  const { ...others } = props;

  return (
    <div className="button01-container">
      <button className="button" {...others} />
    </div>
  );
};

export default Button01;
