import React from "react";
import { shallow } from "enzyme";

import Menu from "./Menu.component";

const CATEGORIES = [
  { name: "menu1", path: "menu1" },
  { name: "menu2", path: "menu2" }
];

describe("<Menu />", () => {
  it("renders a list of categories", () => {
    const menu = shallow(<Menu categories={CATEGORIES} />);

    expect(menu.find("li")).toHaveLength(2);
  });

  describe("when given an empty array list", () => {
    it("renders no list items", () => {
      const menu = shallow(<Menu categories={[]} />);

      expect(menu.find("li")).toHaveLength(0);
    });
  });
});
