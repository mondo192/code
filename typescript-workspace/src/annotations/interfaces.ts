interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(
//     `Name: ${vehicle.name}`,
//     `Year: ${vehicle.year}`,
//     `Broken? ${vehicle.broken}`
//   );
// };

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
