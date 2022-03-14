export class Persona {
    private nombre: string;
    private apellidos: string;
    private genero: string;
    private fechaNacimiento: string;

    constructor(nombre: string, apellidos:string,
                genero:string, fechaNacimiento:string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
    }

    getNombre(){
        return this.nombre;
    }
    getApellidos(){
        return this.apellidos;
    }
    getGenero(){
        return this.genero;
    }
    getFechaNacimiento(){
        return this.fechaNacimiento;
    }

    setNombre(nNombre:string){
        this.nombre = nNombre;
    }
    setApellidos(nApellidos:string){
        this.apellidos = nApellidos;
    }
    setGenero(nGenero:string){
        this.genero = nGenero;
    }
    setfechaNacimieno(nFechaNacimiento:string){
        this.fechaNacimiento = nFechaNacimiento;
    }
}


export class Estudiante extends Persona {
    public correo:string;
    constructor(nombre:string, apellidos:string,
                genero:string, fechaNacimiento:string, correo:string){
        super(nombre, apellidos, genero, fechaNacimiento);
        this.correo = correo;
    }
}

export class Profesor extends Persona {
    public correo:string;
    constructor(nombre:string, apellidos:string,
                genero:string, fechaNacimiento:string, correo:string){
        super(nombre, apellidos, genero, fechaNacimiento);
        this.correo = correo;
    }
}

export class Asignatura {
    public nombre:string;
    constructor(nombre:string){
        this.nombre = nombre;
    }
}
