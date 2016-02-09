angular.module('foodyApp.homeController', [])

  .controller('homeController', function($scope,homeService,$location) {

    var api = "apps/tblRestaurant.json";
    homeService.getAppBuilds(api,function (response) {
      $scope.items= response.results;
    });

    $scope.$on('$ionicView.enter', function(e) {
      var x = document.URL;
      x=x.slice(-1);
      $scope.restaurantId=x;

    });

  });

