// const carMakers = [];
const carMakers = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [];
// const carsByMake = [
//   ["f150"],
//   ["corolla"],
//   ["camaro"]
// ]

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// provent incompatible types
// carMakers.push(100);
carMakers.map((car: string): string => {
  return car.toUpperCase();
});


// flexible types
const importantTypes: (Date | string)[] = [];
importantTypes.push("2030-10-10");
importantTypes.push(new Date());
