import React, { Component } from "react";
import InputText from "../InputText/InputText.component";

class CommentForm extends Component {
  render() {
    return (
      <form>
        <InputText
          label="Author"
          value={this.state.value}
          placeholder="Your name"
          onChange={this.onChangeInput}
        />
        <InputText
          type="textarea"
          label="Comment"
          value={this.state.value}
          placeholder="Comment it"
          onChange={this.onChangeInput}
        />
      </form>
    );
  }
}

export default CommentForm;
