import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.style.scss";
import PostListContainer from "../PostList/PostList.container";
import BaseLayout from "../BaseLayout/BaseLayout.component";
import NewPostContainer from "../NewPost/NewPost.container";
import PostContentContainer from "../PostContent/PostContent.container";
import CommentListContainer from "../CommentList/CommentList.container";
import CommentFormContainer from "../CommentForm/CommentForm.container";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={PostListContainer} />
            <Route
              exact
              path="/:category"
              render={({ match }) => (
                <PostListContainer category={match.params.category} />
              )}
            />
            <Route exact path="/post/new" component={NewPostContainer} />
            <Route
              exact
              path="/post/new/:id"
              render={({ match }) => (
                <NewPostContainer postId={match.params.id} />
              )}
            />
            <Route
              exact
              path="/:category/:postId"
              render={({ match }) => (
                <div>
                  <PostContentContainer postId={match.params.postId} />
                  <CommentListContainer postId={match.params.postId} />
                </div>
              )}
            />
            <Route
              exact
              path="/post/:id/comment"
              render={({ match }) => (
                <CommentFormContainer parentId={match.params.id} />
              )}
            />
            <Route
              exact
              path="/post/:id/comment/:commentId"
              render={({ match }) => (
                <CommentFormContainer
                  id={match.params.commentId}
                  parentId={match.params.id}
                />
              )}
            />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
