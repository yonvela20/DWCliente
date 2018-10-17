class Calculadora{
    constructor(a, b){
        this.a=a;
        this.b=b;
    }

    sumar(){
        this.resultado = this.a+this.b;
        document.write(this.a + "+" + this.b+ "= ");
        this.toString();

    }

    restar(){
        this.resultado =  this.a-this.b;
        document.write(this.a + "-" + this.b + "= ");
        this.toString();
    }

    multiplicar(){
        this.resultado = this.a*this.b;
        document.write(this.a + "*" + this.b+ "= ");
        this.toString();
    }

    dividir(){
        this.resultado =  this.a/this.b;
        document.write(this.a + "/" + this.b+ "= ");
        this.toString();
    }

    toString(){
        document.write(this.resultado+"<br>");
    }
}

class CalculadoraCientifica extends Calculadora{
    cuadrado(){
        this.resultado = this.a*this.a;
        document.write(this.a + "^2" + "= ");
        this.toString();
    }

    raiz(){
        this.resultado = Math.sqrt(this.a);
        document.write("sqrt(" + this.a + ")= ");
        this.toString();
    }
}

calculadora = new Calculadora(4, 4);
calculadora2 =  new CalculadoraCientifica(7, 7);

calculadora.sumar();
calculadora.restar();
calculadora.dividir();
calculadora.multiplicar();

calculadora2.cuadrado();
calculadora2.raiz();
