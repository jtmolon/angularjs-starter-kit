angular.module("App",['main']);

angular.module("main",['newComponent']);

angular.module("main").
  controller("mainController",function($scope){
    // Controller body
  }).
  component('appComponent', {
    templateUrl: 'app-component.template.html',
    controller: function() {
    }
  });
