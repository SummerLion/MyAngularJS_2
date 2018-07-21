var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope", function($scope){
    $scope.items = [
        {id : 1, label : "中国"},
        {id : 2, label : "日本"},
        {id : 3, label : "美国"},
        {id : 4, label : "英国"}
    ];
}]);

myApp.directive("tiMenu", function(){
    return {
        restrict : "E",
        templateUrl : "test16-template.html",
        replace : true,
        transclude : true,
        scope : {
            items : "="
        },
        link : {
            post : function(scope, iElement, attr, controller) {
                scope.show = false;
                scope.clickFn = function() {
                    scope.show = !scope.show;
                };
                scope.clickLiFn = function(item) {
                    scope.show = false;
                };
            }
        }
    };
});
