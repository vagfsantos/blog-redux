import React from "react";
import { shallow } from "enzyme";

import BaseLayout from "./BaseLayout.component";

describe("<BaseLayout />", () => {
  it("renders a child element", () => {
    const component = shallow(
      <BaseLayout>
        <p data-test="child" />
      </BaseLayout>
    );

    const child = component.find("[data-test='child']");

    expect(child.exists()).toBeTruthy();
  });
});
