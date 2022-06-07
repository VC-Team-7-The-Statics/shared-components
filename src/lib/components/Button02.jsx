import React from "react";
import "../styles/_button.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Button02 = (props) => {
  const { ...others } = props;

  return (
    <div className="button02-container">
      <button className="button" {...others} />
    </div>
  );
};

export default Button02;
