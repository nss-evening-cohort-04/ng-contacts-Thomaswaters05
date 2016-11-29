"use strict";

app.controller("ItemEditCtrl", function($scope, $location, $routeParams, ItemFactory){
   $scope.newTask = {}; //!!calling below!!
   let itemId = $routeParams.id;

  ItemFactory.getSingleItem(itemId).then(function(itemToEdit){
    itemToEdit.id = itemId;
    $scope.newTask = itemToEdit;

  })
  $scope.addNewItem = function(){  //even though this is edit, you MUST use addnewItem()
    ItemFactory.editItem($scope.newTask).then(function(response){
      $scope.newTask = {};
      $location.url("/items/list");

    })
  }

})