function elevar(a: number, b: number): void {
  let r: number = 1;

  for (let i: number = 0; i < b; i++) {
    r = r * a;
  }

  console.log("resultado", r);
}

elevar(2, 3);
