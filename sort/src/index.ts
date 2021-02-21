import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([5, -9, 0, 8, 7, 6]);
numbersCollection.sort();
console.log(numbersCollection.data);
