'use strict';
/** 
  * controller for angular-aside
  * Off canvas side menu to use with ui-bootstrap. Extends ui-bootstrap's $modal provider.
*/
app.controller('demo_map', ['$rootScope', "$scope", "$timeout", 'dateFilter', 'SweetAlert', '$element', 'selfadapt',
    function ($rootScope, $scope, $timeout, dateFilter, SweetAlert, $element, selfadapt) {

        $rootScope.navUrl2 = '#/appPages/treeQuery';//导航条切换赋值

        //调用实时随窗口高度的变化而改变页面内容高度的服务
        var unlink = selfadapt.anyChange($element);
        $scope.$on('$destroy', function () {
            unlink();
            selfadapt.showBodyScroll();
        });
        /*-------------地图------------------*/
        //定义一个globalobj对象，用来向子directive传递$element对象
        $scope.globalobj = $element;
        $scope.foldElement = $element;
        $scope.mapheight = 550;

        /*--------------树形控件------------------*/
        //树形控件数据对象
        $scope.treedata1 = [
        {
            label: "Animal", age: "21", children: [
                 { label: "Dog", age: "42", children: [] },
                 { label: "Cat", age: "42", children: [] },
                 { label: "Hippopotamus", age: "42", children: [] },
                 {
                     label: "Chicken", age: "29", children: [
                     {
                         label: "Jenifer", age: "23", children: [
                             { label: "Dani", age: "32", children: [] },
                             { label: "Max", age: "34", children: [] }
                         ]
                     }
                     ]
                 }
            ]
        },
        {
            label: "Vegetable", age: "21", children: [

                 { label: "Oranges", age: "42", children: [] },
                 { label: "Apples", age: "42", children: [] },
                 {
                     label: "Chicken", age: "29", children: [
                     {
                         label: "Jenifer", age: "23", children: [
                             { label: "Dani", age: "32", children: [] },
                             { label: "Max", age: "34", children: [] }
                         ]
                     }
                     ]
                 }
            ]
        },
        {
            label: "Vegetable", age: "21", children: [

                 { label: "Oranges", age: "42", children: [] },
                 { label: "Apples", age: "42", children: [] },
                 {
                     label: "Chicken", age: "29", children: [
                     {
                         label: "Jenifer", age: "23", children: [
                             { label: "Dani", age: "32", children: [] },
                             { label: "Max", age: "34", children: [] }
                         ]
                     }
                     ]
                 }
            ]
        }
        ];
        $scope.selectedData = "";//当前节点,点击树时自动赋值；
        //选中回调函数
        $scope.onSelected = function (node, getParentNodeBackFun) {
            //console.log("当前节点", node);
            var pnode = getParentNodeBackFun(node);
            // console.log("当前节点的父节点", pnode);
        };

        /*-------------树的折叠按钮的实现------------------*/
        var treeFlag = false;

        $scope.treeQueryCtrl = {};

        $scope.close = function () {
            if (treeFlag) {
                $scope.treeQueryCtrl.expand_all();
                treeFlag = false;
            }
            else {
                $scope.treeQueryCtrl.collapse_all();
                treeFlag = true;

            }

        }


        /*-------------地图控件------------------*/
        var url = "http://dzmap.infoearth.com:8081/Itelluro.Server/Service/DOM/dom.ashx";
        $scope.dataset = {
            baseMap: {
                map: { zoomlevel: 14, dataserverkey: "全国天地图地图", url: url, tilesize: 512, zerolevelsize: 36 },
                note: { zoomlevel: 14, dataserverkey: "全国天地图地图注记", url: url, tilesize: 512, zerolevelsize: 36 }
            },
            statelliteMap: {
                map: { zoomlevel: 14, dataserverkey: "全国天地图影像", url: url, tilesize: 512, zerolevelsize: 36 },
                note: { zoomlevel: 14, dataserverkey: "全国天地图影像注记", url: url, tilesize: 512, zerolevelsize: 36 }
            }
        };


        /*-------------查询控件------------------*/

        //网格数据
        $scope.myDatass = [
            { name: "aph.com", sex: "$45", age: "3330", a: "February13", x: true, y: false, z: false },
            { name: "Smith.com", sex: "$47", age: "3330", a: "January12", x: true, y: false, z: false },
            { name: "xyxyxy.com", sex: "$35", age: "3330", a: "February13", x: true, y: false, z: false },
            { name: "Albert.com", sex: "$65", age: "3330", a: "February13", x: true, y: false, z: false },
            { name: "Ron.com", sex: "$44", age: "3330", a: "February13", x: true, y: false, z: false },
            { name: "Joe.com", sex: "$45", age: "3330", a: "January12", x: true, y: false, z: false },
            { name: "Smith.com", sex: "$45", age: "3330", a: "January12", x: true, y: false, z: false },
            { name: "xyxyxy.com", sex: "$44", age: "3330", a: "January12", x: true, y: false, z: false },
            { name: "Albert.com", sex: "$42", age: "3330", a: "January12", x: true, y: false, z: false },
            { name: "Ron.com", sex: "$43", age: "3330", a: "January12", x: true, y: false, z: false }
        ];
        //成员的click事件回调
        $scope.myDataClickBak = function (row, key) {
            console.log(row, key);
            console.log("选中的数据:  ", $scope.chedckedData);
        };


        //设置操作按钮的参数和回调
        $scope.tabBtnParams = [
         {
             name: "修改按钮", click: function (row, name, event) {

                 //弹出框确定是否真的要删除
                 SweetAlert.swal({
                     title: "确定？",
                     text: "你确定要修改该行!",
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
         }, {
             name: "删除按钮", click: function (row, name, event) {

                 //弹出框确定是否真的要删除
                 SweetAlert.swal({
                     title: "确定？",
                     text: "你确定要删除该行!",
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
         }];
        //被复选框选中的数据
        $scope.chedckedData = [];
        $scope.$watch('chedckedData', function(newValue, oldValue) {
            console.log('oldValue', oldValue);
            console.log('newValue', newValue);

        }, true);


        //设置分页
        $scope.pageing = { pageIndex: 1, pageSize: 10, pageCounts: 100 };
        //分页点击事件回调函数
        $scope.pageChanged = function () {
            console.log($scope.pageing);
            $scope.myDatass = [
                { name: "Joe" + $scope.pageing.pageIndex, sex: "男", age: "21", x: true, y: false, z: false },
                { name: "Smith" + $scope.pageing.pageIndex, sex: "男", age: "42", x: true, y: false, z: false },
                { name: "xyxyxy" + $scope.pageing.pageIndex, sex: "女", age: "29", x: true, y: false, z: false },
                { name: "Jenifer" + $scope.pageing.pageIndex, sex: "男", age: "23", x: true, y: false, z: false },
                { name: "Albert" + $scope.pageing.pageIndex, sex: "男", age: "33", x: true, y: false, z: false }

            ];
        };

        $scope.tabContent = [{
            heading: 'HTML',
            aceMode: 'ace/mode/html',
            code: ''
        }];
    }]);