class PensadorController {

    $onInit () {
        //Se ejecuta automáticamente justo después del constructor
        //Se definen aquí para cumplir la guía de estilos de Angular 1.5
        this.nombre= ''; 
        this.nuevoPensamiento='';
        this.arrayPensamientos=[];   
        this.autor='Yéssica Díaz';  
        console.dir(this);  
 
    }
    aniadir (){
        this.arrayPensamientos.push(this.nuevoPensamiento);
        this.nuevoPensamiento='';
        console.dir(this);  
        
    }
 
}

angular.module("pensamiento")

.controller("PensadorController", PensadorController)
