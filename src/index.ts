


//definicion de interfaces
interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
}
//objeto en ts
const alumno:Alumno={
    nombre:'Juan',
    matricula:1234,
    email:"juan@gmail.com"
}

let mascotas=['perro','gato','perico']

mascotas[1]='shshs';
mascotas.push('nuevo')

let tem:(number | string)[]=[]
tem.push('Nombre');
tem.push(232);


console.log(mascotas)