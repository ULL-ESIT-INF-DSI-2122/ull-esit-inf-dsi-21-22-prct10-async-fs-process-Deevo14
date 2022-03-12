/**
 * Función que, dado un array de palabras, comprueba si estas
 * están encadenadas
 *
 * @param words recibe un array de string donde cada string es una palabra
 * @returns Si todas las palabras estan encadenadas devuelve un string
 * con las letras que encadenan dichas palabras, en caso contrario
 * devuelve un error al encadenar.
 */
export function meshArray(words:string[]):string{
    let result:string = '';
    let contador:number = 0;

    for (let i = 0; i < words.length - 1; i++){
        const word:string = words[i];
        const nextWord:string = words[i + 1];
        let pos:number = 0;
        let auxstring:string = '';

        for (let j = 0; j < word.length; j++){
            if (nextWord[pos] === word[j]){
                auxstring += word[j];
                pos++;
                if (j === word.length - 1){
                    result += auxstring;
                    contador++;
                }
            }
        }
    }

    if (contador !== words.length - 1){
        result = 'Error al encadenar';
    }
    return result;
}
