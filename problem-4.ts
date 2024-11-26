// 4. task 4

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (shape: Circle | Rectangle): number => {
  let result: number = 0;
  if (shape.shape === "circle") {
    result = parseFloat((3.1416 * (shape.radius * shape.radius)).toFixed(2));
  } else if (shape.shape === "rectangle") {
    result = parseFloat((shape.width * shape.height).toFixed(2));
  }
  return result;
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4.234234,
  height: 6,
});
console.log(circleArea, rectangleArea);
