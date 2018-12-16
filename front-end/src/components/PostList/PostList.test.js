import React from "react";
import { shallow } from "enzyme";

import PostList from "./PostList.component";

const POST_IDS = ["abc", "def"];
const title = "an title";

describe("<PostList />", () => {
  it("renders a list of post", () => {
    const list = shallow(<PostList postIds={POST_IDS} />);

    expect(list.find("li")).toHaveLength(2);
  });

  describe("when given an empty array list", () => {
    it("renders no list items", () => {
      const list = shallow(<PostList postIds={[]} />);

      expect(list.find("li")).toHaveLength(0);
    });

    it("renders a feedback message", () => {
      const list = shallow(<PostList postIds={[]} />);

      expect(list.find("[data-test='no-post-message']")).toHaveLength(1);
    });
  });

  describe("when a category is given", () => {
    it("renders the category name as title", () => {
      const list = shallow(<PostList category={title} />);

      expect(list.find("[data-test='title']").text()).toEqual(title);
    });
  });

  describe("when a category is not given", () => {
    it("renders all posts title", () => {
      const list = shallow(<PostList category={null} />);

      expect(list.find("[data-test='title']").text()).toEqual("All posts");
    });
  });
});
