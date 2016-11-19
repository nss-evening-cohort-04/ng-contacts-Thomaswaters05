"use strict";

app.controller("ContactCtrl", function($scope, ItemFactory){
  $scope.newContact = {}; // this is making a "new task" and assigning it an empty object

  $scope.contacts = [];    //we put this info (data for people/to do contacts/etc) in FB database

  let getContacts = function(){
    ItemFactory.getContactList().then(function(contacts){
      $scope.contacts = contacts;
    });
  };
  getContacts();
});

