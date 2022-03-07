export function fromArrayToRanges(lista:number[]):string {
  let ranges:string = '';
  let auxstring:number[] = [];

  for (let i:number = 0; i < lista.length; i++) {
    if (lista[i] === (lista[i + 1] - 1)) {
        auxstring.push(lista[i]);
    } else {
        if (auxstring.length != 0){
            ranges += auxstring[0] + '_';
            auxstring = [];
        }

        if (i < lista.length - 1){
            ranges += lista[i] + ', ';
        } else {
            ranges += lista[i];
        }
    }
  }
  return ranges;
}
