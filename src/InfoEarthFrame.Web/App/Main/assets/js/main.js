var app = angular.module('InfoearthApp', ['clip-two']);
app.run(['$rootScope', '$state', '$stateParams', '$cacheFactory', '$modal',
function ($rootScope, $state, $stateParams, $cacheFactory, $modal) {
    // Attach Fastclick for eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers
    //FastClick.attach(document.body);

    // Set some reference to access them from any scope
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    //注销
    $rootScope.logOut = function () {
        abp.message.confirm('退出系统', '是否确认注销系统', function (a) {
            if (a) {
                window.location.href = "/Home/Logout";
            }
        });
    };

    // GLOBAL APP SCOPE
    // set below basic information
    $rootScope.app = {
        name: '产品开发平台SDK', // name of your project
        author: '地大信息', // author's name or company name
        description: 'Infoeath Admin Template', // brief description
        version: '1.0.0', // current version
        year: ((new Date()).getFullYear()), // automatic current year (for copyright information)
        isMobile: (function () {// true if the browser is a mobile device
            var check = false;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                check = true;
            };
            return check;
        })(),
        layout: {
            isNavbarFixed: true, //true if you want to initialize the template with fixed header
            isSidebarFixed: true, // true if you want to initialize the template with fixed sidebar
            isSidebarClosed: false, // true if you want to initialize the template with closed sidebar
            isFooterFixed: false, // true if you want to initialize the template with fixed footer
            theme: 'theme-3', // indicate the theme chosen for your project
            logo: 'App/Main/assets/images/logo.png' // relative path of the project logo
        }
    };
    $rootScope.user = {
        name: '管理员',
        job: 'ng-Dev',
        picture: 'app/img/user/02.jpg'
    };

}]);
// translate config 
app.config(['$translateProvider',
function ($translateProvider) {

    // prefix and suffix information  is required to specify a pattern
    // You can simply use the static-files loader with this pattern:
    $translateProvider.useStaticFilesLoader({
        prefix: 'App/Main/assets/i18n/',
        suffix: '.json'
    });

    // Since you've now registered more then one translation table, angular-translate has to know which one to use.
    // This is where preferredLanguage(langKey) comes in.
    $translateProvider.preferredLanguage('cn');

    // Store the language in the local storage
    $translateProvider.useLocalStorage();

}]);

// Angular-Loading-Bar
// configuration
app.config(['cfpLoadingBarProvider',
function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = true;

}]);

function http_ajax(params, url, backfun, type, dataType) {
    //var token = document.getElementById("token").value;
    if (!type) {
        type="GET"
    }
    var settings = {
        data: params,
        type: type,
        url: url,
        dataType: dataType,
        error: function (XHR, textStatus, errorThrown) {
            console.log(XHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log("获取数据失败！");
        },
        success: function (data, textStatus) {
            backfun(data, textStatus);

        },
        headers: {
            //"Authorization": "Bearer " + token

        }
    };
    $.ajax(settings);
}