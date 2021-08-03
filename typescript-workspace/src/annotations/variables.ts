let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function annotate the variable not the function itself
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

function logNumberFn(i: number): void {
  console.log(i);
  
}

// when to use annontations
// 1) function that retuns the "any" type
const json = "{'x': 10, 'y': 20}";
const coords: {x: number, y: number} = JSON.parse(json);
console.log(coords);

// 2) when we declare a variable on one line 
//    and initialise it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; ++i) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) varibale whose type can not be infferred correctly
const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; ++i) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}



