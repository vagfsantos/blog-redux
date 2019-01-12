import React from "react";
import { shallow } from "enzyme";

import PostContent from "./PostContent.component";

describe("<PostContent />", () => {
  it("renders post not found", () => {
    const component = shallow(<PostContent post={null} />);

    expect(
      component.find("[data-test='post-not-found']").exists()
    ).toBeTruthy();
  });

  it("renders a post article", () => {
    const fakePost = {};
    const component = shallow(<PostContent post={fakePost} />);

    expect(component.find("[data-test='post']").exists()).toBeTruthy();
  });
});
