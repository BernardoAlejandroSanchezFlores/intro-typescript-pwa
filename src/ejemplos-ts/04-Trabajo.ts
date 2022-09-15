
interface alumnoUtl{
    nombre:string,
    edad:number,
    direccion:{calle:string,
        pais:string,
        estado:string,},
    
    mostrarDireccion:()=>void
}
const AlumnoUTL:alumnoUtl={
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'veracruz',
        pais:'MX',
        estado:'GTO'
        
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+', '+this.direccion.pais;
    },
}
const direccion=AlumnoUTL.mostrarDireccion();
console.log(direccion);