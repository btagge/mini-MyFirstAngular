var app = angular.module('friendsList', []);
app.controller('mainCtrl', function($scope) {
    $scope.friends = ["Shelby", "Spencer", "Anthony", "Etc..."];
    $scope.addFriend = function(name) {
        $scope.friends.push(name);
    };
    
});