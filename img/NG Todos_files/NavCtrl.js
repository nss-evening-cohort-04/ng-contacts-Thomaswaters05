"use strict";

app.controller("NavCtrl", function($scope){
  $scope.navItems = [
    {
      name:"Logout",
      url:"#/logout"
  },
    {
      name:"All Items",
      url:"#/items/list"
  },
    {
      name:"New Items",
      url:"#/items/new"
  }
  ];    // this is making an array and calling it navitems - THESE ITEMS NEED TO MATCH AS THEY DO IN HTML (NAV)
});
