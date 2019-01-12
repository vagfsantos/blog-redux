import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostContent from "./PostContent.component";

class PostContentContainer extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired
  };

  render() {
    const { post } = this.props;
    return <PostContent post={post} />;
  }
}

export const mapStateToProps = ({ posts }, { postId }) => {
  return {
    post: posts.find(post => post.id === postId)
  };
};

export default connect(mapStateToProps)(PostContentContainer);
