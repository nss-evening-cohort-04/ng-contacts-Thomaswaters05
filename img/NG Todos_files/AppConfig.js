"use strict";
//THIS IS WHERE YOU PUT YOUR ROUTES AS WELL!!

let isAuth = (AuthFactory) => new Promise((resolve, reject)=>{
  if (AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
})

// ****!!THIS IS WHERE WE WILL CALL FIREBASE!!****
app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){ // this is where you are USING firebase DB
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('routeChangeStart', function(event, currRoute, prevRout){ //when the route of the URL changes, it will start this function - that is what routeChangeStart is

    let logged = AuthFactory.isAuthenticated();

    let appTo = currRoute.originalPath.indexOf('/auth');

    // console.log("appTo", appTo);

  })


});


app.config(function($routeProvider){
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html', //see partials folder- auth- this logs in user
      controller: 'AuthCtrl' // see new controller file
    })
    .when('/items/list', {
      templateUrl: 'partials/item-list.html', //see partials folder
      controller: 'ItemListCtrl', // see new controller file
      resolve: {isAuth}
    })
    .when('/items/new', {
      templateUrl: 'partials/item-new.html',//see partials folder
      controller: 'ItemNewCtrl',// see new controller file
      resolve: {isAuth}
    })
    .when('/items/view/:id',{ //you can call the :id whatever you want, you can call it :crap, but :id makes sense (its a placeholder)
      templateUrl: 'partials/item-view.html',
      controller: 'ItemViewCtrl',
      resolve: {isAuth}
    })
    .when('/items/edit/:id', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemEditCtrl',
      resolve: {isAuth}
    })
    .when('/logout',{
      templateUrl: 'partials/auth.html', //see partials folder- auth- this logs in user
      controller: 'AuthCtrl', // see new controller file
      resolve: {isAuth}
    })
    .otherwise('/auth')

})