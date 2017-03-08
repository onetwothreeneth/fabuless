var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $scope.names = data1; 
    $http.get("http://abenojar-kenneth.xyz/fab-u-less/names.php")
        .then(function (response) {$scope.names2 = response.data.mycart;});
});


data1 = [{"id":"1","name":"Beef Kaldereta","image":"Beef Kaldereta.jpg","category":"Beef","calories":"150g per serving"},
    {"id":"2","name":"Ice Candy","image":"Ice Candy.jpg","category":"Dessert","calories":"2,725 per piece"},
    {"id":"3","name":"Buko Salad","image":"Buko Salad.jpg","category":"Dessert","calories":"178 per serving"},
    {"id":"4","name":"Chicken Adobo","image":"chicken adobo.jpg","category":"Chicken","calories":"107 calories in 1 chicken"},
    {"id":"5","name":"Chicken Afritada","image":"Chicken Afritada.jpg","category":"Chicken","calories":"323 calories"},
    {"id":"6","name":"Chopsuey","image":"Chopsuey.jpg","category":"Veggies","calories":"100 per serving"},
    {"id":"7","name":"Kinilaw Tuna","image":"Kinilaw Tuna.jpg","category":"Fish","calories":"147 per serving"},
    {"id":"8","name":"Lumpiang Shanghai","image":"Lumpiang Shanghai.jpg","category":"Pork","calories":"140 per serving"},
    {"id":"9","name":"Nilupak","image":"Nilupak.jpg","category":"Dessert","calories":"101 per serving"},
    {"id":"10","name":"Pancit Palabok","image":"Pancit Palabok.jpg","category":"Dessert","calories":"280 per serving"},
    {"id":"11","name":"Pork Adobo","image":"Pork Adobo.jpg","category":"Pork","calories":"231 per serving"},
    {"id":"12","name":"Pork Asado","image":"Pork Asado.jpg","category":"Pork","calories":"231 per serving"},
    {"id":"13","name":"Pork Sinigang","image":"Pork Sinigang.jpg","category":"Pork","calories":"229 per cup"},
    {"id":"14","name":"Puto","image":"Puto.jpg","category":"Dessert","calories":"4161 serving"},
    {"id":"15","name":"Sapin Sapin","image":"Sapin Sapin.jpg","category":"Dessert","calories":"140 per serving"},
    {"id":"16","name":"Ube Halaya","image":"Ube Halaya.jpg","category":"Dessert","calories":"280 per serving"},
    {"id":"17","name":"Pancit Bihon","image":"pancit.png","category":"Pancit","calories":"1g per serving"},
    {"id":"18","name":"Dinuguan","image":"dinuguan.png","category":"Pork","calories":"417 per serving"},
    {"id":"19","name":"Bistek Tagalog","image":"bistek.png","category":"Beef","calories":"200 per serving"},
    {"id":"20","name":"Pork Menudo","image":"menudo.png","category":"Pork","calories":"265 per serving"},
    {"id":"21","name":"Pork Sisig","image":"sisig.png","category":"Pork","calories":"2,154 per serving"},
    {"id":"22","name":"Kare Kare","image":"kare kare.png","category":"Beef","calories":"100 per serving"},
    {"id":"23","name":"Pinakbet","image":"pinakbet.png","category":"Veggies","calories":"184 per serving"},
    {"id":"24","name":"Laing","image":"laing.png","category":"Veggies","calories":"1,027 per serving"},
    {"id":"25","name":"Kangkong","image":"kang kong.png","category":"Veggies","calories":"17 per serving"},
    {"id":"26","name":"Ginisang Sitaw","image":"sitaw.png","category":"Veggies","calories":"369 per serving"},
    {"id":"28","name":"Sweet Tilapia","image":"tilapia.png","category":"Fish","calories":"540 per serving"},
    {"id":"29","name":"Ginisang Gulay","image":"ginisang gulay.png","category":"Veggies","calories":"2,195 per serving"},
    {"id":"30","name":"Tortang Talong","image":"torta.jpg","category":"Veggies","calories":"100 per serving"},
    {"id":"31","name":"Ginisang Kalabasa","image":"gisida.png","category":"Veggies","calories":"1,484 per serving"},
    {"id":"32","name":"Ginataang Langka","image":"langka.png","category":"Veggies","calories":"1,300 per serving"},
    {"id":"33","name":"Lumpiang Gulay","image":"lumpiang gulay.png","category":"Veggies","calories":"1 per serving"}];