import { mapStateToProps } from "./PostList.container";
import { ORDER_BY, FILTER_TYPES } from "../Filters/Filters.enum";

const { VOTES, DATE } = FILTER_TYPES;
const { DESC, ASC } = ORDER_BY;

const getFakeState = () => ({
  posts: [
    {
      id: 1,
      category: "react",
      voteScore: 3,
      timestamp: 3
    },
    {
      id: 2,
      category: "redux",
      voteScore: 2,
      timestamp: 2
    },
    {
      id: 3,
      category: "react",
      voteScore: 1,
      timestamp: 1
    }
  ],
  filters: {
    [VOTES]: null,
    [DATE]: null
  }
});

describe("when calling mapStateToProps()", () => {
  describe("and category is undefined", () => {
    it("returns the post ids filtered by category", () => {
      const { postIds } = mapStateToProps(getFakeState(), {
        category: undefined
      });

      expect(postIds).toHaveLength(3);
    });
  });

  describe("and a correct category is given", () => {
    it("returns the post ids filtered by category", () => {
      const { postIds } = mapStateToProps(getFakeState(), {
        category: "react"
      });

      expect(postIds).toHaveLength(2);
    });
  });

  describe("and a incorrect category is given", () => {
    it("returns the post ids filtered by category", () => {
      const { postIds } = mapStateToProps(getFakeState(), {
        category: "notexist"
      });

      expect(postIds).toHaveLength(0);
    });
  });

  describe("and votes filter is set", () => {
    it("returns posts ordered by votes from lower to higher value", () => {
      const state = getFakeState();
      state.filters[VOTES] = ASC;

      const { postIds } = mapStateToProps(state, {});

      expect(postIds[0]).toBe(3);
    });

    it("returns posts ordered by votes from higher to lower value", () => {
      const state = getFakeState();
      state.filters[VOTES] = DESC;

      const { postIds } = mapStateToProps(state, {});

      expect(postIds[0]).toBe(1);
    });
  });

  describe("and date filter is set", () => {
    it("returns posts ordered by date from lower to higher value", () => {
      const state = getFakeState();
      state.filters[DATE] = ASC;

      const { postIds } = mapStateToProps(state, {});

      expect(postIds[0]).toBe(3);
    });

    it("returns posts ordered by date from higher to lower value", () => {
      const state = getFakeState();
      state.filters[DATE] = DESC;

      const { postIds } = mapStateToProps(state, {});

      expect(postIds[0]).toBe(1);
    });
  });
});
