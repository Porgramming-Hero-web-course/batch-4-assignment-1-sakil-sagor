// const removeDuplicates = (array) => {
//   const duplicates = array.filter((item, index) => {
//     console.log(item, array.indexOf(item), index);

//     return array.indexOf(item) !== index;
//   });
//   const uniqueDuplicates = [...new Set(duplicates)];
//   return uniqueDuplicates;
// };

// console.log(removeDuplicates([1, 5, 1, 1, 2, 2, 3, 4, 4, 5]));

// 3. task 3 ************************************************************************************************************
// const text = "i love  you typescript typescript ";

// const countWordOccurrences = (text, sample) => {
//   const splitText = text.split(" ");

//   let result = 0;
//   for (const newText of splitText) {
//     if (newText.toLowerCase() === sample.toLowerCase()) {
//       result++;
//     }
//   }
// };

// console.log(countWordOccurrences(text, "typescript"));

// 4. task 4 ************************************************************************************************************

// const calculateShapeArea = (shape) => {
//   let result = 0;
//   if (shape.shape === "circle") {
//       result = parseFloat((3.1416 * (shape.radius * shape.radius)).toFixed(2));
//   }
//   else if (shape.shape === "rectangle") {
//       result = parseFloat((shape.width * shape.height).toFixed(2));
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

// 5. task 5 ************************************************************************************************************

// const getProperty = (obj, pro) => {
//   return obj[pro];
// };

// // Sample Input
// const person = { name: "Alice", age: 30 };

// // Example usage
// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));
// 6. task 6 ************************************************************************************************************

// const updateProfile = (profile, propValue) => {
//   return { ...profile, ...propValue };
// };

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

//8: task 8  ************************************************************************************************************
// const validateKeys = (obj, keys) => {
//   return keys.every((key) => key in obj);
// };
// // Sample Input
// const person = { name: "Alice", age: 25, email: "alice@example.com" };

// // Example usage
// console.log(validateKeys(person, ["name", "age"]));
// console.log(validateKeys(person, ["name", "address"]));
