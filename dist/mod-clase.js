"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimeNumber = void 0;
/**
 * Clase PrimeNumber
 */
class PrimeNumber {
    /**
     * Constructor de la clase donde inicializamos los atributos
     */
    constructor() {
        this.items = [];
        this.numbers = [];
        this.range = [];
    }
    ;
    /**
     * Metodo publico estatico que usaremos para crear una unica instancia de la clase
     * a traves de su constructor. Si lo volvemos a invocar devolvera
     * la instancia ya creada anteriormente.
     */
    static getInstance() {
        if (!PrimeNumber.primeNumber) {
            PrimeNumber.primeNumber = new PrimeNumber();
        }
        return PrimeNumber.primeNumber;
    }
    /**
     * Metodo para calcular los n primeros numeros primos
     * @param n le pasamos como parametro los numeros primos que queremos
     * que nos devuelva la funcion
     */
    getPrimes(n) {
        let i = 1;
        let counter = 0;
        let prime = 0;
        while (counter !== n) {
            for (let k = 2; k < i; k++) {
                if (i % k == 0) {
                    prime = 1;
                }
            }
            if (prime === 0 || i === 1) {
                PrimeNumber.primeNumber.numbers.push(i);
                counter++;
            }
            i++;
            prime = 0;
        }
        return PrimeNumber.primeNumber.numbers;
    }
    /**
     * Metodo que nos calcula los numeros primos que existen entre dos numeros
     * @param n le pasamos como parametro el numero inferior del rango
     * @param m le pasamos como parametro el numero superior del rango
     */
    getPrimesOnRange(n, m) {
        let prime = 0;
        for (let i = n; i < m; i++) {
            for (let k = 2; k < i; k++) {
                if (i % k == 0) {
                    prime = 1;
                }
            }
            if (prime === 0 || i === 1) {
                PrimeNumber.primeNumber.range.push(i);
            }
            prime = 0;
        }
        return PrimeNumber.primeNumber.range;
    }
    /**
     * Metodo que utilizamos para añadir un primeNumberItem que contiene n y m
     * @param item le pasamos coomo parametro ese item y hacemos un push en nuestro
     * array de items
     */
    addNumbers(item) {
        PrimeNumber.primeNumber.items.push(item);
    }
    /**
     * Metodo para retornar el array de items
     */
    getNumbers() {
        return PrimeNumber.primeNumber.items;
    }
}
exports.PrimeNumber = PrimeNumber;
