import React from "react";
import uniqueIdentifier from "../utils/uniqueIdentifier";

import Label from "./shared/Label";

const CheckedInput = ({ field, form }) => {
  const {
    value: { label, required, type, choices }
  } = field;

  const { setFieldValue } = form;

  const changeFieldValue = inputValue => {
    setFieldValue(field.name, {
      ...field.value,
      inputValue
    });
  };

  const handleChange = (e, choice) => {
    if (type === "checkbox") {
      choice.checked = e.target.checked;
      const inputValue = choices
        .filter(choice => choice.checked)
        .map(choice => choice.label.value);

      changeFieldValue(inputValue);
    } else {
      choices.map(choice => (choice.checked = false));
      choice.checked = e.target.checked;

      changeFieldValue(e.target.value);
    }
  };

  const renderInputFields = choices => {
    return choices.map(choice => {
      const choiceValue = choice.label.value;
      const fieldId = uniqueIdentifier(100);
      return (
        <div key={choiceValue}>
          <input
            type={type}
            id={fieldId}
            name={label.value}
            value={choiceValue}
            required={required}
            onChange={e => handleChange(e, choice)}
            checked={choice.checked}
          />
          <Label
            labelAttributes={{
              htmlFor: fieldId
            }}
            label={choice.label}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <Label label={label} />
      {renderInputFields(choices)}
    </div>
  );
};

export default CheckedInput;
