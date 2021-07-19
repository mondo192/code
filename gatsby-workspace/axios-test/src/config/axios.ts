import axios from "axios";

const instance = axios.create({
  timeout: 1000
});

instance.interceptors.request.use(async request => {
  request.headers.common["X-Timestamp"] = new Date().getTime();
  return request;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  response.headers["X-Response-Time"] = new Date().getTime() - response.config.headers["X-Timestamp"];
  return response;
}, error => {
  return Promise.reject(error);
});

export const http = instance;
