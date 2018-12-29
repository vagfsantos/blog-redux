import React from "react";
import { CommentFormContainer } from "./CommentForm.container";
import { shallow } from "enzyme";

import { mapStateToPros, mapDispatchToProps } from "./CommentForm.container";
import {
  actionAddComment,
  actionUpdateComment,
  actionDeleteComment
} from "./CommentForm.actions";
import { actionGetComments } from "../CommentList/CommentList.actions";

const fakeStore = {
  comments: [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]
};

const fakeDispatch = jest.fn();
const fakeComment = {
  author: "fake",
  body: "fake",
  deleted: false,
  id: "fake",
  parentDeleted: false,
  parentId: "fake",
  timestamp: 1234,
  voteScore: 1
};

describe("<CommentFormContainer />", () => {
  it("returns found comment id on store", () => {
    const props = mapStateToPros(fakeStore, { id: 2 });

    expect(props).toMatchObject({ comment: { id: 2 } });
  });

  it("dispatches ADD_COMMENT action with a comment as payload", () => {
    const parentId = { parentId: 123 };
    const payloadExpected = actionAddComment({
      ...fakeComment,
      ...parentId,
      voteScore: 1
    });

    mapDispatchToProps(fakeDispatch, parentId).onSaveNewComment(fakeComment);

    expect(fakeDispatch).toHaveBeenCalledWith(payloadExpected);
  });

  it("dispatches UPDATE_COMMENT action with a comment as payload", () => {
    const payloadExpected = actionUpdateComment(fakeComment);

    mapDispatchToProps(fakeDispatch, {}).onUpdateComment(fakeComment);

    expect(fakeDispatch).toHaveBeenCalledWith(payloadExpected);
  });

  it("dispatches DELETE_COMMENT action with comment id and parent id as payload", () => {
    const parentId = { parentId: 123 };
    const payloadExpected = actionDeleteComment({ id: 1, ...parentId });

    mapDispatchToProps(fakeDispatch, parentId).onDeleteComment(1);

    expect(fakeDispatch).toHaveBeenCalledWith(payloadExpected);
  });

  it("dispatches GET_COMMENT action with parent id as payload", () => {
    const parentId = 343;
    const payloadExpected = actionGetComments(parentId);

    mapDispatchToProps(fakeDispatch, parentId).getComments(parentId);

    expect(fakeDispatch).toHaveBeenCalledWith(payloadExpected);
  });

  it("calls get comments with parentId", () => {
    const fakeGetComment = jest.fn();

    shallow(
      <CommentFormContainer
        id={"cba"}
        parentId={"abc"}
        getComments={fakeGetComment}
        onSaveNewComment={() => {}}
        onUpdateComment={() => {}}
        onDeleteComment={() => {}}
      />
    )
      .instance()
      .componentDidMount();

    expect(fakeGetComment).toHaveBeenCalledWith("abc");
  });
});
