"use strict";

// ******WORKING******
app.controller("ContactCtrl", function($scope, ItemFactory){
  $scope.newContact = {}; // this is making a "new task" and assigning it an empty object

  $scope.contacts = [];    //we put this info (data for people/to do contacts/etc) in FB database

  let getContacts = function(){
    ItemFactory.getContactList().then(function(contacts){
      $scope.contacts = contacts;
    });
  };
  getContacts();
// ******WORKING******


 ItemFactory.getContactList().then(function(fbItems){
    $scope.contacts = fbItems;
    console.log("items from controller", fbItems);
  })



 $scope.addNewItem = function(){
    $scope.newContact.firstName
    $scope.newContact.lastName
    $scope.newContact.mobile
    $scope.newContact.email   //you must define new task above (basically as a variable/empty obj) and set to false
    $scope.newContact.id = $scope.contacts.length; //this will add "3 , 4, 5, 6 , etc to the above array's ID"
    console.log("newTask in function", $scope.newContact);
    // $scope.items.push($scope.newTask); //pushes the user input to the new array (not needed anymore due to FB GETTING the info and placing it in the database)
    ItemFactory.postNewContact($scope.newContact).then(function(itemId){
      getContacts();
      $scope.newContact = {};
    })

  };


});
