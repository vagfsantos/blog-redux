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
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <BaseLayout>
                  <PostListContainer />
                </BaseLayout>
              );
            }}
          />
          <Route
            exact
            path="/:category"
            render={({ match }) => {
              return (
                <BaseLayout>
                  <PostListContainer category={match.params.category} />
                </BaseLayout>
              );
            }}
          />
          <Route
            exact
            path="/post/new"
            render={() => {
              return (
                <BaseLayout>
                  <NewPostContainer />
                </BaseLayout>
              );
            }}
          />
          <Route
            exact
            path="/post/new/:id"
            render={({ match }) => {
              return (
                <BaseLayout>
                  <NewPostContainer postId={match.params.id} />
                </BaseLayout>
              );
            }}
          />
          <Route
            exact
            path="/:category/post/:id"
            render={({ match }) => {
              return (
                <BaseLayout>
                  <PostContentContainer postId={match.params.id} />
                  <CommentListContainer postId={match.params.id} />
                </BaseLayout>
              );
            }}
          />
          <Route
            exact
            path="/post/:id/comment"
            render={({ match }) => {
              return (
                <BaseLayout>
                  <CommentFormContainer parentId={match.params.id} />
                </BaseLayout>
              );
            }}
          />
          <Route
            exact
            path="/post/:id/comment/:commentId"
            render={({ match }) => {
              return (
                <BaseLayout>
                  <CommentFormContainer
                    id={match.params.commentId}
                    parentId={match.params.id}
                  />
                </BaseLayout>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
