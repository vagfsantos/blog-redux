import React from "react";
import { shallow } from "enzyme";

import CommentForm from "./CommentForm.component";

let fakeSaveComment;
let fakeUpdateComment;
let fakeDeleteComment;

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

beforeEach(() => {
  fakeSaveComment = jest.fn(({ id, timestamp }) =>
    id && timestamp ? true : false
  );
  fakeUpdateComment = jest.fn();
  fakeDeleteComment = jest.fn();
});

describe("<CommentForm />", () => {
  describe("When saving a new comment", () => {
    it("calls onSaveNewComment with new comment id and timestamp", () => {
      const component = shallow(
        <CommentForm
          onSaveNewComment={fakeSaveComment}
          onUpdateComment={fakeUpdateComment}
          onDeleteComment={fakeDeleteComment}
        />
      );

      component.instance().handleSubmit();

      expect(fakeSaveComment).toHaveReturnedWith(true);
    });
  });

  describe("When deleting a comment", () => {
    it("calls onDeleteComment with comment id", () => {
      const component = shallow(
        <CommentForm
          comment={fakeComment}
          onSaveNewComment={fakeSaveComment}
          onUpdateComment={fakeUpdateComment}
          onDeleteComment={fakeDeleteComment}
        />
      );

      component.instance().handleDelete();

      expect(fakeDeleteComment).toHaveBeenCalledWith(fakeComment.id);
    });
  });

  describe("When updating a comment", () => {
    it("calls onUpdateComment with comment id", () => {
      const component = shallow(
        <CommentForm
          comment={fakeComment}
          onSaveNewComment={fakeSaveComment}
          onUpdateComment={fakeUpdateComment}
          onDeleteComment={fakeDeleteComment}
        />
      );

      component.instance().handleSubmit();

      expect(fakeUpdateComment).toHaveBeenCalledWith(fakeComment);
    });
  });
});
