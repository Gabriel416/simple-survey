import React from "react";

const Label = ({ labelAttributes, label }) => {
  const { hidden, value, align, inline } = label;
  console.log(inline);
  return (
    <div
      style={{
        textAlign: align,
        display: inline ? "inline-block" : "block"
      }}
    >
      <label
        {...labelAttributes}
        style={{
          display: hidden ? "none" : "block",
          paddingLeft: inline ? "5px" : "none",
          fontSize: inline ? "14px" : "18px"
        }}
      >
        {value}
      </label>
    </div>
  );
};

export default Label;
