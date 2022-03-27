/**
 * Clase Cifrado
 */
export class Cifrado {
    /**
     * Atributo privado donde tenemos el abecedario castellano
     */
    private abc:string = 'abcdefghijklmnñopqrstuvwxyz';

    /**
     * Constructor de la clase
     * @param text Texto a cifrar o descifrar
     * @param clave Clave que usaremos
     * @param opcion Cifrar o Descifrar
     * @param alfabeto Castellano u otro el cual introduciremos
     */
    constructor(private text:string, private clave:string, private opcion:string, private alfabeto:string){}

    /**
     * metodo para comenzar el cifrado o descifrado
     * @param opcion le pasamos la opcion
     * @param alfabeto le pasamos el alfabeto a usar
     * @returns nos retorna el texto final
     */
    start(opcion:string, alfabeto:string):string{
        if (opcion !== 'cifrar' && opcion !== 'descifrar'){
            return 'La opción elegida es incorrecta';
        }

        if (alfabeto !== 'castellano'){
            this.abc = this.alfabeto;
        }
        let k:number = 0;
        while (this.clave.length !== this.text.length){
            this.clave += this.clave[k];
            k++;
        }
        if (opcion === 'cifrar'){
            return this.codificacion(this.text, this.clave);
        }
        else {
            return this.decodificacion(this.text, this.clave);
        }
    }

    /**
     * metodo para cifrar
     * @param text le pasamos el texto a cifrar
     * @param clave le pasamos la clave a utilizar
     * @returns retornamos el texto cifrado
     */
    codificacion(text:string, clave:string):string{
        let final:string = '';
        for (let i=0; i<text.length; i++){
            final += this.abc[((this.abc.search(text[i]) + this.abc.search(clave[i])) + 1) %this.abc.length];
        }
        return final;
    }

    /**
     * metodo para descifrar
     * @param text le pasamos el texto a descifrar
     * @param clave le pasamos la clave a utilizar
     * @returns retornamos el texto descifrado
     */
    decodificacion(text:string, clave:string):string{
        let final:string = '';
        for (let i=0; i<text.length; i++){
            if (this.abc.search(this.text[i]) >= this.abc.search(clave[i])) {
                final += this.abc[((this.abc.search(text[i]) - this.abc.search(clave[i]))-1) % this.abc.length];
            }
            else {
                final += this.abc[(this.abc.search(text[i]) - this.abc.search(clave[i])-1) + this.abc.length];
            }
        }
        return final;
    }
}
