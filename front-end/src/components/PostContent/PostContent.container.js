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

const mapStateToProps = ({ posts }, { postId }) => {
  let post = posts.find(post => post.id === postId);

  if (!post) {
    // todo fetcch single post
    post = {};
  }

  return {
    post
  };
};

export default connect(mapStateToProps)(PostContentContainer);
