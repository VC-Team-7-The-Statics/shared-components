import React from "react";
import "../styles/_subtitle.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Subtitle = (props) => {
  const { value, ...others } = props;

  return (
    <div className="subtitle-container">
      <h2 className="subtitle" {...others}>
        {value}
      </h2>
    </div>
  );
};

export default Subtitle;
