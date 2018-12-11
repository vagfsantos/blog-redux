const uuid = require("uuid/v1");

export const API_HOST = "http://localhost:3001";

let token = localStorage.token;
if (!token) token = localStorage.token = uuid();

export const headers = {
  Authorization: token,
  Accept: "application/json"
};
