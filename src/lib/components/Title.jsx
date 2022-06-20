import React from "react";
import "../styles/_title.scss";
import "../styles/_common.scss";

const Title = (props) => {
  const { value, ...others } = props;

  return (
    <div className="title-container">
      <h1 className="title" {...others}>
        {value}
      </h1>
    </div>
  );
};

export default Title;
