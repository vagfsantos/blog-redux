import { headers, API_HOST } from "./config.api";

export const fetchAllComments = postId => {
  return fetch(`${API_HOST}/posts/${postId}/comments`, { headers }).then(
    response => response.json()
  );
};
