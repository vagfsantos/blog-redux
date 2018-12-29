import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v1";

import Form from "../Form/Form.component";
import InputText from "../InputText/InputText.component";

class CommentForm extends Component {
  static propTypes = {
    onSaveNewComment: PropTypes.func.isRequired,
    onUpdateComment: PropTypes.func.isRequired,
    onDeleteComment: PropTypes.func.isRequired,
    comment: PropTypes.shape({
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      deleted: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      parentDeleted: PropTypes.bool.isRequired,
      parentId: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      voteScore: PropTypes.number.isRequired
    })
  };

  handleSubmit = formData => {
    const { comment, onUpdateComment, onSaveNewComment } = this.props;

    comment
      ? onUpdateComment({
          timestamp: new Date().getTime(),
          ...comment,
          ...formData
        })
      : onSaveNewComment({
          ...formData,
          id: uuid(),
          timestamp: new Date().getTime()
        });
  };

  handleDelete = () => {
    const { comment, onDeleteComment } = this.props;

    onDeleteComment(comment.id);
  };

  render() {
    const isEditing = !!this.props.comment;

    return (
      <Form
        onSubmit={this.handleSubmit}
        onDelete={this.handleDelete}
        isEditing={isEditing}
        defaultData={this.props.comment}
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
