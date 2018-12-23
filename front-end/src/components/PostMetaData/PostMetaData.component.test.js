import React from "react";
import { shallow } from "enzyme";

import PostMetaData from "./PostMetaData.component";

const fakeId = "123";
const fakeTimeStamp = new Date().getTime();
const fakeAuthor = "Marco";

describe("<PostMetaData />", () => {
  it("renders timestamp as locale date string", () => {
    const component = shallow(
      <PostMetaData
        postId={fakeId}
        timestamp={fakeTimeStamp}
        author={fakeAuthor}
      />
    );

    const dateRegExp = /\d{2}\/\d{2}\/\d{4}/gim;
    const date = component.find("[data-test='time']").text();

    expect(date).toMatch(dateRegExp);
  });

  it("renders the author name", () => {
    const component = shallow(
      <PostMetaData
        postId={fakeId}
        timestamp={fakeTimeStamp}
        author={fakeAuthor}
      />
    );

    const author = component.find("[data-test='author']").text();

    expect(author).toEqual(fakeAuthor);
  });

  it("renders edit post link properly", () => {
    const component = shallow(
      <PostMetaData
        postId={fakeId}
        timestamp={fakeTimeStamp}
        author={fakeAuthor}
      />
    );

    const href = component.find("[data-test='link']").props().to;

    expect(href).toEqual(`/post/new/${fakeId}`);
  });
});
