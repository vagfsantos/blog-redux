import React from "react";
import { shallow } from "enzyme";

import PostList from "./PostList.component";

const POST_IDS = ["abc", "def"];

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
  });
});
