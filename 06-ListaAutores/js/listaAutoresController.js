
class ListaAutoresController {

    $onInit () {
        //Se ejecuta automáticamente justo después del constructor
        //Se definen aquí para cumplir la guía de estilos de Angular 1.5
        this.aAutores = [{
        nombre: 'N1', 
        apellido:'A1',
        fechaNacimiento: new Date(1947,0,1),
        pais:'ES', 
        generos:['policiaco']
        },
    {
        nombre: 'N2', 
        apellido:'A2',
        fechaNacimiento:'11',
        pais:'UK', 
        generos:['policiaco','fantastico']
        
    }];
        this.autor='Yéssica Díaz';  
        this.fecha=new Date(2017,9,19)
    }
    


 
}
angular.module("autores")

.controller("ListaAutoresController", [ListaAutoresController])

