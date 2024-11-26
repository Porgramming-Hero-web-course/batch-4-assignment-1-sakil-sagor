"use strict";
// 1. task one
// function sumArray(numbers: number[]): number {
//   return numbers.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([2, 3, 4, 5]));
// ****************
// 2. task 2
// const removeDuplicates = (array: number[]): number[] => {
//   const duplicates = array.filter((item, index) => {
//     console.log(item, array.indexOf(item), index);
//     return array.indexOf(item) !== index;
//   });
//   const uniqueDuplicates = [...new Set(duplicates)];
//   return uniqueDuplicates;
// };
// console.log(removeDuplicates([5, 1, 5, 1, 1, 2, 2, 3, 4, 4, 5]));
// ***************************
// 3. task 3
// const text = "i love  you typescript typescript ";
// const countWordOccurrences = (text: string, sample: string): number => {
//   let result: number = 0;
//   const splitText: string[] = text.split(" ");
//   for (const newText of splitText) {
//     if (newText.toLowerCase() === sample.toLowerCase()) {
//       result++;
//     }
//   }
//   return result;
// };
// console.log(countWordOccurrences(text, "i"));
// 4. task 4
// type Circle = {
//   shape: "circle";
//   radius: number;
// };
// type Rectangle = {
//   shape: "rectangle";
//   width: number;
//   height: number;
// };
// const calculateShapeArea = (shape: Circle | Rectangle): number => {
//   let result: number = 0;
//   if (shape.shape === "circle") {
//     result = parseFloat((3.1416 * (shape.radius * shape.radius)).toFixed(2));
//   } else if (shape.shape === "rectangle") {
//     result = parseFloat((shape.width * shape.height).toFixed(2));
//   }
//   return result;
// };
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4.234234,
//   height: 6,
// });
// console.log(circleArea, rectangleArea);
// 5: task 5
// const getProperty = <T, K extends keyof T>(obj: T, pro: K): T[K] => {
//   return obj[pro];
// };
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));
// 6: task 6
// interface Profile {
//   name: string;
//   age: number;
//   email: string;
// }
// const updateProfile = (
//   profile: Profile,
//   propValue: Partial<Profile>
// ): Profile => {
//   return { ...profile, ...propValue };
// };
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { name: "Alice amion", age: 501 }));
// 7: task 7
// class Car {
//   make: string;
//   model: string;
//   year: number;
//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   getCarAge(): number {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.year;
//   }
// }
// const car = new Car("Honda", "Civic", 2025);
// console.log(car.getCarAge());
// 8: task 8
const validateKeys = (obj, keys) => keys.every((key) => key in obj);
// Sample Input
const person = { name: "Alice", age: 25, email: "alice@example.com" };
// Example usage
console.log(validateKeys(person, ["name", "age"])); // Output: true
console.log(validateKeys(person, ["name", "address"])); // Output: false
