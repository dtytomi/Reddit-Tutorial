'use strict';

app.controller('NavCtrl', ['$scope', 'Auth', '$location', 'Post',
  function($scope, Auth, $location, Post){

    $scope.post = {url: 'http://', title: ''};

    $scope.signedIn = Auth.signedIn;
    $scope.logout = Auth.logout;

    $scope.user = Auth.user;

    $scope.submitPost = function () {
      $scope.post.creator = $scope.user.profile.username;
      $scope.post.creatorUID = $scope.user.uid;

      console.log($scope.post.creator);
      console.log($scope.post.creatorUID)

      Post.create($scope.post).then(function (ref){
        $location.path('/posts/' + ref.name());
        $scope.post = { url: 'http://', title: ''};
      });
    };
  }
]);