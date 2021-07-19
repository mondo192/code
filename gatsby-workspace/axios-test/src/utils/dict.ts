import { AxiosResponse } from "axios";

export const buildDict = (
  promises: PromiseSettledResult<AxiosResponse<any>>[],
  proxies: URL[]
) => {
  let dict = {};
  
  for (const proxy of proxies) {
    for (const promise of promises) {
      if (promise.status === "fulfilled") {
        dict[proxy.href] = {
          "status": promise.value.status,
          "responseTime": promise.value.headers["X-Response-Time"]
        }
      } else {
        dict[proxy.href] = {
          "status": promise.reason
        }
      }
    }
  }
  
  return dict; 
}