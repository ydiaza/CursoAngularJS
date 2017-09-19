class AppController {
    constructor($scope){//solo para control de dependencia. Se ubica dentro del thumb y se declaran las variables
    //Si quiero inyectar el $scope
    this.$scope=$scope;
    }
    $onInit () {
        //Se ejecuta automáticamente justo después del constructor
        //Se definen aquí para cumplir la guía de estilos de Angular 1.5
        this.user={
            name: 'Pepe',
            apellidos: 'Perez',
        }; 
        this.curso='AngularJS';       
 
    }
    borrar (){
        this.user.name='';  
        console.dir(this);     
    }
}

angular.module("appMain")

.controller("AppController", AppController)
