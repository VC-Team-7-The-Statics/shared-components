import React from "react";
import "../styles/_textarea.scss";

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
