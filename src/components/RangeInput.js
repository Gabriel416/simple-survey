import React from "react";

import Label from "./shared/Label";

const RangeInput = ({ field, form }) => {
  const {
    value: { label, placeholder, type, min, max, inputValue }
  } = field;
  const { setFieldValue } = form;

  return (
    <div>
      <Label label={label} />
      <input
        type={type}
        placeholder={placeholder.value}
        min={min}
        max={max}
        onChange={e =>
          setFieldValue(field.name, {
            ...field.value,
            inputValue: e.target.value
          })
        }
        value={inputValue}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default RangeInput;
