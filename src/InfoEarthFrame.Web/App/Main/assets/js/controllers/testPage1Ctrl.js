'use strict';
/**
 * testPage1Ctrl Controller
 */
subapp.controller('testPage1Ctrl', ['$rootScope', "$scope", "$timeout", 'SweetAlert', function ($rootScope, $scope, $timeout, SweetAlert) {
    console.log('angular', angular);

   
    $scope.gettbodyH = function () {
        var iH = angular.element(".container-fluid").height();
        angular.element(".row").height(iH - 20);
    };
    $timeout($scope.gettbodyH, 200);

    window.onresize = function () {
        $scope.gettbodyH();
    };


    var _provinceCode = ""; //省级代码
    var _cityCode = ""; //市代码
    var _countryCode = "";//县代码
    var _provinceCode1 = ""; //省级代码
    var _cityCode1 = ""; //市代码
    var _countryCode1 = "";//县代码
    $scope.dtSelected1 = {};
    $scope.dtSelected2 = {};
    $scope.dtSelected3 = {};
    $scope.dtSelected4 = {};
    $scope.dtSelected5 = {};
    $scope.dtSelected6 = {};
    $scope.countryMethod = function (data, d) {
        var data = JSON.parse(data);
        $scope.combData3 = angular.copy(data);

    };
    $scope.countryMethod1 = function (data, d) {
        var data = JSON.parse(data);
        $scope.combData6 = angular.copy(data);

    };
    $scope.cityData = function () {
    
        _cityCode = angular.copy($scope.dtSelected2.selected.F_AreaCode);
        _countryCode = "";//县代码
        $scope.dtSelected3 = {};
        $scope.combData3 = [];
        if (_cityCode)
        { http_ajax({ parentId: _cityCode }, "/Home/GetAreaInfo", $scope.countryMethod, "get"); }
    



    };
    $scope.cityData1 = function () {

        _cityCode1 = angular.copy($scope.dtSelected5.selected.F_AreaCode);
        _countryCode1 = "";//县代码
        $scope.dtSelected6 = {};
        $scope.combData6 = [];
        if (_cityCode1)
        { http_ajax({ parentId: _cityCode1 }, "/Home/GetAreaInfo", $scope.countryMethod1, "get"); }




    };

    $scope.cityMethod = function (data, d) {     
        var data = JSON.parse(data);
        $scope.combData2 = angular.copy(data);
    };
    $scope.cityMethod1 = function (data, d) {
        var data = JSON.parse(data);
        $scope.combData5 = angular.copy(data);
    };

    $scope.provinceData = function () {
        _provinceCode = angular.copy($scope.dtSelected1.selected.F_AreaCode);
         _cityCode = ""; //市代码
        _countryCode = "";//县代码
        $scope.dtSelected2 = {};
        $scope.dtSelected3 = {};
        $scope.combData2 = [];
        $scope.combData3 = [];
        if (_provinceCode)
        {
            http_ajax({ parentId: _provinceCode }, "/Home/GetAreaInfo", $scope.cityMethod, "get");
        }
    };
    $scope.provinceData1 = function () {
        _provinceCode1 = angular.copy($scope.dtSelected4.selected.F_AreaCode);
        _cityCode1 = ""; //市代码
        _countryCode1 = "";//县代码
        $scope.dtSelected5 = {};
        $scope.dtSelected6 = {};
        $scope.combData5 = [];
        $scope.combData6 = [];
        if (_provinceCode1) {
            http_ajax({ parentId: _provinceCode1 }, "/Home/GetAreaInfo", $scope.cityMethod1, "get");
        }
    };
   
 
    $scope.provinceMethod = function (abc, d) {

        var data = JSON.parse(abc);
        $scope.combData1 = angular.copy(data);
    };
    $scope.provinceMethod1 = function (abc, d) {

        var data = JSON.parse(abc);
        $scope.combData4 = angular.copy(data);
    };

    http_ajax({ parentId: "0" }, "/Home/GetAreaInfo", $scope.provinceMethod, "get");
    http_ajax({ parentId: "0" }, "/Home/GetAreaInfo", $scope.provinceMethod1, "get");


}]);
