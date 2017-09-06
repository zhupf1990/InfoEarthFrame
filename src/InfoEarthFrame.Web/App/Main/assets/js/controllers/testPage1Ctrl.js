'use strict';
/**
 * testPage1Ctrl Controller
 */
subapp.controller('testPage1Ctrl', ['$rootScope', "$scope", "$timeout", 'SweetAlert', function ($rootScope, $scope, $timeout, SweetAlert) {
    console.log('angular', angular)
   
      $scope.demo4 = function () {
          //SweetAlert.swal({
          //    title: "成功!",
          //    text: "你点击了这个按钮PDF!",
          //    type: "success",
          //    confirmButtonColor: "#007AFF"
          //});
         
          $timeout(function () {
              exportPDF(angular.element("#pdfTest"), angular.element("#pdfTest").height(), false, true);
          });
      }

      $scope.demo5 = function () {
          window.location.href = "/Home/ExcelTest";
      }

      $scope.demo1 = function () {
          SweetAlert.swal({
              title: "成功!",
              text: "你点击了这个按钮!",
              type: "success",
              confirmButtonColor: "#007AFF"
          });
      }
      $scope.demo2 = function () {
          SweetAlert.swal({
              title: "确定?",
              text: "你将不能怎么样!",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "确定",
              cancelButtonText: "取消"
          }, function (isConfirm) {
              if (isConfirm) {
                  console.log("你执行了该操作！");
              } else {
                  console.log("你取消了该操作！");
              }
          });
      }
      $scope.demo3 = function () {
          SweetAlert.swal({
              title: "确定?",
              text: "你将怎么样!",
              type: "success",
              showCancelButton: true,
              confirmButtonColor: "#007AFF",
              confirmButtonText: "确定",
              cancelButtonText: "取消"
          }, function (isConfirm) {
              if (isConfirm) {
                  console.log("你执行了该操作！");
              } else {
                  console.log("你取消了该操作！");
              }
          });
      }

  }]);
