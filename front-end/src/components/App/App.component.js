import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.style.scss";
import PostListContainer from "../PostList/PostList.container";
import BaseLayout from "../BaseLayout/BaseLayout.component";
import NewPostContainer from "../NewPost/NewPost.container";
import PostContentContainer from "../PostContent/PostContent.container";

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
            path="/:category/post/:id"
            render={({ match }) => {
              return (
                <BaseLayout>
                  <PostContentContainer postId={match.params.id} />
                </BaseLayout>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
