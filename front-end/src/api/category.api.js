import { headers, API_HOST } from "./config.api";

export const fetchAllCategories = () => {
  return fetch(`${API_HOST}/categories`, { headers }).then(response =>
    response.json()
  );
};
