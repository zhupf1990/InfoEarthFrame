'use strict';

/**
 * Config for the router
 */
subapp.config(['$stateProvider', '$urlRouterProvider',  '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'JS_REQUIRES',
    function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, jsRequires) {

        subapp.controller = $controllerProvider.register;
        subapp.directive = $compileProvider.directive;
        subapp.filter = $filterProvider.register;
        subapp.factory = $provide.factory;
        subapp.service = $provide.service;
        subapp.constant = $provide.constant;
        subapp.value = $provide.value;

    //默认路由，与下面定义的路由匹配
        $urlRouterProvider.otherwise('/menuManage');
    //路由定义规则
    $stateProvider
            .state('menuManage', {
                url: '/menuManage',
                templateUrl: './assets/views/menuManage/menuManage.html',
                resolve: loadSequence('menuManage', 'angularBootstrapNavTree', 'ui.select')
            })
            .state('test2', {
                url: '/test2',
                templateUrl: './assets/views/testPage2.html',
                resolve: loadSequence("testPage2Ctrl")


            })
    // Login routes

    // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
    function loadSequence() {
        var _args = arguments;
        return {
            deps: ['$ocLazyLoad', '$q',
    		function ($ocLL, $q) {
    		    var promise = $q.when(1);
    		    for (var i = 0, len = _args.length; i < len; i++) {
    		        promise = promiseThen(_args[i]);
    		    }
    		    return promise;

    		    function promiseThen(_arg) {
    		        if (typeof _arg == 'function')
    		            return promise.then(_arg);
    		        else
    		            return promise.then(function () {
    		                var nowLoad = requiredData(_arg);
    		                if (!nowLoad)
    		                    return $.error('Route resolve: Bad resource name [' + _arg + ']');
    		                return $ocLL.load(nowLoad);
    		            });
    		    }

    		    function requiredData(name) {
    		        if (jsRequires.modules)
    		            for (var m in jsRequires.modules)
    		                if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
    		                    return jsRequires.modules[m];
    		        return jsRequires.scripts && jsRequires.scripts[name];
    		    }
    		}]
        };
    }
}]);