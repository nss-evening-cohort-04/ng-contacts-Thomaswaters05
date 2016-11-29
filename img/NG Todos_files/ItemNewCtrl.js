"use strict";

app.controller("ItemNewCtrl", function($scope, $rootScope, $location, ItemFactory){
  $scope.newTask = {}; // this is making a "new task" and assigning it an empty object




  $scope.addNewItem = function(){
    $scope.newTask.isCompleted = false; //you must define new task above (basically as a variable/empty obj) and set to false
    $scope.newTask.uid = $rootScope.user.uid;
    ItemFactory.postNewItem($scope.newTask).then(function(itemId){
      $location.url("/items/list")
      $scope.newTask = {};
    })
  }


})