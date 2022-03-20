# Práctica 5 de Desarrollo de Sistemas Informáticos: Objetos, clases e interfaces


## Índice

  1. Tareas Previas
  2. Ejercicios
  3. Conclusiones
  

## 1. Tareas Previas

  1. Aceptar la asignación de GitHub Classroom asociada a esta práctica
  2. Comience a familiarizarse con los principios _SOLID_ y con las herramientas _Instanbul y Coveralls_.


## 2. Ejercicios

### Ejercicio 1 - Pokedex

Para este ejercicio hemos creado 3 clases.

- Pokemon:
```
export class Pokemon {
        constructor(public name:string, public weight:number,
        public height:number, public type:string,
        public attack:number, public defense:number,
        public speed:number, public hp:number){}
}
```
Está primera clase nos sirve para inicializar un nuevo Pokemon con sus respectivas estadísticas(nombre, ataque, defensa, vida, etc.).

- Pokedex:
```
export class Pokedex{
    constructor(public pokemons: Pokemon[]){}

    añadirPokemon(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
    }
}
```
La clase __Pokedex__ la vamos a ultilizar para almacenar todos los __Pokemons__ que creemos. El constructor, por tanto, será un _array_ de __Pokemon__. Después, tenemos una función llamada _añadirPokemon_, a la cual
le pasaremos como parámetro un __Pokemon__ y lo introducirá en el _array Pokemons_.

- Combat:
```
export class Combat {
    constructor(public pokemon1: Pokemon, public pokemon2: Pokemon){};

    effectivity(pokemon1Type:string, pokemon2Type:string):number {
        let damageValue:number = 0;
        let effectivity:string = '';

        switch (pokemon1Type){
            case 'fire': {
                if (pokemon2Type == 'electric'){
                    effectivity = 'neutral';
                }
                if (pokemon2Type == 'fire' || pokemon2Type == 'water'){
                    effectivity = 'weak';
                }
                if (pokemon2Type == 'plant'){
                    effectivity = 'strong';
                }

                break;
            }

            case 'water': {
                if (pokemon2Type == 'fire'){
                    effectivity = 'strong';
                }
                if (pokemon2Type == 'plant' ||
                    pokemon2Type == 'electric' || pokemon2Type == 'water'){
                    effectivity = 'weak';
                }

                break;
            }

            case 'plant': {
                if (pokemon2Type == 'electric'){
                    effectivity = 'neutral';
                }
                if (pokemon2Type == 'plant' || pokemon2Type == 'fire'){
                    effectivity = 'weak';
                }
                if (pokemon2Type == 'water'){
                    effectivity = 'strong';
                }

                break;
            }

            case 'electric': {
                if (pokemon2Type == 'plant' || pokemon2Type == 'fire'){
                    effectivity = 'neutral';
                }
                if (pokemon2Type == 'water'){
                    effectivity = 'strong';
                }
                if (pokemon2Type == 'electric'){
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

    start(){
        let turn = 1;
        while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0){
            if (turn % 2 !== 0){
                this.pokemon2.hp -= (this.pokemon1.attack - this.pokemon2.defense) * this.effectivity(this.pokemon1.type, this.pokemon2.type);
                console.log(`Turno ${turn}: ${this.pokemon1.name} HP = ${this.pokemon1.hp}, ${this.pokemon2.name} HP = ${this.pokemon2.hp}`);
            }
            else {
                this.pokemon1.hp -= (this.pokemon2.attack - this.pokemon1.defense) * this.effectivity(this.pokemon2.type, this.pokemon1.type);
                console.log(`Turno ${turn}: ${this.pokemon1.name} HP = ${this.pokemon1.hp}, ${this.pokemon2.name} HP = ${this.pokemon2.hp}`);
            }
            turn++;
        }
    }
}
```
Finalmente, tenemos la clase __Combat__, que nos servirá para simular un combate entre 2 __Pokemons__.
El constructor de la clase serán 2 __Pokemons__.

La primera función es _effectivity_, que es la función que creamos para el ejercicio 8 de
la práctica 3. A esta función le pasamos como parámetros el tipo de los 2 Pokemons que van
a combatir, y retornamos el multiplicador de daño según sus tipos.

