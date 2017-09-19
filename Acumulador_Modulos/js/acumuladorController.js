class AcumuladorController {
    //código controller
    $onInit () {
        //Se ejecuta automáticamente justo después del constructor
        //Se definen aquí para cumplir la guía de estilos de Angular 1.5
        this.incremento= 10; 
        this.total=this.incremento;       
 
    }
    sumarAcumulador (){
        this.total+= parseInt(this.incremento);
    }
    restarAcumulador (){
        this.total-= parseInt(this.incremento);
     
    }

}

angular.module("acumulador")

.controller("AcumuladorController", AcumuladorController)
