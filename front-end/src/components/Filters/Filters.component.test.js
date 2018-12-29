import React from "react";
import { shallow } from "enzyme";

import Filters from "./Filters.component";
import { ORDER_BY, FILTER_TYPES } from "./Filters.enum";

const { DESC, ASC } = ORDER_BY;
const { DATE, VOTES } = FILTER_TYPES;

let filterPostsBy;

beforeEach(() => {
  filterPostsBy = jest.fn();
});

const mockedEvent = { preventDefault: () => {} };

describe("<Filters />", () => {
  describe("DATE FILTER", () => {
    it("sets DESC order by default", () => {
      const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

      const filter = component.state()[DATE];

      expect(filter).toBe(DESC);
    });

    it("sets icon className to UP by default", () => {
      const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

      const icon = component.find(".fa-sort-amount-up");
      expect(icon.exists()).toBeTruthy();
    });

    describe("when click filter button", () => {
      it("toggles from DESC to ASC order", () => {
        const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

        component
          .find("[data-test='toggle-date']")
          .simulate("click", mockedEvent);

        const filter = component.state()[DATE];
        expect(filter).toBe(ASC);
      });

      it("sets icon className properly to DOWN", () => {
        const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

        component
          .find("[data-test='toggle-date']")
          .simulate("click", mockedEvent);

        const icon = component.find(".fa-sort-amount-down");
        expect(icon.exists()).toBeTruthy();
      });
    });
  });

  describe("VOTES FILTER", () => {
    it("sets DESC order by default", () => {
      const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

      const filter = component.state()[VOTES];

      expect(filter).toBe(DESC);
    });

    it("sets icon className to UP by default", () => {
      const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

      const icon = component.find(".fa-sort-numeric-up");
      expect(icon.exists()).toBeTruthy();
    });

    describe("when click filter button", () => {
      it("toggles from DESC to ASC order", () => {
        const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

        component
          .find("[data-test='toggle-votes']")
          .simulate("click", mockedEvent);

        const filter = component.state()[VOTES];
        expect(filter).toBe(ASC);
      });

      it("sets icon className properly to DOWN", () => {
        const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

        component
          .find("[data-test='toggle-votes']")
          .simulate("click", mockedEvent);

        const icon = component.find(".fa-sort-numeric-down");
        expect(icon.exists()).toBeTruthy();
      });
    });
  });

  describe("when filter changes", () => {
    it("calls filterPostsBy with filter name and filter order as params", () => {
      const component = shallow(<Filters filterPostsBy={filterPostsBy} />);

      component
        .find("[data-test='toggle-votes']")
        .simulate("click", mockedEvent);

      expect(filterPostsBy).toHaveBeenCalledWith(VOTES, ASC);
    });
  });
});
