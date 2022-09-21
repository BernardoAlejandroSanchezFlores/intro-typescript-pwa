class Resultado{
    a:number;
    b:number;
    c:number;
    resultado:number;
    resultado2:number;
    
    
    mostrar():void{
        this.resultado=Math.pow(this.b,2)-(4*(this.a*this.c));
        this.resultado=Math.sqrt(this.resultado);
        this.resultado=(-(this.b))-(this.resultado);
        this.resultado=this.resultado/(2*this.a);

        this.resultado2=Math.pow(this.b,2)-(4*(this.a*this.c));
        this.resultado2=Math.sqrt(this.resultado2);
        this.resultado2=(-(this.b))+(this.resultado2);
        this.resultado2=this.resultado2/(2*this.a);
        
        console.log(`El resultado X1 es: ${this.resultado2}`);
        console.log(`El resultado X2 es: ${this.resultado}`);
    }
}
let resultado1=new Resultado();
resultado1.a=6;
resultado1.b=-19;
resultado1.c=7;
resultado1.mostrar();
