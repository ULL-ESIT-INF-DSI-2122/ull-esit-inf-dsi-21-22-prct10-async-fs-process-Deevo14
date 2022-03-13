/**
 * Función que recibe un array de numeros enteros y los comprime en rangos.
 * Es decir, si tenemos en el array [6, 7, 8, 10] el string que nos devuelve
 * será '6_8, 10'.
 * @param lista Recibe como parametro un array de numeros enteros
 * @returns Retornamos un string que contiene los rangos de numeros del array
 * y los numeros sueltos.
 */
export function fromArrayToRanges(lista:number[]):string {
  let ranges:string = '';
  let auxstring:number[] = [];

  for (let i:number = 0; i < lista.length; i++) {
    if (lista[i] === (lista[i + 1] - 1)) {
        auxstring.push(lista[i]);
    }
    else {
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

/**
 * Función contraria a la anterior, recibimos un string con rangos de números
 * enteros y devolvemos un array con todos los numeros que se encuentran dentro
 * de dichos rangos.
 * @param ranges Recibimos un string que representa una serie de rangos
 * @returns Devolvemos un array con todos los numeros correspondientes
 */
export function fromRangesToArray(ranges:string):number[]{
    const lista:number[] = [];
    const numerosSplited:string[] = ranges.split(/[\s,_]+/);
    let guion:number = 0;
    let aux:number = 0;
    let pos:number = 0;

    for (let i:number = 0; i < ranges.length; i++){
        switch (ranges[i]){
            case ',': {
                break;
            }
            case '_': {
                while ( aux < (parseInt(numerosSplited[pos]) - 1)){
                    aux++;
                    lista.push(aux);
                }
                break;
            }
            case '-': {
                guion = 1;
                break;
            }
            case ' ': {
                break;
            }
            default: {
                if (parseInt(ranges[i + 1]) === (2 || 4 )){
                    i++;
                }
                lista.push(parseInt(numerosSplited[pos]));
                aux = parseInt(numerosSplited[pos]);
                pos++;
                break;
            }
        }
    }
    if (guion === 1){
        lista.length = lista.length;
    } else {
        lista.length = lista.length - 1;
    }

    return lista;
}
