/* eslint-disable max-len */

/**
 * Interface Collectable con  4 metodos
 */
export interface Collectable<T>{
    addItem(newItem: T):void;
    getItem(index:number):T;
    removeItem(remItem: T):void;
    getNumberOfItems(): number;
}

/**
 * Interface Printable con 1 metodo
 */
export interface Printable{
    print():string;
}

/**
 * Clase PrintableCollection, donde implementaremos los metodos de Collectable
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable{
    /**
     * Constructor de la clase rintableCollection
     * @param items El parametro a pasar sera un array de elementos
     */
    constructor(protected items: T[]){}

    /**
     * Implementación del metodo addItem, que nos servira para añadir un nuevo item al array
     * @param newItem Le pasamos como parámetro el nuevo item
     */
    addItem(newItem: T) {
        this.items.push(newItem);
    }

    /**
     * Implementación del metodo getItem, que nos sirve para saber el valor de un item dada su posición
     * @param index El parametro a pasar será la posición del item en el array
     * @returns nos devolvera el valor del item
     */
    getItem(index:number){
        return this.items[index];
    }

    /**
     * Implementación del metodo removeItem, que nos sirve para borrar un item
     * @param remItem le pasamos como parámetro el valor del item a borrar
     */
    removeItem(remItem: T){
        const index = this.items.indexOf(remItem);
        this.items.splice(index, 1);
    }

    /**
     * Implementación del metodo getNumberOfItems, que nos sirve para saber cuantos items hay
     * @returns nos devuelve el número de items que tiene el array
     */
    getNumberOfItems() {
        return this.items.length;
    }

    abstract print():string;
}

/**
 * Clase NumericPrintableCollection, donde implementaremos el metodo print
 */
export class NumericPrintableCollection<T> extends PrintableCollection<T>{
    /**
     * Constructor de la clase
     * @param items Le pasaremos como parámetro un array de elementos
     */
    constructor(protected items: T[]){
        super(items);
    }

    /**
     * Implementación de la función print
     * @returns nos retornará un string donde tendremos todos los items separados por comas
     */
    print(){
        let cadena:string = '';
        this.items.forEach((element) => {
            cadena += element + ', ';
        });
        return cadena;
    }
}

