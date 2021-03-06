'use strict';

/**
 * Config for the router
 */
app.config([ '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'JS_REQUIRES',
function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, jsRequires) {
    //console.log('pageId' + pageId);
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;

    // LAZY MODULES

    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: jsRequires.modules
    });

    // APPLICATION ROUTES
    // For any unmatched url, redirect to /app/dashboard
    $urlRouterProvider.otherwise("/app/breakpointUpload");
    //
    // Set up the states
    $stateProvider.state('app', {
        url: "/app",
        templateUrl: "/App/Main/assets/views/app.html",
        resolve: loadSequence('modernizr', 'moment', 'angularMoment', 'uiSwitch', 'perfect-scrollbar-plugin', 'toaster', 'ngAside', 'vAccordion', 'sweet-alert', 'oitozero.ngSweetAlert', 'jquery-mobile'),
        abstract: true
    })
        .state('app.SysManage', {
            url: "/SysManage",
            template: '<div ui-view class="fade-in-up"></div>',
            title: 'Home'
        }).state('app.SysManage.SystemModule', {
            url: '/SystemModule',
            template: '<iframe src="/App/Main/subPage.html#/SystemModule" frameborder="0" id="iframeId" style="width:100%"></iframe>',
            //template: function ($stateParams) {
            //    var tempalteTag = '<iframe src="/App/Main/subPage.html#/menuManage" frameborder="0" id="iframeId" style="width:100%"></iframe>';
            //    return tempalteTag;
            //},
            title: '',
        })
        .state('app.test', {
            url: "/test",
            //templateUrl: '/App/Main/assets/views/testPage1.html',
            template: '<iframe src="/App/Main/subPage.html#/testPage1" frameborder="0" id="iframeId" style="width:100%"></iframe>',
            //resolve: loadSequence('testPage1Ctrl','ui.select', 'propsFilter'),
            title: 'test'
        }).state('app.breakpointUpload', {
            url: '/breakpointUpload',
            template: '<iframe src="/App/Main/subPage.html#/breakpointUpload" frameborder="0" id="iframeId" style="width:100%"></iframe>',
            title: '上传文件'
        }).state('app.demo_map', {
            url: '/demo/map',
            template: '<iframe src="/App/Main/subPage.html#/demo/map" frameborder="0" id="iframeId" style="width:100%"></iframe>',
            title: '地图样例'
        });
    // Login routes
    //console.log($rootScope.pageId);
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
    };

}]);