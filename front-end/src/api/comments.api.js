import { headers, API_HOST } from "./config.api";

export const fetchAllComments = postId => {
  return fetch(`${API_HOST}/posts/${postId}/comments`, { headers }).then(
    response => response.json()
  );
};

export const commentVote = (id, vote) => {
  return fetch(`${API_HOST}/comments/${id}`, {
    headers,
    method: "POST",
    body: JSON.stringify({ option: vote })
  }).then(response => response.json());
};

export const addComments = comment => {
  return fetch(`${API_HOST}/comments`, {
    headers,
    method: "POST",
    body: JSON.stringify(comment)
  }).then(response => response.json());
};

export const updateComment = comment => {
  return fetch(`${API_HOST}/comments/${comment.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(comment)
  }).then(response => response.json());
};

export const deleteComment = id => {
  return fetch(`${API_HOST}/comments/${id}`, {
    headers,
    method: "DELETE"
  }).then(response => response.json());
};
