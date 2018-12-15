import { headers, API_HOST } from "./config.api";

export const fetchAllPosts = () => {
  return fetch(`${API_HOST}/posts`, { headers }).then(response =>
    response.json()
  );
};
