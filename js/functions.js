function suma(){
 var a =0;
 var b=0;
 var suma =0;

 a=parseInt(prompt("por favor ingrese el primer valor"));
 b=parseInt(prompt("por favor ingrese el segundo valor"));

 suma= a+b;

 alert ("el resulatdo de la suma es: "+suma)

}

function operaciones(){
    var c=0;
    var d=0;

    var suma=0;
    var resta=0;
    var multipicacion=0;
    var division=0;

    c=parseInt(prompt("porfacor ingrese el primer valor"));
    d=parseInt(prompt("porfacor ingrese el segundo valor"));

    suma= c+d;
    resta=c-d;
    multipicacion=c*d;
    division=c/d;

    alert ("el resulatdo de la suma es: "+suma)
    alert ("el resulatdo de la resta es: "+resta)
    alert ("el resulatdo de la multiplicacion es: "+multipicacion)
    alert ("el resulatdo de la division es: "+division)
}

function numeroMayor(){
    var n1=0;
    var n2=0;

    n1=parseInt(prompt("por favor ingrese el primer valor"));
    n2=parseInt(prompt("por favor ingrese el segundo valor"));

    if (n1==n2) {

        alert ("LOS VALORES SON IGUALES")
        
    } else if (n1>n2){
        alert (n1+" ES MAYOR QUE "+n2);

        
    }else{
        alert (n2+" ES MAYOR QUE "+n1);

    }

}

function cuadrado(){

    var cua=0;
    var res=0;
    cua=parseInt(prompt("por favor ingrese el primer valor")); 

        res= cua*cua;

        alert ("El cuadrado es : "+res);
}

function areaTriangulo (){
    var base=0;
    var h=0;
    var area=0;

    base=parseInt(prompt("por favor ingrese el valor de la base: "));
    h=parseInt(prompt("por favor ingrese el valor de la altura"));
    
    area= base*h/2;

    alert ("El area del triangulo es: "+area);
}

function pulgadas(){
    var cm=0;
    var m=0;
    var pul=0;

    pul=parseInt(prompt("por favor ingrese el valor en pulgada: "));

    cm= pul*2.54;
    m= pul*(1/39.37);

    alert ("La conversion de pulgadas a centimetros es de : "+cm);
    alert ("La conversion de pulgadas a metros es de : "+m);
}

function fruteria(){

    var k=0;
    var tk=0;
    var des=0;
    k=parseInt(prompt("Ingrese catidad de kilos"));

    tk= k*4500;

    if (k<=2) {

        alert ("no hay descuento, su total a pagar es: "+tk);
        
    }
    else if (k==3){
        des= tk-((10/100)*tk);
        alert ("su total es : $"+tk+" su descuento es del 10%, su total a pagar es de: $"+des);
    }
    else if (k<=5){
        des= tk-((10/100)*tk);
        alert ("su total es : $"+tk+" su descuento es del 10%, su total a pagar es de: $"+des);
    }
    else if (k==6){
        des= tk-((15/100)*tk);
        alert ("su total es : $"+tk+" su descuento es del 15%, su total a pagar es de: $"+des);
    }
    else if (k<=10){
        des= tk-((15/100)*tk);
        alert ("su total es : $"+tk+" su descuento es del 15%, su total a pagar es de: $"+des);
    }
    else if(k>10){
        des= tk-((20/100)*tk);
        alert ("su total es : $"+tk+" su descuento es del 20%, su total a pagar es de: $"+des);
    }
}