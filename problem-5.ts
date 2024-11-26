// 5: task 5

const getProperty = <T, K extends keyof T>(obj: T, pro: K): T[K] => {
  return obj[pro];
};

const person = { name: "Alice", age: 30 };

console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
