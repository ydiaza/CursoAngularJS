angular.module("commonModule")
.directive('appPie', function(){
    return {
        //Es un objeto en formato JSON, con las propiedades posibles. (diapositiva 212)
        template: `
        <footer>
            <p>{{autor}}</p>
        </footer>
        `,
        restrict: 'AE', //Como atributo o como elemento
        scope: {
            autor:  '@autor'}

    }
})


