import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v1";

import Form from "../Form/Form.component";
import InputText from "../InputText/InputText.component";

class CommentForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  handleSubmit = formData => {
    this.props.onSubmit({
      ...formData,
      id: uuid(),
      timestamp: new Date().getTime()
    });
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        onDelete={this.handleDelete}
        requiredFields={["author", "body"]}
      >
        {(formData, setFormDataState) => (
          <div>
            <InputText
              label="Name"
              value={formData.author}
              placeholder="Your name"
              onChange={e => setFormDataState(e, "author")}
            />
            <InputText
              type="textarea"
              label="Comment"
              value={formData.body}
              placeholder="Comment it"
              onChange={e => setFormDataState(e, "body")}
            />
          </div>
        )}
      </Form>
    );
  }
}

export default CommentForm;
