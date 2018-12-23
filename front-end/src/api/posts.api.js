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
