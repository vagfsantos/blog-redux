import { mapStateToProps } from "./PostContent.container";

describe("<PostContentContainer />", () => {
  it("returns the found post", () => {
    const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const postId = 2;

    const props = mapStateToProps({ posts }, { postId });

    expect(props.post.id).toBe(postId);
  });

  it("returns undefined when it cannot find the post ", () => {
    const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const postId = 123456;

    const props = mapStateToProps({ posts }, { postId });

    expect(props.post).toBeUndefined();
  });
});
