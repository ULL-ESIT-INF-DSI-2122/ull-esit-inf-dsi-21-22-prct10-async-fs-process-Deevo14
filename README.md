# Práctica 6 de Desarrollo de Sistemas Informáticos: Clases e interfaces genéricas. Principios SOLID


## Índice

  1. Tareas Previas
  2. Ejercicios
  

## 1. Tareas Previas

  1. Aceptar la asignación de GitHub Classroom asociada a esta práctica
  2. Obtención de un informe acerca del cubrimiento del código fuente.


## 2. Ejercicios

![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Deevo14/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-Deevo14?branch=main)

### 2.1. El combate definitivo

Para este primer ejercicio hemos creado 6 clases:

- __Figher:__
```
export abstract class Fighter {
    constructor(protected name:string, protected weight:number,
        protected height:number, protected catchingPhrase:string,
        protected attack:number, protected defense:number,
        protected speed:number, protected hp:number,
        protected universe:string, protected type?:string){}

        getName():string{
            return this.name;
        }
        getWeight():number{
            return this.weight;
        }
        getHeight():number{
            return this.height;
        }
        getCatchingPhrase():string{
            return this.catchingPhrase;
        }
        getAttack():number{
            return this.attack;
        }
        getDefense():number{
            return this.defense;
        }
        getSpeed():number{
            return this.speed;
        }
        getHp():number{
            return this.hp;
        }
        getUniverse():string{
            return this.universe;
        }
        setHp(newHp:number){
            this.hp = newHp;
        }
        getType():string | undefined {
            return this.type;
        }
}
```

En esta primera clase abstracta llamada __Fighter__ reprensatermos a un luchador. Almacenaremos todas sus estadísticas y además tendremos una serie de métodos para poder acceder a ellas. _Type_ será un parámetro opcional en el constructor ya que solo lo usaremos cuando el Fighter sea un Pokemon.

- __Pokemon:__
```
export class Pokemon extends Fighter {
        constructor(name:string, weight:number, height:number,
                catchingPhrase:string, attack:number,
                defense:number, speed:number,
                hp:number, protected type:string){
        super(name, weight, height, catchingPhrase,
                attack, defense, speed, hp, 'Pokemon', type);
        }
}
```
Esta clase hereda los atributos de la clase __Fighter__ y con ella creamos personajes del universo Pokemon. Como se puede ver, usamos el parámetro opcional _type_ ya que le pasaremos el tipo del Pokemon.

-__Marvel:__
```
export class Marvel extends Fighter {
        constructor(name:string, weight:number, height:number,
                catchingPhrase:string, attack:number,
                defense:number, speed:number, hp:number){
        super(name, weight, height, catchingPhrase,
                attack, defense, speed, hp, 'Marvel');
        }
}
```
Heredamos también los atributos de __Fighter__ pero esta vez para crear personajes del universo Marvel.

-__Hogwarts:__
```
export class Hogwarts extends Fighter {
        constructor(name:string, weight:number, height:number,
                catchingPhrase:string, attack:number,
                defense:number, speed:number, hp:number){
        super(name, weight, height, catchingPhrase,
                attack, defense, speed, hp, 'Hogwarts');
        }
}
```
Igual que la anterior pero está vez crearemos personajes del universo de Harry Potter.

-__Pokedex:__
```
export class Pokedex{
    constructor(protected fighters: Fighter[]){}

    addFighter(newFighter: Fighter) {
        this.fighters.push(newFighter);
    }
    getFighters(){
        return this.fighters;
    }
}
```
Clase Pokedex que usaremos para almacenar todos los Fighters. Podremos añadir nuevos Fighters con el metodo _addFigher_ y ver todos los Fighters almacenados con el metodo _getFighters_, que nos retornara el array de Fighters. 

-__Combat:__

