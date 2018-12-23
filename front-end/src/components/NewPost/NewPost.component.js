import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v1";
import { Link, Redirect } from "react-router-dom";

class NewPost extends Component {
  static propTypes = {
    onSavePost: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    post: PropTypes.object
  };

  state = {
    post: {
      id: "",
      title: "",
      author: "",
      body: "",
      category: "",
      timestamp: "",
      commentCount: 0,
      voteScore: 0,
      deleted: false
    },

    isReadyToSubmit: false,
    isPosting: false,
    isSaved: false,
    isEditing: false
  };

  componentDidMount() {
    if (this.props.post) {
      this.enableEditingMode();
    }
  }

  enableEditingMode() {
    const { post } = this.props;

    this.setState({
      post: {
        id: post.id || "",
        title: post.title || "",
        author: post.author || "",
        body: post.body || "",
        category: post.category || "",
        timestamp: post.timestamp || "",
        commentCount: post.commentCount || 0,
        voteScore: post.voteScore || 0,
        deleted: post.deleted || false
      },
      isEditing: true
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
        this.props.onSavePost(this.state.post);
        this.setState({ isPosting: false, isSaved: true });
      }
    );
  };

  render() {
    const { categories } = this.props;
    const { post, isReadyToSubmit, isPosting, isSaved } = this.state;

    return isSaved ? (
      <Redirect to="/" />
    ) : (
      <form onSubmit={this.onSubmitForm}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              onChange={e => this.bindStateToInput(e, "title")}
              className="input"
              type="text"
              placeholder="Post title"
              value={post.title}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input
              onChange={e => this.bindStateToInput(e, "author")}
              className="input"
              type="text"
              placeholder="Your name"
              value={post.author}
            />
          </div>
        </div>
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
        <div className="field">
          <label className="label">Article</label>
          <div className="control">
            <textarea
              onChange={e => this.bindStateToInput(e, "body")}
              className="textarea"
              placeholder="Write your post here..."
              value={post.body}
            />
          </div>
        </div>
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
        </div>
      </form>
    );
  }
}

export default NewPost;
