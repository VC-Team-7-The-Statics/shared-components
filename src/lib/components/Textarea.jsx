import React from "react";
import "../styles/_textarea.scss";
import "../styles/_reset.scss";
import "../styles/_common.scss";

const Textarea = (props) => {
  const { ...others } = props;

  return (
    <div className="textarea-container">
      <textarea
        type="textarea"
        cols="30"
        rows="10"
        className="textarea"
        {...others}
      />
    </div>
  );
};

export default Textarea;
