import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v1";
import { Link, Redirect } from "react-router-dom";

import InputText from "../InputText/InputText.component";

const post = {
  id: "",
  title: "",
  author: "",
  body: "",
  category: "",
  timestamp: "",
  commentCount: 0,
  voteScore: 0,
  deleted: false
};

class NewPost extends PureComponent {
  static propTypes = {
    onSavePost: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDeletePost: PropTypes.func,
    post: PropTypes.object
  };

  state = {
    post,

    isReadyToSubmit: false,
    isPosting: false,
    isSaved: false,
    isEditing: false,
    isDeleting: false,
    shouldUpdate: true
  };

  componentDidMount() {
    this.prepareState();
  }

  componentDidUpdate() {
    this.prepareState();
  }

  prepareState() {
    if (this.props.post && this.state.shouldUpdate) {
      this.enableEditingMode();
    }

    if (!this.props.post && !this.state.shouldUpdate) {
      this.resetState();
    }
  }

  resetState() {
    this.setState({ post, shouldUpdate: true, isEditing: false });
  }

  enableEditingMode() {
    const { post } = this.props;

    this.setState({
      post,
      isEditing: true,
      shouldUpdate: false
    });
  }

  bindStateToInput(event, field) {
    event.persist();
    this.setState(prevState => {
      return {
        post: {
          ...prevState.post,
          [field]: event.target.value
        }
      };
    }, this.checkFormReadyToSubmit);
  }

  checkFormReadyToSubmit() {
    const requiredFields = ["title", "author", "body", "category"];

    const incompleteFields = requiredFields.filter(
      field => this.state.post[field].trim() === ""
    );

    const isReadyToSubmit = incompleteFields.length === 0;

    this.setState({ isReadyToSubmit });
  }

  onSubmitForm = event => {
    event.preventDefault();

    this.setState(
      prevState => {
        if (prevState.isEditing) return;

        return {
          post: {
            ...prevState.post,
            id: uuid(),
            timestamp: new Date().getTime()
          },
          isPosting: true
        };
      },
      () => {
        this.props.onSavePost(this.state.post, this.state.isEditing);
        this.setState({ isPosting: false, isSaved: true });
      }
    );
  };

  onDeletePost = event => {
    event.preventDefault();
    this.setState(
      prevState => {
        return {
          isDeleting: true,
          post: {
            ...prevState.post,
            deleted: true
          }
        };
      },
      () => {
        this.props.onDeletePost(this.state.post.id);
        this.setState({ isDeleting: false, isSaved: true });
      }
    );
  };

  render() {
    const { categories } = this.props;
    const { post, isReadyToSubmit, isPosting, isSaved, isEditing } = this.state;

    return isSaved ? (
      <Redirect to="/" />
    ) : (
      <form onSubmit={this.onSubmitForm}>
        <InputText
          label="Title"
          type="text"
          placeholder="Post title"
          value={post.title}
          onChange={e => this.bindStateToInput(e, "title")}
        />
        <InputText
          label="Author"
          type="text"
          placeholder="Your name"
          value={post.author}
          onChange={e => this.bindStateToInput(e, "author")}
        />
        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select
                onChange={e => this.bindStateToInput(e, "category")}
                value={post.category}
              >
                <option value="">Pick your category</option>
                {categories.map(catName => (
                  <option key={catName} value={catName}>
                    {catName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <InputText
          label="Content"
          type="textarea"
          onChange={e => this.bindStateToInput(e, "body")}
          className="textarea"
          placeholder="Write your post here..."
          value={post.body}
        />
        <div className="field is-grouped">
          <div className="control">
            <button
              type="submit"
              className="button is-link"
              disabled={!isReadyToSubmit || isPosting}
            >
              {isPosting ? "Loading..." : "Submit"}
            </button>
          </div>
          <div className="control">
            <Link to="/" className="button is-text">
              Cancel
            </Link>
          </div>
          <div className="control">
            {isEditing && (
              <button
                onClick={this.onDeletePost}
                type="button"
                className="button is-danger"
              >
                {isPosting ? "Loading..." : "Delete"}
              </button>
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default NewPost;
