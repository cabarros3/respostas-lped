// let numero: number = 5
// if (numero % 2 != 0) {
//     if (numero % 3 != 0) {
//         console.log("indivisivel!");
//     }
// }

let a: number = 10;
let b: number = 2;
let c: number = -1;

if (a % b == 0) {
  c = c * a;
  b = a - c;
} else if (a % b == 1) {
  a = a + b;
  c = c + a;
} else {
  b = -1;
  c = b - c;
}

console.log(a, b, c);
