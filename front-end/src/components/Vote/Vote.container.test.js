import { mapDispatchToProps } from "./Vote.container";
import { VOTE_TYPE, VOTE } from "./Vote.enum";
import { actionVotePost, actionVoteComment } from "./Vote.actions";

let fakeDispatch;

beforeEach(() => {
  fakeDispatch = jest.fn();
});

describe("<VoteContainer />", () => {
  it("dispatches vote for post type with upVote", () => {
    const params = {
      id: "1",
      type: VOTE_TYPE.POST
    };

    const response = mapDispatchToProps(fakeDispatch, params);
    response.onThumbsUp();

    expect(fakeDispatch).toHaveBeenCalledWith(
      actionVotePost(params.id, VOTE.UP)
    );
  });

  it("dispatches vote for post type with downVote", () => {
    const params = {
      id: "1",
      type: VOTE_TYPE.POST
    };

    const response = mapDispatchToProps(fakeDispatch, params);
    response.onThumbsDown();

    expect(fakeDispatch).toHaveBeenCalledWith(
      actionVotePost(params.id, VOTE.DOWN)
    );
  });

  it("dispatches vote for comment type with upVote", () => {
    const params = {
      id: "1",
      type: VOTE_TYPE.COMMENT
    };

    const response = mapDispatchToProps(fakeDispatch, params);
    response.onThumbsUp();

    expect(fakeDispatch).toHaveBeenCalledWith(
      actionVoteComment(params.id, VOTE.UP)
    );
  });

  it("dispatches vote for comment type with downVote", () => {
    const params = {
      id: "1",
      type: VOTE_TYPE.COMMENT
    };

    const response = mapDispatchToProps(fakeDispatch, params);
    response.onThumbsDown();

    expect(fakeDispatch).toHaveBeenCalledWith(
      actionVoteComment(params.id, VOTE.DOWN)
    );
  });
});
