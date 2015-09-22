var app = angular.module('myApp', []);

app.controller('controllerPerson', function ($scope, $http) {
    
    
    
   var response =  $http.get('http://www.w3schools.com/angular/customers.php');
    response.success(function(response){$scope.names = response.records});
    
    
//    $scope.names = [
//        {name: 'Imran Mushtaq', country: 'Pakistan'},
//        {name: 'Arsalan Khan', country: 'USA'},
//        {name: 'Azeemuddin', country: 'India'}
//    ];
});