La segunda función es _start_ que nos servirá para iniciar el combate. Mientras la vida de alguno de los Pokemons no baje de 0, seguirán combatiendo. El primer Pokemon que hemos introducido en el
constructor será el que empiece el combate. Calcularemos el daño que le hace un Pokemon a otro segun el ataque, la defensa del contricante y el multiplicador de daño según el tipo de cada Pokemon. Además de esto, en cada turno veremos por pantalla la vida que tiene cada Pokemon 
después de cada ataque.


### Ejercicio 2 - Conecta 4

En este segundo ejercicio también hemos creado 3 clases diferentes:

 - Player:

```
export class Player{
    public fichas:number = 21;
    constructor(public name:string){}
}
```
Está primera clase es muy simple, con ella creamos a un jugador y le asignamos 21 fichas para 
poder jugar. El constructor será solo el nombre del jugador, ya que no necesitamos más datos.

- Map:

``` 
export type Ficha = ('Vacia' | 'Roja' | 'Azul');

export class Map{
    public map:Ficha[][] = [];
    constructor(){
        for (let i = 0; i < 6; i++){
            this.map[i] = [];
            for (let j = 0; j < 7; j++){
                this.map[i][j] = 'Vacia';
            }
        }
    }

    imprimirMap(){
        console.log(`\n`);
        for (let i = 0; i < 6; i++){
            let auxfilas:string = '';
            for (let j = 0; j < 7; j++){
                switch (this.map[i][j]){
                    case 'Vacia': {
                        auxfilas += '_   ';
                        break;
                    }
                    case 'Roja': {
                        auxfilas += 'X   ';
                        break;
                    }
                    case 'Azul': {
                        auxfilas += 'O   ';
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
         console.log(`${auxfilas}\n`);
        }
    }

    insertFicha(column:number, player:number):boolean{
        if (column >= 0 && column < 7){
            for (let i = 5; i >= 0; i--){
                if (this.map[i][column] === 'Vacia'){
                    switch (player){
                        case 1: {
                            this.map[i][column] = 'Roja';
                            return true;
                            break;
                        }
                        case 2: {
                            this.map[i][column] = 'Azul';
                            return true;
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
            }
        }
        return false;
    }

    checkHorizontal(color:Ficha):boolean{
        let counth:number = 0;
        for (let i = 0; i < 6; i++){
            for (let j = 0; j < 7; j++){
                if (this.map[i][j] === color){
                    counth++;
                    if (counth === 4){
                        return true;
                    }
                }
                else {
                    counth = 0;
                }
            }
        }
        return false;
    }

    checkVertical(color:Ficha):boolean{
        let countv:number = 0;
        for (let i = 0; i < 7; i++){
            for (let j = 0; j < 6; j++){
                if (this.map[j][i] === color){
                    countv++;
                    if (countv === 4){
                        return true;
                    }
                }
                else {
                    countv = 0;
                }
            }
        }
        return false;
    }

    checkDiagonal(color:Ficha):boolean{
        let countd:number = 0;
        for (let i = 0; i < 6; i++){
            for (let j = 0; j < 7; j++){
                if (this.map[i][j] === color){
                    let k:number = i;
                    let l:number = j;
                    countd = 0;
                    while (k < 6 && k >= 0 && l >= 0 && l < 7 && this.map[k][l] === color){
                        countd++;
                        k++;
                        l++;
                        if (countd === 4){
                            return true;
                        }
                    }
                    countd = 0;
                    k = i;
                    l = j;
                    while (k < 6 && k >= 0 && l >= 0 && l < 7 && this.map[k][l] === color){
                        countd++;
                        k++;
                        l--;
                        if (countd === 4){
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    checkWin(color:Ficha):boolean{
        if (this.checkDiagonal(color) === true ||
            this.checkVertical(color) === true ||
            this.checkHorizontal(color) === true){
                return true;
            }
        else {
            return false;
        }
    }
}
```

La clase __Map__ nos servirá para todo lo relacionado con el "tablero" del juego.
Primero de todo, creamos un tipo __Ficha__ con los 3 posibles estados de una casilla:
_Vacio_ si no hay ninguna ficha y _Rojo o Azul_ dependiendo del jugador.

Al constructor de la clase no le pasamos nada como parámetro ya que no es necesario ningún
dato, y lo que hacemos es crear el tablero con fichas "vacias" para posteriormente cambiarles
el valor al color de las fichas de los jugadores.

