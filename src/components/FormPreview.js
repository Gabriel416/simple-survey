import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CheckedInput from "./CheckedInput";
import RangeInput from "./RangeInput";

const FormPreview = ({ initalValues, onSubmit }) => {
  const selectedFormField = (field, index) => {
    switch (field.type) {
      case "text":
        return TextInput;
      case "email":
        return TextInput;
      case "password":
        return TextInput;
      case "select":
        return SelectInput;
      case "radio":
        return CheckedInput;
      case "checkbox":
        return CheckedInput;
      case "range":
        return RangeInput;
      default:
        return TextInput;
    }
  };

  const renderFormFields = (values, arrayHelpers) => {
    return values.fields.map((field, index) => {
      return (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Field
            name={`fields[${index}]`}
            component={selectedFormField(field, index)}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <h1>{!initalValues.title.hidden && initalValues.title.value}</h1>
      <Formik
        initialValues={initalValues}
        onSubmit={onSubmit}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="fields"
              render={arrayHelpers => renderFormFields(values, arrayHelpers)}
            />
          </Form>
        )}
      />
    </div>
  );
};

export default FormPreview;
