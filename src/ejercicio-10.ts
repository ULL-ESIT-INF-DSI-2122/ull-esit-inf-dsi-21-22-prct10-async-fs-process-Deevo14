/**
 * Funcion que comprueba si un camino generado por una app
 * nos devuelve al punto de inicio y ademas sea posible
 * hacerlo en 10 minutos.
 *
 * @param path recibimos como parámetro un array de strings donde
 * cada elemento se correspone con un movimiento(N:norte, S:sur,
 * E:este, O:oeste)
 * @returns La funcion nos retornara _true_ si es posible realizar el paseo
 * en 10 minutos y llegar al inicio y _false_ si no es posible.
 */
export function cartesia(path:string[]):boolean{
    let i:number = 0;
    let j:number = 0;

    if (path.length === 10){
        path.forEach((dir) => {
            switch (dir){
                case 'n': {
                   i += 1;
                   break;
                }
                case 's': {
                    i -= 1;
                    break;
                }
                case 'e': {
                    j += 1;
                    break;
                }
                case 'o': {
                    j -= 1;
                    break;
                }
            }
        });
        if (i === 0 && j === 0){
            return true;
        }
    }

    return false;
}
