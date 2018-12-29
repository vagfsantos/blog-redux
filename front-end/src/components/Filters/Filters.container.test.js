import { mapDispatchToProps } from "./Filters.container";
import { actionFilterByVote, actionFilterByDate } from "./Filters.actions";
import { ORDER_BY, FILTER_TYPES } from "./Filters.enum";

const { DESC, ASC } = ORDER_BY;
const { DATE, VOTES } = FILTER_TYPES;

let fakeDispatch;

beforeEach(() => (fakeDispatch = jest.fn()));

describe("<FiltersContainer />", () => {
  it("dispatches filter by votes action", () => {
    const expectedAction = actionFilterByVote(ASC);

    mapDispatchToProps(fakeDispatch).filterPostsBy(VOTES, ASC);

    expect(fakeDispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("dispatches filter by date action", () => {
    const expectedAction = actionFilterByDate(DESC);

    mapDispatchToProps(fakeDispatch).filterPostsBy(DATE, DESC);

    expect(fakeDispatch).toHaveBeenCalledWith(expectedAction);
  });
});
