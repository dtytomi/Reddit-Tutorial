'use strict';

app.controller('PostsCtrl', ['$scope', '$location', 'Post', 'Auth', 
    function($scope, $location, Post, Auth){

        $scope.posts = Post.all;
        $scope.user = Auth.user;
        // $scope.post = {url: 'http://', title: ''};

        // $scope.submitPost = function () {
        //   Post.create($scope.post).then(function(){
        //     console.log($scope.post);
        //     $location.path('/posts' + ref.name());
        //     $scope.post = {url: 'http://', title: ''};
        //   });
        // };

        $scope.deletePost = function(post){
         
          Post.delete(post);
        };

    }
]);