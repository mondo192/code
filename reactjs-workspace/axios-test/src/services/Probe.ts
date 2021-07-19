import { instance as axios } from "../config/Axios";

export const probe = async (url: string) => {
  try {
    axios.interceptors.response.use(function (response) {

      response.config.metadata.endTime = new Date()
      response.duration = response.config.metadata.endTime - response.config.metadata.startTime
      return response;
    }, function (error) {
      error.config.metadata.endTime = new Date();
      error.duration = error.config.metadata.endTime - error.config.metadata.startTime;
      return Promise.reject(error);
    });
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("ERROR 1: ", error.response.data);
      console.log("ERROR 2: ", error.response.status);
      console.log("ERROR 3:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log("ERROR 4:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('ERROR 5:', error.message);
    }
    console.log("ERROR 6:", error.config);
  }
}
