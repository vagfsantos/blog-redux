import React from "react";
import { shallow } from "enzyme";

import CommentList from "./CommentList.component";

const getComment = id => ({
  id,
  author: "fake",
  body: "fake",
  deleted: false,
  parentDeleted: false,
  parentId: "fake",
  timestamp: 1234,
  voteScore: 1
});

const fakeCommentList = [getComment("1"), getComment("2"), getComment("3")];

describe("<CommentList />", () => {
  it("renders all comments given", () => {
    const component = shallow(<CommentList comments={fakeCommentList} />);

    const items = component.find("[data-test='list-item']");

    expect(items).toHaveLength(fakeCommentList.length);
  });

  it("renders a message when no comments is given", () => {
    const component = shallow(<CommentList comments={[]} />);

    const message = component.find("[data-test='no-comments-found']");

    expect(message.exists()).toBeTruthy();
  });
});
