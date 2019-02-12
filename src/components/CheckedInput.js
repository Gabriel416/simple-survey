import React from "react";

const CheckedInput = ({ field, form }) => {
  const {
    value: { label, required, type, choices }
  } = field;

  const renderInputFields = choices => {
    return choices.map(choice => {
      const choiceValue = choice.label.value;
      return (
        <div key={choiceValue}>
          <input
            type={type}
            id={choiceValue}
            name={label.value}
            value={choiceValue}
            required={required}
          />
          <label htmlFor={choiceValue}>{choiceValue}</label>
        </div>
      );
    });
  };

  return (
    <div>
      <label className={label.hidden ? "d-none" : ""}>{label.value}</label>
      {renderInputFields(choices)}
    </div>
  );
};

export default CheckedInput;
