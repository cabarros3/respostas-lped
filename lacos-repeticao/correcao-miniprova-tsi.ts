let x: number = 1;
let y: number = 0;
let z: number = -1;
let w: number = -1;
let k: boolean = true;

while (3 > y) {
  if (y % 3 == 1) {
    x = x * y + 2 * z; // 2 = -1,
    z = x - z; // 2 = 0
  } else if (y % 3 != 0) {
    w = x * x + w; // 3 = 0
    k = k && x > 0; // 3 = false
  }

  console.log(x, y, z, w, k);
  y = y + 1;
}
