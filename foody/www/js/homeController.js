angular.module('foodyApp.homeController', [])

  .controller('homeController', function($scope,homeService) {

    var api = "apps/tblRestaurant.json";
    homeService.getAppBuilds(api,function (response) {
      $scope.items= response.results;
    });
  });