La función __imprimirMap__ simplemente recorre todo el tablero y lo va imprimiendo por consola,
donde haya una casilla vacía pondremos un guión bajo y si es una casilla con una ficha roja o azul, "X" y "O" respectivamente.

La funcion __insertFicha__ inserta una ficha del color que le pasamos como parámetro y en la columna que también le pasamos. Si encontramos una posición vacía en la columna que hemos seleccionado, colocaremos ahí la ficha. En caso de que la columna este completa, retornamos _false_.

Después nos encontramos con 3 funciones que comprueban el mapa de 3 formas para ver si hay 4 fichas seguidas: 

 - __checkHorizontal__: Comprobamos si hay 4 fichas del mismo color horizontalmente en el tablero usando dos bucles para recorrer todo el tablero. Cada vez que se encuentre consecutivamente una ficha igual, sumaremos 1 al contador. Si llega a 4 es que hay 4 fichas seguidas.
 - __checkVertical__: Igual que el anterior pero esta vez en vertical, y además recorremos el tablero por columnas en vez de por filas.
 - __checkDiagonales__: Está función es un poco mas complicada de entender. Recorremos el tablero y cada vez que encontremos una ficha, recorreremos tanto la diagonal inferior izquierda
 como la derecha, si encuentra 4 fichas seguidas del mismo color, retornamos true.

La última función, llamada __checkWin__, compureba si alguna de las 3 funciones de checkeo ha retornado _true_, si es así, retornamos _true_ para dar por finalizada la partida.

- Game:
  
``` 
const scanf = require('scanf');

export class Game {
    constructor(public players:Player[]){};

    start(){
        console.log('Empieza la partida:');
        const mapa = new Map;
        const ficha:Ficha[] = ['Roja', 'Azul'];

        loop:
        while (this.players[0].fichas > 0 && this.players[1].fichas > 0){
            for (let i = 1; i < 3; i++){
                let error = 0;
                let column = 0;
                mapa.imprimirMap();
                while (mapa.insertFicha(column - 1, i) !== true){
                    if (error === 1){
                        console.log(`La columna está completa, seleccione otra diferente.\n`);
                    }
                    console.log(`${this.players[i - 1].name} seleccione una columna: `);
                    column = scanf('%d');
                    error = 1;
                }
                this.players[i - 1].fichas -= 1;
                if (mapa.checkWin(ficha[i - 1]) === true ){
                    mapa.imprimirMap();
                    console.log(`${this.players[i - 1].name} Gana\n`);
                    break loop;
                }
            }
        }
        if (this.players[0].fichas <= 0 || this.players[1].fichas <= 0){
            mapa.imprimirMap();
            console.log(`Empate, el tablero se ha completado sin ningún ganador`);
        }
    }
}
````
La última clase que tenemos es __Game__, donde tenemos el funcionamiento de la partida.
El constructor de la clase es un array al cual le pasamos los 2 jugadores que van a jugar.

La función __start__ empieza la partida. Mientras los jugadores tengan fichas se seguirá jugando o hasta que alguno de los dos gane. Imprimos el tablero y pedimos que el primer jugador introduzca una columna, si esta completa le volveremos a pedir que introduzca otra y checkeamos si ha ganado(es decir, si hay 4 fichas consecutivas iguales). Si no es así, haremos los mismo para el jugador 2. En el momento que alguno de los dos gane, saldremos del bucle y finalizará la partida. Si ninguno de los dos consigue ganar, imprimiremos el tablero final y un mensaje por consola donde se dice que ha habido un empate.

## 3. Conclusiones

Está práctica ha sido un poco más difícil que las anteriores. La parte mas complicada ha sido saber si la elección de clases y métodos es la más óptima para realizar cada ejercicio. En el primer ejercicio no tuve muchos problemas, aparte de lo mencionado anteriormente, pero el conecta 4 si fue bastante más difícil, donde tuve bastantes dudas en cuanto a clases, constructores y métodos a elegir. Al final decidí optar por lo explicado en el informe, sabiendo que no es la mejor manera de resolver el ejercico. También tuve bastantes problemas sobre la manera de comprobar cuando algún jugador ganaba, donde al final decidí comprobar el tablero completo cada vez que se introducía una ficha.

Aparte de estos problemas, creo que me voy familiarizando bastante bien con TypeScript, aunque tengo que tratar de entender mejor las facilidades que te da el uso de clases, interfaces, etc.