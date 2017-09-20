
class ProvinciasController {

  //  constructor($log){
   //     this.$log=$log;
    //}
    $onInit () {
        //Se ejecuta automáticamente justo después del constructor
        //Se definen aquí para cumplir la guía de estilos de Angular 1.5
        this.aProvincias = [{
        idProvincia: 2,
        nombre: 'Cáceres', 
        },
    {
        idProvincia: 1, 
        nombre:'Badajoz',       
    },
    {
        idProvincia: 4, 
        nombre:'Teruel',       
    }];
        this.imprimir=false;
        this.tonoClaro=("oscuro");
        this.provseleccionada=null;
        this.autor='Yéssica Díaz';  
        this.fecha=new Date(2017,9,19)
    }
    avisarPrint(){
        console.info("Modificado valor imprimir");
        console.dir(this);
    }
    


 
}
angular.module("provincias")

.controller("ProvinciasController", [ProvinciasController])

