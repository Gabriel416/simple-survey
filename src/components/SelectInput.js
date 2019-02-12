import React from "react";

import Label from "./shared/Label";

const SelectInput = ({ field, form }) => {
  const {
    value: { label, placeholder, required, choices }
  } = field;
  const { setFieldValue } = form;

  return (
    <div>
      <Label label={label} />
      <select
        required={required}
        onChange={e =>
          setFieldValue(field.name, {
            ...field.value,
            inputValue: e.target.value
          })
        }
      >
        {choices.map(choice => (
          <option key={choice.value} value={choice.value}>
            {choice.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
