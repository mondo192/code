export class Request {
  private startTime: number;
  private endTime: number;

  constructor() {
    this.startTime = 0;
    this.endTime = 0;
  }

  probe(method: string, url: URL) {
    return new Promise<XMLHttpRequest>((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.onloadstart = (event: ProgressEvent<EventTarget>) => {
        this.startTime = event.timeStamp;
      };

      request.onloadend = (event: ProgressEvent<EventTarget>) => {
        this.endTime = event.timeStamp;
        if (request.status >= 200 && request.status < 400) {
          return resolve(request);
        }
        reject({ status: request.status, statusText: request.statusText });
      };

      request.onerror = () => {
        reject({ status: request.status, statusText: request.statusText });
      };

      request.open(method, url.href, true);
      request.send();
    });
  }

  roundTripTime() {
    return this.endTime - this.startTime;
  }
}
