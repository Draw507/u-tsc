class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const a = new ArrayOfAnything<number>([1, 2, 3]);
const b = new ArrayOfAnything<string>(["a", "b", "c"]);
const c = new ArrayOfAnything(["a", "b", "c"]);

// generics functions

function printStrings(array: string[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function printNumbers(array: number[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function printAnything<T>(array: T[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

printAnything<string>(["1", "2"]);

// generic constraint

class Cars implements Printable {
  print() {
    console.log("I am a car");
  }
}

class House implements Printable {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(array: T[]): void {
  for (let index = 0; index < array.length; index++) {
    array[index].print();
  }
}

printHousesOrCars([new House(), new Cars()]);
