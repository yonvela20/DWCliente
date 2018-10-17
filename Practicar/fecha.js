class Fecha{
    /* constructor(mes, dia, año){
        this.mes=mes;
        this.dia=dia;
        this.año=año;
    } */

    static retornarMes(mes){
        if(this.mes == 1){
            document.write("Enero <br>");
        } if(this.mes == 2){
            document.write("Febrero <br>");
        } if(this.mes == 3){
            document.write("Marzo <br>");
        } if(this.mes == 4){
            document.write("Abril <br>");
        } if(mes == 5){
            document.write("Mayo <br>");
        } if(mes == 6){
            document.write("Junio <br>");
        } 
    }

    static fechaCompleta(dia, mes, año){
        document.write(dia + "/"+mes+"/"+año);
    }
}

let f1 = Fecha.retornarMes(6);
let f2 = Fecha.fechaCompleta(2, 6, 1997);
