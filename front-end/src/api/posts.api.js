import { headers, API_HOST } from "./config.api";

export const fetchAllPosts = () => {
  return fetch(`${API_HOST}/posts`, { headers }).then(response =>
    response.json()
  );
};

export const saveNewPost = post => {
  return fetch(`${API_HOST}/posts`, {
    headers,
    method: "POST",
    body: JSON.stringify(post)
  }).then(response => response.json());
};

export const editPost = post => {
  return fetch(`${API_HOST}/posts/${post.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(post)
  }).then(response => response.json());
};

export const deletePost = id => {
  return fetch(`${API_HOST}/posts/${id}`, {
    headers,
    method: "DELETE"
  }).then(response => response.json());
};

export const postVote = (id, vote) => {
  return fetch(`${API_HOST}/posts/${id}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ option: vote })
  }).then(response => response.json());
};
