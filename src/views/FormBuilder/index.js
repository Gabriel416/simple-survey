import React, { Component } from "react";
import formSchema from "../../formSchema.json";
import tachyons from "tachyons";

import FormPreview from "../../components/FormPreview";

class FormBuilder extends Component {
  onSubmit(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-9">
          <h1 className="tc f1">Form Builder</h1>
          <FormPreview
            initalValues={formSchema}
            onSubmit={this.onSubmit.bind(this)}
          />
        </div>
        <div className="col-sm-3 form-editor-wrapper">
          <p>lorem </p>
        </div>
      </div>
    );
  }
}

export default FormBuilder;
