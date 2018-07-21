var myApp = angular.module("myApp", []);

myApp.controller("myController", ["$scope", function($scope){
    $scope.name = "张三";
}]);

myApp.directive("hello", function(){
    return {
        restrict : "EA",
        templateUrl : "test15-template.html",
        replace : false,
        scope : true,
        compile : function(tElement, tAttrs, transcludeFn) {
            // 根据打印日志可以看出：先执行compile，然后执行preLinking，最后执行postLinking
            console.log("compile");

            // 根据DOM属性值做判断
            if (tAttrs.hasname === "true") {
                // DOM操作：给模板中新添加一个div
                var $nameElement = $("<div>I am {{name}}</div>");
                $(".transclude-content", tElement).append($nameElement);
            }

            // 返回两个link函数
            return {
                pre : function(scope, iElement) {
                    console.log("preLinking");
                },
                post : function(scope, iElement, attr, controller) {
                    console.log("postLinking");
                    scope.greeting = {
                        text : "hello angularjs"
                    };

                    // 从显示结果看：这个属性在新增加的div中生效了
                    scope.name = "李四";
                }
            };
        },
        link : function(scope, element, attr) {
            console.log("link"); // 由于定义了compile，这个link被忽略不会执行了
        }
    };
});
