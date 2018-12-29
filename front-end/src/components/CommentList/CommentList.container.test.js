import React from "react";
import { shallow } from "enzyme";

import { CommentListContainer, mapStateToProps } from "./CommentList.container";
import { actionGetComments } from "./CommentList.actions";

const getComment = (id, deleted = false, parentId = "fake") => ({
  id,
  deleted,
  parentId,
  author: "fake",
  body: "fake",
  parentDeleted: false,
  timestamp: 1234,
  voteScore: 1
});

const fakeStore = {
  comments: [
    getComment("1"),
    getComment("2", true),
    getComment("3"),
    getComment("4", false, "8872748")
  ]
};

describe("<CommentListContainer />", () => {
  it("calls GET_COMMENTS action when component did mount", () => {
    const postId = "123";
    const fakeDispatch = jest.fn();
    const expectedAction = actionGetComments(postId);

    shallow(
      <CommentListContainer
        postId={postId}
        dispatch={fakeDispatch}
        comments={[]}
      />
    )
      .instance()
      .componentDidMount();

    expect(fakeDispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("filters comments from store with matching parent post id and is not deleted", () => {
    const props = mapStateToProps(fakeStore, { postId: "fake" });

    expect(props.comments).toHaveLength(2);
  });
});
