import React, { Component } from "react";

import Form from "../Form/Form.component";
import InputText from "../InputText/InputText.component";

class CommentForm extends Component {
  state = {
    comment: {
      id: "",
      author: "",
      body: "",
      timestamp: "",
      parentId: ""
    }
  };

  onSubmit = () => {};
  onDelete = () => {};

  render() {
    return (
      <Form onSubmit={this.onSubmit} requiredFields={["author", "body"]}>
        {(formData, setFormDataState) => (
          <div>
            <InputText
              label="Author"
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