```
export class Combat {
    constructor(private fighter1: Fighter, private fighter2: Fighter){;

    effectivity(universe1:string, universe2:string):number {
        let damageValue:number = 0;
        let effectivity:string = '';

        switch (universe1){
            case 'Marvel': {
                if (universe2 == 'Pokemon'){
                    effectivity = 'strong';
                }
                if (universe2 == 'Hogwarts' || universe2 == 'Marvel'){
                    effectivity = 'neutral';
                }
                break;
            }
            case 'Hogwarts': {
                if (universe2 == 'Pokemon'){
                    effectivity = 'weak';
                }
                if (universe2 == 'Marvel' || universe2 == 'Hogwarts'){
                    effectivity = 'neutral';
                }
                break;
            }
            case 'Pokemon': {
                if (universe2 == 'Hogwarts'){
                    effectivity = 'strong';
                }
                if (universe2 == 'Pokemon'){
                    effectivity = this.pokEfectivity(this.fighter1.getType(), this.fighter2.getType());
                }
                if (universe2 == 'Marvel'){
                    effectivity = 'weak';
                }
                break;
            }
        }

        switch (effectivity){
            case 'neutral': {
                damageValue = 1;
                break;
            }
            case 'strong': {
                damageValue = 2;
                break;
            }
            case 'weak': {
                damageValue = 0.5;
                break;
            }
        }
        return damageValue;
    }

    pokEfectivity(pokemon1Type:(string | undefined), pokemon2Type:(string | undefined)):string{
        let effectivity1:string = '';

        switch (pokemon1Type){
            case 'fire': {
                if (pokemon2Type == 'electric'){
                    effectivity1 = 'neutral';
                }
                if (pokemon2Type == 'fire' || pokemon2Type == 'water'){
                    effectivity1 = 'weak';
                }
                if (pokemon2Type == 'plant'){
                    effectivity1 = 'strong';
                }

                break;
            }

            case 'water': {
                if (pokemon2Type == 'fire'){
                    effectivity1 = 'strong';
                }
                if (pokemon2Type == 'plant' ||
                    pokemon2Type == 'electric' || pokemon2Type == 'water'){
                    effectivity1 = 'weak';
                }

                break;
            }

            case 'plant': {
                if (pokemon2Type == 'electric'){
                    effectivity1 = 'neutral';
                }
                if (pokemon2Type == 'plant' || pokemon2Type == 'fire'){
                    effectivity1 = 'weak';
                }
                if (pokemon2Type == 'water'){
                    effectivity1 = 'strong';
                }

                break;
            }

            case 'electric': {
                if (pokemon2Type == 'plant' || pokemon2Type == 'fire'){
                    effectivity1 = 'neutral';
                }
                if (pokemon2Type == 'water'){
                    effectivity1 = 'strong';
                }
                if (pokemon2Type == 'electric'){
                    effectivity1 = 'weak';
                }
                break;
            }
        }

        return effectivity1;
    }

    start():string{
        let turn = 1;
        while (this.fighter1.getHp() > 0 && this.fighter2.getHp() > 0){
            if (turn % 2 !== 0){
                this.fighter2.setHp(this.fighter2.getHp() - (50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * this.effectivity(this.fighter1.getUniverse(), this.fighter2.getUniverse())));
                console.log(`Turno ${turn}, Ataca ${this.fighter1.getName()}:
    ${this.fighter1.getCatchingPhrase()}-> ${this.fighter1.getName()} HP = ${this.fighter1.getHp()}, ${this.fighter2.getName()} HP = ${this.fighter2.getHp()}\n\n`);
            }
            else {
                this.fighter1.setHp(this.fighter1.getHp() - (50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * this.effectivity(this.fighter2.getUniverse(), this.fighter1.getUniverse())));
                console.log(`Turno ${turn}, Ataca ${this.fighter2.getName()}:
    ${this.fighter2.getCatchingPhrase()}-> ${this.fighter2.getName()} HP = ${this.fighter2.getHp()}, ${this.fighter1.getName()} HP = ${this.fighter1.getHp()}\n\n`);
            }
            turn++;
        }
        if (turn % 2 !== 0){
            console.log(`Gana ${this.fighter2.getName()}\n\n`);
            return this.fighter2.getName();
        }
        else {
            console.log(`Gana ${this.fighter1.getName()}\n\n`);
            return this.fighter1.getName();
        }
    }
}
```
La clase __Combat__ simulará un combate entre dos Fighters que le pasaremos como parametros al constructor. Después de esto, comprobaremos los universos para ver la efectividad de sus ataques. Si los dos son Pokemons, la efectividad se calculará en base a sus tipos.
El metodo start funciona igual que en la práctica 5, exceptuando que ahora por consola también aparecerá la frase de cada uno de los Fighters al atacar.

### 2.3 Ejercicio 3

Para este ejercicio hemos creado la clase __Cifrado:__

```
export class Cifrado {
    private abc:string = 'abcdefghijklmnñopqrstuvwxyz';

    constructor(private text:string, private clave:string, private opcion:string, private alfabeto:string){}

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

    codificacion(text:string, clave:string):string{
        let final:string = '';
        for (let i=0; i<text.length; i++){
            final += this.abc[(this.abc.search(text[i]) + this.abc.search(clave[i]))%this.abc.length];
        }
        return final;
    }

    decodificacion(text:string, clave:string):string{
        let final:string = '';
        for (let i=0; i<text.length; i++){
            if (this.abc.search(this.text[i]) >= this.abc.search(clave[i])) {
                final += this.abc[(this.abc.search(text[i]) - this.abc.search(clave[i]))%this.abc.length];
            }
            else {
                final += this.abc[(this.abc.search(text[i]) - this.abc.search(clave[i])) + this.abc.length];
            }
        }
        return final;
    }
}
```
Tenemos como atributo de la clase el abecedario en castellano que será el que ultilzaremos como default. Al constructor le pasaremos un texto, la clave, la opcion que sera cifrar o descifrar y el abecedario a utilizar.

Si se introduce la opcion mal, nos retornará un error, y si queremos ultilizar otro alfabeto que no sea el castellano, lo escribiremos en el constructor.

Después, repetiremos la clave hasta que sea de la misma longitud que el texto y cifraremos o descifraremos dependiendo de la opción introducida.

Para codificar, sumaremos las posiciones de las letras del texto y de la clave en el alfabeto, y la letra codificada será el valor que se encuentre en la posición dada por el resultado de esta suma. Ej: C + B => 3 + 2 => 5 = E.
Hacemos esto con cada par de letras del texto y de la clave, y retornaremos el texto final cifrado.

Para descoficar, haremos lo mismo pero restando el valor de la letra de la clave a la del texto cifrado, para así poder conseguir el texto original.
