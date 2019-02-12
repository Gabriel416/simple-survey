import React from "react";

const RangeInput = ({ field, form }) => {
  const {
    value: { label, placeholder, type, min, max, value }
  } = field;
  const { setFieldValue } = form;

  return (
    <div>
      <label className={label.hidden ? "d-none" : ""}>{label.value}</label>
      <input
        type={type}
        placeholder={placeholder.value}
        min={min}
        max={max}
        onChange={e =>
          setFieldValue(field.name, {
            ...field.value,
            value: e.target.value
          })
        }
        value={value}
      />
      <p>{value}</p>
    </div>
  );
};

export default RangeInput;
