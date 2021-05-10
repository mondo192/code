import Bowser from 'bowser';

export class BrowserSniffer {

  private bowser: Bowser.Parser.Parser;

  constructor() {
    this.bowser = Bowser.getParser(window.navigator.userAgent);
  }

  getBrowserName() {
    return this.bowser.getBrowserName();
  }

  getBrowserVersion() {
    return this.bowser.getBrowserVersion();
  }

  getOperatingSystemName() {
    return this.bowser.getOSName();
  }

  getOperatingSystemVersion() {
    console.log(this.bowser.getOS());
    
    return this.bowser.getOSVersion();
  }

  getGeolocation() {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
}