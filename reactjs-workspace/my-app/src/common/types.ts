export interface RiverItem {
  continent: string;
  length: string;
  outflow: string;
}

export interface RiverDict<RiverItem> {
  [name: string]: RiverItem;
}