var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
 
var a = getUrlVars()["name"];  

function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value.replace("%20", " ");
 
});
return vars;
}


	//name
    $http.get("http://abenojar-kenneth.xyz/fab-u-less/food.php?name="+a)
       .then(function (response) {
       		$scope.a = response.data.names;
    });

    //ingredients
    $http.get("http://abenojar-kenneth.xyz/fab-u-less/ingredients.php?name="+a)
       .then(function (response) {
       		$scope.b = response.data.ingredients;
    });

    //how
    $http.get("http://abenojar-kenneth.xyz/fab-u-less/how.php?name="+a)
       .then(function (response) {
       		$scope.c = response.data.how;
    });
 
});


 