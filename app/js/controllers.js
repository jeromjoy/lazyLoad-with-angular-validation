'use strict';

/* Controllers */

var appController = angular.module('AppController', ['ngAnimate', 'ui.bootstrap']);

appController.controller('MenuCtrl', function($scope) {
  
  
});

appController.controller('PaginationDemoCtrl', function ($scope, $log) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;
  $scope.itemsperpage = 20;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});

appController.controller('InboxCtrl', function($scope) {
	
  
});

appController.controller('ContactsCtrl',function($scope){

});
