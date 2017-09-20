
class FormularioController {

    $onInit () {
        //Se ejecuta automáticamente justo después del constructor
        //Se definen aquí para cumplir la guía de estilos de Angular 1.5
        this.user={
            nombre: '',
            apellidos: '',
        }; 
        this.autor='Yéssica Díaz';  
        this.fecha=new Date(2017,9,19)
    }
 
}
angular.module("formulario")

.controller("FormularioController", [FormularioController])

