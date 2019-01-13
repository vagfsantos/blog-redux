import { mapStateToProps } from "./PostCard.container";

describe("<PostCardContainer />", () => {
  it("returns the found post", () => {
    const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const id = 2;

    const props = mapStateToProps({ posts }, { id });

    expect(props.post.id).toBe(id);
  });

  it("returns undefined when it cannot find the post ", () => {
    const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const id = 123456;

    const props = mapStateToProps({ posts }, { id });

    expect(props.post).toBeUndefined();
  });
});
