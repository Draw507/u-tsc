import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([5, -9, 0, 8, 7, 6]);
const sort = new Sorter(numbersCollection);
sort.sort();
console.log(sort.collection);
