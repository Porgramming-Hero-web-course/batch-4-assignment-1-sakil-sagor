// 3. task 3
const text = "i love  you typescript typescript ";

const countWordOccurrences = (text: string, sample: string): number => {
  let result: number = 0;
  const splitText: string[] = text.split(" ");
  for (const newText of splitText) {
    if (newText.toLowerCase() === sample.toLowerCase()) {
      result++;
    }
  }
  return result;
};

console.log(countWordOccurrences(text, "typescript"));
