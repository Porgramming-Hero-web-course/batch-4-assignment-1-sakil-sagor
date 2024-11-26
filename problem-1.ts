// 1. task one
function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([2, 3, 4, 5]));
