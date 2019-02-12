import React from "react";

const TextInput = ({ field, form }) => {
  const {
    value: { label, placeholder, required, type }
  } = field;
  console.log(field);
  return (
    <div>
      <label className={label.hidden ? "d-none" : ""}>{label.value}</label>
      <input type={type} placeholder={placeholder.value} required={required} />
    </div>
  );
};

export default TextInput;
