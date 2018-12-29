import React, { PureComponent } from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

class Form extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    requiredFields: PropTypes.arrayOf(PropTypes.string),
    isEditing: PropTypes.bool.isRequired,
    defaultData: PropTypes.object
  };

  state = {
    formData: {},
    isReadyToSubmit: false,
    isPosting: false,
    isSaved: false,
    isDeleting: false,
    shouldUpdate: true
  };

  componentDidUpdate() {
    if (this.state.shouldUpdate) {
      this.setState({
        formData: this.props.defaultData || {},
        shouldUpdate: false
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isPosting: true });
    this.props.onSubmit(this.state.formData);
    this.setState({ isPosting: false, isSaved: true });
  };

  handleDelete = () => {
    this.setState({ isDeleting: true });
    this.props.onDelete();
    this.setState({ isDeleting: false, isSaved: true });
  };

  handleInput = (event, field) => {
    event.persist();

    this.setState(prevState => {
      return {
        formData: {
          ...prevState.formData,
          [field]: event.target.value
        }
      };
    }, this.checkFormReadyToSubmit);
  };

  checkFormReadyToSubmit() {
    const requiredFields = this.props.requiredFields;

    const incompleteFields = requiredFields.filter(field => {
      const fieldValue = this.state.formData[field] || "";
      return fieldValue.trim() === "";
    });

    const isReadyToSubmit = incompleteFields.length === 0;

    this.setState({ isReadyToSubmit });
  }

  render() {
    const { children, isEditing } = this.props;
    const { isReadyToSubmit, isPosting, isSaved } = this.state;

    return isSaved ? (
      <Redirect to="/" />
    ) : (
      <form onSubmit={this.handleSubmit}>
        {children(this.state.formData, this.handleInput)}
        <br />

        <footer className="field is-grouped">
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
                onClick={this.handleDelete}
                type="button"
                className="button is-danger"
              >
                {isPosting ? "Loading..." : "Delete"}
              </button>
            )}
          </div>
        </footer>
      </form>
    );
  }
}

export default Form;
