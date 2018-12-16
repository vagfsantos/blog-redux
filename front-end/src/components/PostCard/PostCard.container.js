import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostCard from "./PostCard.component";

class PostCardContainer extends Component {
  render() {
    const { post } = this.props;
    return <PostCard post={post} />;
  }
}

PostCardContainer.propTypes = {
  id: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.find(({ id }) => id === ownProps.id)
  };
};

export default connect(mapStateToProps)(PostCardContainer);
