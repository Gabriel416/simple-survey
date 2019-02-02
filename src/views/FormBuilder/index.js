import React, { Component } from "react";
import { Formik } from "formik";
import formSchema from "../../formSchema.json";

import FormPreview from "../../components/FormPreview";

class FormBuilder extends Component {
  onSubmit(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-9">
          <FormPreview
            initalValues={formSchema}
            onSubmit={this.onSubmit.bind(this)}
          />
        </div>
        <div className="col-sm-3">
          <p>lorem </p>
        </div>
      </div>
    );
  }
}

export default FormBuilder;
