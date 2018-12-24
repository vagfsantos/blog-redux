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
