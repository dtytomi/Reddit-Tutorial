'use strict';

app.controller('AuthCtrl', ['$scope', '$location', 'Auth', 'user',
  function($scope, $location, Auth, user){
    if (Auth.signedIn()) {
      $location.path('/');
    }

    $scope.login = function() {
      Auth.login($scope.user).then(function () {
        $location.path('/');
      }, function (error) {
          $scope.error = error.toString();
      })
    };

    $scope.register = function () {
      Auth.register($scope.user).then(function(user){
        return Auth.login($scope.user).then(function() {
          user.username = $scope.user.username;
          return Auth.createProfile(user);   
        }).then(function() {
            $location.path('/');
          });
      }, function(error) {
          $scope.error = error.toString();
        });
    };
  }
]);