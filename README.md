# Práctica 4 de Desarrollo de Sistemas Informáticos: Arrays, tuplas y enumerados


## Índice

  1. Tareas Previas
  2. Ejercicios
  3. Conclusiones
  

## 1. Tareas Previas

  1. Aceptar la asignación de GitHub Classroom asociada a esta práctica
  2. Lea la documentación sobre TypeDoc y sobre Mocha y Chai.


## 2. Ejercicios

### __Ejercicio 1__

_Crea una función productTable que reciba como parámetro un número N >= 1 y que devuelva un array de arrays con N tablas de multiplicar, donde cada tabla de multiplicar contiene los primeros N productos._

```
export function productTable(N:number):(number[][]|string) {
  const result:number[][] = [];

  if (N>=1) {
    for (let i:number = 0; i < N; i++) {
      result[i] = [];
      for (let j:number = 0; j < N; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    return result;
  }
  else {
    return 'El número introducido tiene que ser mayor o igual que 1';
  }
}
```

Primero comprobamos que _N_ sea mayor o igual que _1_. Recorremos dos bucles ya que tenemos un array de dos dimensiones, uno para cada tabla de multiplicar y el otra para cada número de cada tabla. Vamos rellenando cada número de cada tabla con _(i + 1) * (j + 1)_. El primer paréntesis sería el número base de la tabla y el segundo el multiplicador en esa posición. Un ejemplo con la tabla del 3 sería (2 + 1 * 0 + 1),(2 + 1 * 1 + 1),(2 + 1 * 2 + 1). Vamos guardanando cada tabla en cada posición del array.

Si _N_ es menor que _1_, devolvemos un string con dicho error. 


### __Ejercicio 2__

*Escriba una función fromArrayToRanges que reciba un array o lista de números enteros y los comprima en rangos, es decir, que devuelva una cadena de caracteres con la compresión obtenida. Un rango, es decir, un conjunto de números consecutivos se representará mediante una cadena de caracteres con el primer y último número del rango separado por un guión bajo (_). Un rango de un único número será la cadena de caracteres que representa a ese ùnico número. Luego, una serie de rangos vendrá separada por comas (,).*


*Escriba una función fromRangesToArray que lleve a cabo la operación inversa, es decir, que reciba como argumento una cadena de caracteres representando una serie de rangos y devuelva el array de números correspondiente.*

```
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
```
Inicializamos el _string_ que vamos a retornar y un _array de numbers_ que utilizaremos después. 

Recorremos el _array_ que se nos pasa como parámetro y comprobamos si el número siguiente es uno más que el actual. Si es así, metemos en el _auxstring_ el número actual. 

Si no se cumple este _if_, tenemos 3 opciones:

 - Si previamente encontramos un número que cumpliera el primer _if_, metemos en el _string_ que vamos a retornar ese número más un _guión bajo_.
 - Si la posición en la que nos encontramos es menor que la última del array, pasamos al _string_ el número en el que estamos y una _coma_.
 - Si no se cumple ninguna de estas dos condiciones, solo le pasamos al _string final_ el número en el que nos encontramos.

 Con esto, conseguimos que cada vez que encontremos un número consecutivo al anterior imprima un _guión bajo_ y el último número de una posible serie de consecutivos. Si encuentra un número solo lo imprima con una 
 _coma_, exceptuando que sea el último del array, que no imprimimos _coma_.

 ```
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
                if (parseInt(ranges[i + 1]) === (2 || 4)){
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
```

Antes de explicar el código de esta función puntualizar que creo que no funciona correctamente para algunos casos que no sean los del ejemplo. Tiene diversos fallos que logro identificar pero no encontré solucion para ellos. De igual forma procedo a explicarlo:


Primero creamos un _array de strings_ numerosSplited, dejando solo los números al string que se nos ha pasado.

Recorremos el _string_ _ranges_ y:

 - Si es una _coma_ o un _espacio_, pasamos al siguiente caracter.
 - Si es un _guión medio_, le asiganmos _1_ a _guion_ para despues imprimir.
 - Si es un _guión bajo_, rellenamos con los numeros consecutivos entre el numero de antes del _guion bajo_ y el de después.
 - El caso _default_ se corresponde a cuando es un número. El primer _if_ sirve para cuando tenemos un número de dos cifras, simplemente hacemos un i++ pàra no leer la segunda cifra. Lo siguiente es que cuando nos encontremos un número, lo metemos en _lista_ pero desde el _array de strings_ que creamos al principio. También lo metemos en _aux_ por si el siguiente caracter es un guion bajo. Y aumentamos la posición en el _array de strigs_ númerosSplited.

 Finalmente tenemos un ajuste de lista, ya que nos imprime un NaN al final del array, excepto cuando hay algun número negativo(por esto lo del guión medio.)


