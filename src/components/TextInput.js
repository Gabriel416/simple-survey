import React from "react";

const TextInput = ({ field, form }) => {
  const {
    value: { label, placeholder, required, type }
  } = field;
  const { setFieldValue } = form;

  return (
    <div>
      <label className={label.hidden ? "d-none" : ""}>{label.value}</label>
      <input
        type={type}
        placeholder={placeholder.value}
        required={required}
        onChange={e =>
          setFieldValue(field.name, {
            ...field.value,
            inputValue: e.target.value
          })
        }
      />
    </div>
  );
};

export default TextInput;
