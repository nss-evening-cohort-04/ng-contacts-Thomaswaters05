"use strict";

app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){

  var getContactList = function(){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)  //contacts.json corresponds to the FB DATABASE ITSELF
      .success(function(response){
        let contacts = [];
        Object.keys(response).forEach(function(key){
          response[key].id = key;
          contacts.push(response[key]);
        });
        resolve(contacts);
      })
      .error(function(errorResponse){
        reject(errorResponse);
      });
    });
  };

var postNewContact = function(contact){ //this will put the info in to the FB database
  return $q((resolve,reject)=>{
    $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
      JSON.stringify({
        firstName: contact.firstName,
        lastName: contact.lastName,
        mobile: contact.mobile,
        email: contact.email
      })
      )
      .success(function(postResponse){
        resolve(postResponse);
      })
      .error(function(postError){
         reject(postError);
      });
  });
};

  return{getContactList:getContactList, postNewContact:postNewContact};
});