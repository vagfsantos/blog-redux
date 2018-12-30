import React from "react";
import { shallow } from "enzyme";

import InputText from "./InputText.component";

const label = "fake";
const placeholder = "fake";
const value = "text";

describe("<InputText />", () => {
  it("renders a input tag", () => {
    const type = "text";

    const component = shallow(
      <InputText
        label={label}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={() => {}}
      />
    );

    const input = component.find("input");

    expect(input.exists()).toBeTruthy();
  });

  it("renders a textarea tag", () => {
    const type = "textarea";

    const component = shallow(
      <InputText
        label={label}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={() => {}}
      />
    );

    const input = component.find("textarea");

    expect(input.exists()).toBeTruthy();
  });

  it("calls onChange callback", () => {
    const type = "textarea";
    const fakeOnChange = jest.fn();

    const component = shallow(
      <InputText
        label={label}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={fakeOnChange}
      />
    );

    component.find("textarea").simulate("change");

    expect(fakeOnChange).toHaveBeenCalled();
  });
});
