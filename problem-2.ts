// 2. task 2
const removeDuplicates = (array: number[]): number[] => {
  const duplicates = array.filter((item, index) => {
    console.log(item, array.indexOf(item), index);
    return array.indexOf(item) !== index;
  });

  const uniqueDuplicates = [...new Set(duplicates)];
  return uniqueDuplicates;
};
console.log(removeDuplicates([5, 1, 5, 1, 1, 2, 2, 3, 4, 4, 5]));
