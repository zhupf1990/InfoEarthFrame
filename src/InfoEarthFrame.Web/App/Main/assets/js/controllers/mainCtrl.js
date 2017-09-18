'use strict';
/**
 * Clip-Two Main Controller
 */
app.controller('AppCtrl', ['$rootScope', '$scope', '$state', '$translate', '$localStorage', '$window', '$document', '$timeout', '$interval', 'cfpLoadingBar', '$location',
function ($rootScope, $scope, $state, $translate, $localStorage, $window, $document, $timeout, $interval, cfpLoadingBar, $location) {
    // Loading bar transition
    // -----------------------------------
    var $win = $($window);

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        //start loading bar on stateChangeStart
        cfpLoadingBar.start();

    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

        //stop loading bar on stateChangeSuccess
        event.targetScope.$watch("$viewContentLoaded", function () {

            cfpLoadingBar.complete();
        });

        // scroll top the page on change state

        $document.scrollTo(0, 0);

        if (angular.element('.email-reader').length) {
            angular.element('.email-reader').animate({
                scrollTop: 0
            }, 0);
        }

        // Save the route title
        $rootScope.currTitle = $state.current.title;
    });

    // State not found
    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        //$rootScope.loading = false;
        //console.log(unfoundState.to);
        // "lazy.state"
        //console.log(unfoundState.toParams);
        // {a:1, b:2}
        //console.log(unfoundState.options);
        // {inherit:false} + default options
    });

    $rootScope.pageTitle = function () {
        return $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
    };

    // save settings to local storage
    if (angular.isDefined($localStorage.layout)) {
        $scope.app.layout = $localStorage.layout;

    } else {
        $localStorage.layout = $scope.app.layout;
    }
    $scope.$watch('app.layout', function () {
        // save to local storage
        $localStorage.layout = $scope.app.layout;
    }, true);

    //global function to scroll page up
    $scope.toTheTop = function () {

        $document.scrollTopAnimated(0, 600);

    };

    // angular translate
    // ----------------------

    $scope.language = {
        // Handles language dropdown
        listIsOpen: false,
        // list of available languages
        available: {
            'en': 'English',
            'it_IT': 'Italiano',
            'de_DE': 'Deutsch',
            'cn':'Chinese'
        },
        // display always the current ui language
        init: function () {
            var proposedLanguage = $translate.proposedLanguage() || $translate.use();
            var preferredLanguage = $translate.preferredLanguage();
            // we know we have set a preferred one in app.config
            $scope.language.selected = $scope.language.available[(proposedLanguage || preferredLanguage)];
        },
        set: function (localeId, ev) {
            $translate.use(localeId);
            $scope.language.selected = $scope.language.available[localeId];
            $scope.language.listIsOpen = !$scope.language.listIsOpen;
        }
    };

    $scope.language.init();

    // Function that find the exact height and width of the viewport in a cross-browser way
    var viewport = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    };
    // function that adds information in a scope of the height and width of the page
    $scope.getWindowDimensions = function () {
        return {
            'h': viewport().height,
            'w': viewport().width
        };
    };
    // Detect when window is resized and set some variables
    $scope.$watch($scope.getWindowDimensions, function (newValue, oldValue) {
        $scope.windowHeight = newValue.h;
        $scope.windowWidth = newValue.w;

        //屏幕分辨率大于1024时，菜单默认展开，小于1024时，菜单默认收缩
        if (newValue.w > 1024) {
            $rootScope.app.layout.isSidebarClosed = false;
        } else {
            $rootScope.app.layout.isSidebarClosed = true;
        }

        if (newValue.w >= 992) {
            $scope.isLargeDevice = true;
        } else {
            $scope.isLargeDevice = false;
        }
        if (newValue.w < 992) {
            $scope.isSmallDevice = true;
        } else {
            $scope.isSmallDevice = false;
        }
        if (newValue.w <= 768) {
            $scope.isMobileDevice = true;
        } else {
            $scope.isMobileDevice = false;
        }
    }, true);
    // Apply on resize
    $win.on('resize', function () {
        $scope.$apply();
    });
    /*************************************导航联动效果-start************************************************/
    $rootScope.navUrl1 = '#/app/homePage';//导航一的跳转地址
    //$rootScope.navUrl2 = '#/appPages/typicalMainPage';//导航二的跳转地址
    $rootScope.tplUrl = 'App/Main/assets/views/partials/nav.html';//默认菜单模板//导航一

    //解决刷新问题
    //if ($location.$$path.indexOf('appPages') > -1) {
    //    $rootScope.tplUrl = 'App/Main/assets/views/partials/nav1.html';//导航二
    //}

    //$rootScope.navChange = function (a) {
    //    if (a) {
    //        $rootScope.tplUrl = 'App/Main/assets/views/partials/nav.html';
    //        window.location.href = $rootScope.navUrl1;
    //    } else {
    //        $rootScope.tplUrl = 'App/Main/assets/views/partials/nav1.html';
    //        window.location.href = $rootScope.navUrl2;
    //        console.log(window.location.href);
    //    }
    //};
    /************************************导航联动效果-end*************************************************/
    //查询子级菜单
    function jsonWhere(data, action) {
        if (action == null) return;
        var reval = new Array();
        $(data).each(function (i, v) {
            if (action(v)) {
                reval.push(v);
            }
        })
        return reval;
    }
    //处理结果数据
    function datas(data, b) {
        $.each(data.authorizeMenu, function (i, row) {
            var obj = {};
            //var row = data.authorizeMenu[i];
            if (row.F_ParentId == "0") {
                obj.id = row.Id;
                obj.uiSref = row.F_UrlAddress;
                obj.title = row.F_FullName;
                obj.icon = row.F_Icon;
                var childNodes = jsonWhere(data.authorizeMenu, function (v) { return v.F_ParentId == row.Id });
                obj.children = [];
                if (childNodes.length > 0) {
                    getSubMenu(data,childNodes, obj)
                }
                $scope.menus.push(obj);
            }
        });
    };
    //循环子级菜单
    function getSubMenu(allData, data, obj) {
        if (data.length > 0) {
            obj.children = [];
            $.each(data, function (i, item) {
                var subObj = {};
                subObj.uiSref = item.F_UrlAddress;
                subObj.title = item.F_FullName;
                subObj.icon = item.F_Icon;
                subObj.id = item.Id;
                subObj.children = [];
                var childNodes = jsonWhere(allData.authorizeMenu, function (v) { return v.F_ParentId == item.Id });
                if (childNodes.length > 0) {
                    getSubMenu(allData, childNodes, subObj)
                }
                obj.children.push(subObj);
            })
        }

    };
    function getMenuFn() {
        $scope.menus = [];
        http_ajax('', "/ClientData/GetClientDataJson", datas, 'POST', "json");
    };
    getMenuFn();

    //设置内容高度
    $scope.getIframeH = function () {
        var iH = angular.element("body").height();
        //var iTop = document.getElementsByTagName("header")[0].clientHeight;
        var iTop = angular.element("header").height();
        var iBottom = angular.element("footer").height();
        angular.element("#iframeId").height(iH - iTop - iBottom - 2);
    };
    $timeout($scope.getIframeH, 2000);

    window.onresize = function () {
        $scope.getIframeH();
    };
    localStorage.navDataState = "已使用";
    $scope.getNewNav=function () {
        var localHref = location.href;
        var timer;
        if (localHref.indexOf('SysManage/SystemModule') > -1) {
            timer = $interval(function () {
                if (localStorage.navDataState == "已更新") {
                    getMenuFn();
                    localStorage.navDataState = "已使用";
                }
            }, 100);
        } else {
            if (timer) {
                $interval.cancel(timer);
            }
        }
    }
    $scope.getNewNav();

    //退出登录
    $scope.logout = function () {
        var logInfo=confirm ("注：您确定要安全退出本次登录吗？");
        if (logInfo) {
            http_ajax('', "/Home/Logout", logoutFn, 'get', "");
        }
    };

    function logoutFn(a,b) {
        window.location.href = JSON.parse(a).ssoUrl;
    };

}]);
