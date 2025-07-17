let a: number = 1;
let b: number = 2;
let c: number = 2 * (a - b);
let d: number = -c;
let e: boolean = c > d;

a = -b * a;
b = a * -b;
c = (4 + a) % 3;
d = d * c;
e = e! = a + b > 0;

console.log(a, b, c, d, e);
