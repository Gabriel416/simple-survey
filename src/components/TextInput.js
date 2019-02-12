import React from "react";

import Label from "./shared/Label";

const TextInput = ({ field, form }) => {
  const {
    value: { label, placeholder, required, type }
  } = field;
  const { setFieldValue } = form;

  return (
    <div>
      <Label label={label} />
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
