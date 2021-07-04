import { instance as axios } from "../config/Axios";

export const probe = async (url: string) => {
  try {
    return await axios.head(url);
  } catch (error) {
    return error.response;
  }
}
