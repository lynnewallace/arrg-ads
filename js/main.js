var app = angular.module('ngAdCarousel', []);
app.controller('adCtrl', function ($scope) {
  $scope.images = ['DoubleHeader.jpg', 'FM.jpg', 'SOAK5.jpg'];
});

$('.carousel').carousel({
  interval: 10000
})