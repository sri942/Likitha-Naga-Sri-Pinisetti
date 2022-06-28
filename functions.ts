function getTime(): number {
    return new Date().getTime();//return type
}console.log(getTime());
function printHello(): void {
    console.log('Hello!');      //void return type
  }printHello();
  function multiply(a: number, b: number) {
    return a * b;                           //parameters
  }console.log(multiply(12,5))
  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);               //optional parameters
  }console.log(add(2,9))
  function pow(value: number, exponent: number = 10) {
    return value ** exponent;                //default parameters
  }console.log(pow(19));
  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;       //namaed parameters
  }
  console.log(divide({dividend: 10, divisor: 2}));
  function addition(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }                                 //rest parameters
  
  console.log(addition(15,16,11,18,12));
  type Negate = (value: number) => number;
  const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));
