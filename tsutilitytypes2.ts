
//ReturnType
type PointGenerator = () => { x: number; y: number; };

const values: ReturnType<PointGenerator> = {
  x: 56,
  y: 60
};
console.log(values);

//Parameters
type PointPrinter = (p: { x: number; y: number; }) => void;

const point: Parameters<PointPrinter>[0] = {
  x: 92,
  y: 48
};
console.log(point);