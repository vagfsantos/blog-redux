import React from "react";
import { shallow } from "enzyme";

import Score from "./Score.component";

describe("<Score />", () => {
  it("renders the comment count", () => {
    const fakeCommentCount = 5;
    const component = shallow(
      <Score voteScore={0} commentCount={fakeCommentCount} />
    );

    const commentCount = component.find("[data-test='comment-count']").text();

    expect(Number(commentCount)).toEqual(fakeCommentCount);
  });

  it("renders the vote score", () => {
    const fakeVoteScore = 5;
    const component = shallow(
      <Score voteScore={fakeVoteScore} commentCount={0} />
    );

    const voteScore = component.find("[data-test='vote-score']").text();

    expect(Number(voteScore)).toEqual(fakeVoteScore);
  });

  describe("when vote score get a number higher than zero", () => {
    it("renders fa-grin-hearts class", () => {
      const className = "fa-grin-hearts";

      const fakeVoteScore = 5;
      const component = shallow(
        <Score voteScore={fakeVoteScore} commentCount={0} />
      );

      const voteScoreClass = component
        .find("[data-test='vote-score-class']")
        .props().className;

      expect(voteScoreClass).toContain(className);
    });
  });

  describe("when vote score get a number lower or equals zero", () => {
    it("renders fa-sad-tear class", () => {
      const className = "fa-sad-tear";

      const fakeVoteScore = -5;
      const component = shallow(
        <Score voteScore={fakeVoteScore} commentCount={0} />
      );

      const voteScoreClass = component
        .find("[data-test='vote-score-class']")
        .props().className;

      expect(voteScoreClass).toContain(className);
    });
  });
});