### __Ejercicio 3__

*Si desea realizar algún proyecto usando una Raspberry Pi, probablemente necesitará usar resistencias. Para este ejercicio necesita conocer dos cosas sobre las resistencias:*

*Cada resistor o resistencia tiene un valor de resistencia en Ohmios asociado. Además, las resistencias son tan pequeñas que si se les imprimiera el valor en ellas, sería muy difícil de leer. Para resolver este problema, los fabricantes siguen un estándar de bandas codificadas de colores para indicar sus valores de resistencia. Cada banda tiene una posición y un valor numérico.*

*Las primeras dos bandas de una resistencia tienen un esquema de codificación muy simple: cada color se mapea a un único número. Por ejemplo, si una resistencia tiene impresa una banda marrón (valor 1) seguida de una banda verde (valor 5), el valor de la resistencia se traduciría al número 15.*

*El objetivo de este ejercicio es crear un programa que nos ayude a calcular el valor de una resistencia sin tener que memorizar los valores de las bandas. Para ello, cree una función decodeResistor que recibe como parámetros los nombres de los colores de una resistencia como entrada y devuelve un número de dos dígitos indicando el valor de la resistencia. La función deberá devover un número de dos dígitos incluso si recibe más de dos colores como parámetros.*

*De este modo, la combinación Marrón-Verde debería devolver 15 al igual que Marrón-Verde-Violeta ignorando el tercer color.*

```
export function decodeResitor(resistance:string):number{
    enum colors {Negro, Marrón, Rojo, Naranja, Amarillo, Verde,
        Azul, Violeta, Gris, Blanco};

    let result:string = '';
    const lista = resistance.split('-');

    for (let i = 0; i < 2; i++){
        for (let k = 0; k < 10; k++){
            if (lista[i] === colors[k]){
                result += k;
            }
        }
    }

    return parseInt(result);
}
```

Creamos un _enum_ con todos los colores en el orden correspondiente para adjudicarles su valor correspondiente.

Hacemos un bucle de dos iteraciones ya que solo vamos a leer los dos primeros colores que recibimos en el string y en el otro bucle recorremos el enum. Cuando el color coincida con uno del enum, le pasamos su posición(es decir el valor del color) al resultado. Finalmente retornamos el resultado como tipo _number_ haciendo un _parseInt_ al _string_ final.


### __Ejercicio 4__

*Dado un array que contiene exclusivamente cadenas de texto, comprobar que las palabras del array están encadenadas. Esto es, una o más letras del final de una cadena coinciden con el comienzo de la siguiente cadena del array.*

*Para resolver este ejercicio, escriba una función meshArray que compruebe si las cadenas del array están encadenadas o no. La función recibirá como parámetro un array de cadenas de texto y devolverá:  “Error al encadenar” si las cadenas del array no están encadenadas.*

*Una cadena de texto que contenga las letras que encadenan las palabras del array. A priori no sabe cuantas letras encadenadas tendrán en común, pero al menos será una.*


```
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
```

Recorremos el _array_ de palabras y guardamos la palabra actual y la siguiente en dos variables, además de inicializar una variable _posicion_ y un _string auxiliar_, las cuales ultilizaremos después. 

Ahora, recorremos la palabra acutal con un bucle y si encuentra que una letra es igual a la primera de la siguiente palabra, introducimos esa letra en _auxstring_ y pasamos a la siguiente letra de la segunda palabra. Seguimos haciendo esto hasta llegar a la última letra de la primera palabra, si se ha encontrado una cadena que llegue hasta el final, meteremos en _result_ la cadena guardada en _auxstring_ y sumaremos 1 al contador para ver cuantas palabras se han encadenado. En el caso de que no, no meteremos nada en _result_ y no sumaremos al contador.

Al final comprobamos si se han encadenado todas las palabras, en el casod de que no retornaremos un error y si se han encadenado, retornaremos la cadena.


### __Ejercicio 5__

*Escriba una función meanAndConcatenate que reciba como parámetro un array que incluye caracteres de texto y números. La función deberá devolver como resultado un array con dos valores:*

 - *La media de los valores numéricos.*
 - *Una cadena resultado de la concatenación de caracteres del array recibido.*


