import { RiverDict, RiverItem } from "../../common/types";

const rivers: RiverDict<RiverItem> = {
  nile: {
    continent: 'Africa',
    length: '6,650 km',
    outflow: 'Mediterranean'
  },
  amazon: {
    continent: 'South America',
    length: '6,575 km',
    outflow: 'Atlantic Ocean'
  },
  yangtze: {
    continent: 'Asia',
    length: '6,300 km',
    outflow: 'East China Sea'
  },
  mississippi: {
    continent: 'North America',
    length: '6,275 km',
    outflow: 'Gulf of Mexico'
  }
}

export const getRiverInformation = (name: string) => {
  return new Promise<RiverItem>((resolve) => {
    setTimeout(() => {
      resolve(
        rivers[name]
      );
    }, 1500);
  });
};
