import { http } from "../config/axios"

export const get = async (url: URL) => {
  try {
    return await http.get(url.href);
  } catch (error) {
    return error.response;
  }
}

export const head = async (url: URL) => {
  try {
    return await http.head(url.href);
  } catch (error) {
    return error.response;
  }
}