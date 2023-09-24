let i: number = 1;

while (i <= 50) {
  console.log(i);
  i = i + 1;
}

let quantidadeImpares: number = 0;
let a: number = 0;

while (quantidadeImpares < 10) {
  if (a % 2 != 0) {
    console.log(a);
    quantidadeImpares = quantidadeImpares + 1;
  }
  a = a + 1;
}
