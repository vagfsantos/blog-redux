import React from "react";
import { shallow } from "enzyme";

import Vote from "./Vote.component";

describe("<Vote />", () => {
  it("calls thumbsUp callback when it is cliked", () => {
    const onThumbsUp = jest.fn();
    const component = shallow(
      <Vote onThumbsUp={onThumbsUp} onThumbsDown={() => {}} />
    );

    component.find("[data-test='thumbs-up']").simulate("click");

    expect(onThumbsUp).toHaveBeenCalled();
  });

  it("calls thumbsDown callback when it is cliked", () => {
    const onThumbsDown = jest.fn();
    const component = shallow(
      <Vote onThumbsUp={() => {}} onThumbsDown={onThumbsDown} />
    );

    component.find("[data-test='thumbs-down']").simulate("click");

    expect(onThumbsDown).toHaveBeenCalled();
  });
});
