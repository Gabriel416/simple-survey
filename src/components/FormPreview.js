import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const FormPreview = ({ initalValues, onSubmit }) => {
  const renderFormFields = (values, arrayHelpers) => {
    console.log(values, "values");
    console.log(arrayHelpers, "array helpers");
    return values.fields.map((field, index) => {
      return (
        <div key={index}>
          <Field name={`fields[${index}]`} component={field.type} />
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