```
export function meanAndConcatenate(tuple:(number | string)[])
:[number, string]{
    let media:number = 0;
    let concatenate:string = '';
    let count:number = 0;

    tuple.forEach((x) => {
        if (typeof x === 'number'){
            media += x;
            count++;
        }
        else if (typeof x === 'string'){
            concatenate += x;
        }
    });

    media /= count;

    const result:[number, string] = [media, concatenate];

    return result;
}
```

Recorremos la tupla que se nos ha introducido como parámetro y:

 - Si la variable que encontramos es un tipo _number_, sumamos el valor a la variable _media_ creada antes y sumamos 1 al counter para saber cuantos números hemos añadido.
 - Si la variable es un tipo _string_, guardamos la letra en _concatenate.

 Finalmente, hallamos la media dividiendo por los números que hemos contado e imprimimos el resultado como una tupla donde el primer valor es la media de tipo _number_ y el segundo es la concatenación de las letras, de tipo _string_.


### __Ejercicio 6__

*Dado un array de números, escriba una función moveZeros que reciba como parámetro dicho array y mueva todos los ceros presentes en el array al final del mismo. El array debe mantener el mismo orden respecto al resto de elementos.*

```
export function moveZeros(nums:number[]):number[]{
    const nums2:number[] = [];

    nums.forEach((x) => {
        if (x !== 0){
            nums2.push(x);
        }
    });
    nums.forEach((x) => {
        if (x === 0){
            nums2.push(0);
        }
    });

    return nums2;
}
```

Recorremos cada elemento del _array_ 2 veces.

 - Primero cogemos los números diferentes de 0 y los metemos en otro _array_
 - La segunda vez que lo recorremos, metemos los 0 que haya al final del _array_

 Retornamos el _array_ final con los ceros al final.


### __Ejercicio 7__

*Cree una función multiplyAll que tome como parámetro un array de números. Esta función deberá devolver como resultado otra función que toma como argumento un único valor numérico y devuelve un nuevo array. El array devuelto por la segunda función debe ser el resultado de la multiplicación de los números del array por el valor numérico que recibe la segunda función. Además, no se debe modificar el primer array.*

```
export function multiplyAll(nums:number[]):Function{
    const result:number[] = [];

    /**
     * Funcion que multiplica un array de numeros por un numero
     * @param x recibe como parametro un numero
     * @returns retorna un array de numbers
     */
    function multiply(mult:number):number[]{
        nums.forEach((x) => {
            result.push(x * mult);
        });
        return result;
    }}
    return multiply;
}
```

El programa funcionaría tal que:

 1. Creamos un _array de numbers_ para el resultado final.
 2. Retornamos la función __multiply__, es decir, no entramos en la función cuando la inicializamos, sino en el _return_.
 3. A la función __multiply__ le entrá como parámetro el número con el que multiplicaremos el _array_ nums, el cual podemos usar  ya que __multiply__ la hemos creado dentro de la función principal. Recorremos los valores de _nums_ y los vamos multiplicando y guardando en _result_.
 4. Finalmente retornamos _result_ que será el resultado final.


### __Ejercicio 8__

*Un punto describe una posición determinada respecto a un sistema de coordenadas preestablecido. Suponiendo un sistema de dos coordenadas (x, y), un punto en el espacio se denotaría de la forma Point(X, Y). A partir de la siguiente definición, cree un tipo de dato capaz de definir un punto bidimensional.*

*Además, defina las funciones necesarias para:*

 - *Sumar y restar dos puntos coordenada a coordenada.*
 - *Calcular el producto de un punto por un número.*
 - *Calcular la distancia euclídea entre dos puntos.*

 
```
type Point = [number, number];

export function pointAdd(p1:Point, p2:Point):Point {
    const result:Point = [0, 0];

    result[0] = p1[0] + p2[0];
    result[1] = p1[1] + p2[1];

    return result;
}

export function pointSub(p1:Point, p2:Point):Point{
    const result:Point = [0, 0];

    result[0] = p1[0] - p2[0];
    result[1] = p1[1] - p2[1];

    return result;
}

export function pointMult(p1:Point, x:number):Point{
    const result:Point = [0, 0];

    result[0] = p1[0] * x;
    result[1] = p1[1] * x;

    return result;
}


export function pointDist(p1:Point, p2:Point):number{
    let result:number = 0;

    result = Math.sqrt(Math.pow((p2[0]-p1[0]), 2) + Math.pow((p2[1]-p1[1]), 2));

    return result;
}
```

