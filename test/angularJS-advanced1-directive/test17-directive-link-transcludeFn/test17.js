var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope", function($scope){
    $scope.name = "张三";
}]);

myApp.directive("hello", function(){
    return {
        restrict : "E",
        templateUrl : "test17-template.html",
        replace : true,
        transclude : true,
        scope : {},
        link : function(scope, iElement, attr, controller, transcludeFn) {
            scope.name = "李四";

            // 使用transcludeFn参数方法一：
            // 直接执行transcludeFn方法，返回结果就是指令所在元素内部DOM。
            // 这些内部DOM对应的作用域仍然是指令的父作用域，从最后name变量值可以看出来。
            var $name = transcludeFn();
            iElement.append($name);

            // 使用transcludeFn参数方法二：
            // 1）执行transcludeFn方法，配置两个参数；
            // 2）$clone就是指令所在元素内部DOM；
            // 3）第一个参数scope指定了clone的作用域，
            // 4) 第二个参数是一个回调函数，这个回调函数中可对$clone进行一些DOM操作，例如：移动DOM位置
            // 这些内部DOM对应的作用域仍然是指令的父作用域，从最后name变量值可以看出来。
//            transcludeFn(scope, function($clone){
//                iElement.append($clone);
//            });
        }
    };
});
