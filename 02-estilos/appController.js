function AppController(){
    //Función constructora: con this y definiendo referencia a scope desde la vista
    this.user={
        name: 'Pepe',
        apellidos: 'Perez',
    }; 
    this.curso='AngularJS';

    this.borrar = function (){
        this.user.name='';  
        console.dir(this);     
    }

}

angular.module("appMain")

.controller("AppController", AppController)
