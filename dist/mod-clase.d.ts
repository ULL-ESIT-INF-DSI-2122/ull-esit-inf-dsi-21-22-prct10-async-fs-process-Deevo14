export declare type primeNumberItem = {
    n: number;
    m: number;
};
/**
 * Clase PrimeNumber
 */
export declare class PrimeNumber {
    /**
     * Atributos privados de la clase
     */
    private items;
    private numbers;
    private range;
    private static primeNumber;
    /**
     * Constructor de la clase donde inicializamos los atributos
     */
    private constructor();
    /**
     * Metodo publico estatico que usaremos para crear una unica instancia de la clase
     * a traves de su constructor. Si lo volvemos a invocar devolvera
     * la instancia ya creada anteriormente.
     */
    static getInstance(): PrimeNumber;
    /**
     * Metodo para calcular los n primeros numeros primos
     * @param n le pasamos como parametro los numeros primos que queremos
     * que nos devuelva la funcion
     */
    getPrimes(n: number): number[];
    /**
     * Metodo que nos calcula los numeros primos que existen entre dos numeros
     * @param n le pasamos como parametro el numero inferior del rango
     * @param m le pasamos como parametro el numero superior del rango
     */
    getPrimesOnRange(n: number, m: number): number[];
    /**
     * Metodo que utilizamos para añadir un primeNumberItem que contiene n y m
     * @param item le pasamos coomo parametro ese item y hacemos un push en nuestro
     * array de items
     */
    addNumbers(item: primeNumberItem): void;
    /**
     * Metodo para retornar el array de items
     */
    getNumbers(): primeNumberItem[];
}
