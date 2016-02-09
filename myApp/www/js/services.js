angular.module('starter.services', []).factory('foody', function($resource) {
  return $resource('http://localhost:28017/foody/res/', { id: '@_id' }, {//mongodb://harsh3006:harsh4321@ds051635.mongolab.com:51635/foody
    update: {
      method: 'PUT'
    }
  });
});