Primero creamos un tipo Point, el cual consiste en un _array de numbers_ con dos valores, que serán las cordenadas del punto.

Hemos creado 4 funciones:

 - __Suma de dos puntos__: Sumamos la primera coordenada de cada punto y la guardamos en el _Point result_. Hacemos lo mismo con la segunda y retornamos _result_
 - __Resta de dos puntos__: Igual que la suma pero restando las coordenadas.
 - __Multiplicación por un número__: Multiplicamos cada coordenada por el número que se nos pasa como parámetro y retornamos el punto resultante.
 - __Distancia euclídea entre dos puntos__: Usamos la fórmula de la distancia euclídea.

### __Ejercicio 9__

*A partir del desarrollo realizado para el ejericio anterior, cree un tipo de datos que sea capaz de definir puntos de 3 o más dimensiones. Esto es, un punto debe tener, como mínimo, tres dimensiones y, como máximo, las que el usuario desee. Además, desarrolle las mismas funciones que en el ejercicio anterior, de modo que puedan operar sobre puntos n-dimensionales. Tenga en cuenta que no se pueden operar los puntos definidos en diferentes sistemas de coordenadas. Es decir, no podemos sumar un punto de tres dimensiones y un punto de cinco dimensiones.*


```
type DPoint = [number, number, number, ...number[]];

export function dPointAdd(p1:DPoint, p2:DPoint):DPoint {
    const result:DPoint = [0, 0, 0];

    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] + p2[i];
    }

    return result;
}

export function dPointSub(p1:DPoint, p2:DPoint):DPoint{
    const result:DPoint = [0, 0, 0];

    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] - p2[i];
    }

    return result;
}

export function dPointMult(p1:DPoint, x:number):DPoint{
    const result:DPoint = [0, 0, 0];


    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] * x;
    }

    return result;
}

export function dPointDist(p1:DPoint, p2:DPoint):number{
    let result:number = 0;

    for (let i = 0; i < p1.length; i++){
    result += (p2[i] - p1[i]) ** 2;
    }

    return Math.sqrt(result);
}
```
Creamos un tipo _DPoint_ como en el ejercicio anterior, pero esta vez que tenga como mínimo 3 coordenadas y sin máximo.

Las funciones también son casi idénticas, las únicas diferencias es que al inicializar los _DPoint result_ lo hacemos con 3 coordenadas, en el caso de que tenga más no hay problema ya que la longitud es variable. La otra diferencia es que para hacer los cálculos de suma, resta, etc, usamos un bucle de _x_ iteraciones dependiendo de las coordenadas que tengan los puntos.


### __Ejercicio 10__

*Vives en Cartesia, la ciudad donde todas las carreteras están diseñadas para formar una rejilla perfecta. Imagina que tienes una reunión muy importante y llegas 10 minutos antes de la hora prevista. Para relajar lo nervios, te dispones a dar un paseo corto. Afortunadamente, la ciudad ha desarrollado una aplicación que genera paseos en sus smartphones (cada vez que se ejecuta la aplicación, nos envia un array de cadenas de una única letra que representan las direcciones en las que debemos caminar [‘n’, ‘s’, ‘e’, ‘o’]). Ten en cuenta que solo caminas un bloque por cada letra, y que además cada bloque lo recorres en un minuto.*

*El objetivo es crear una función que reciba un array con las letras que definen el paseo que ha generado la app y devuelva verdadero o falso si el paseo que nos ha proporcionado la app se puede realizar en exactamente 10 minutos. Recuerda que quieres ser puntual para la reunión. Por supuesto, hay que tener en cuenta que el paseo nos devuelve al punto de partida, en otro caso la función debería devolver falso.*


```
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
```
Primero comprobamos que el camino que se nos ha pasado se puede hacer en exactamente 10 minutos, es decir, que sean 10 movimientos. En el caso de que si, recorremos el _array Path_ y dependiendo de la letra que sea (n, s, e, o), sumaremos o restaremos 1 a _i_ o _j_, dependiendo de la dirección del movimiento(_i_ será para movimientos de norte o sur y _j_ para este u oeste). Si al final de todos los movimientos estamos en el punto de partida, es decir, que _i_ y _j_ valgan 0, retornaremos __true__. En caso contrario, __false__.

## 3. Conclusiones

