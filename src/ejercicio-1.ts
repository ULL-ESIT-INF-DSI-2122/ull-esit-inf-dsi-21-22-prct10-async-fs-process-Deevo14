export function productTable(N:number):(number[][]|string) {
  const result:number[][] = [];

  if (N>=1) {
    for (let i:number = 0; i < N; i++) {
      result[i] = [];
      for (let j:number = 0; j < N; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    return result;
  } else {
    return 'El número introducido tiene que ser mayor o igual que 1';
  }
}

