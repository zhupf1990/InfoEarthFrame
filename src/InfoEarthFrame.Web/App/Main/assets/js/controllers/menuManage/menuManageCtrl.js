'use strict';
/**
 * testPage1Ctrl Controller
 */
subapp.controller('menuManageCtrl', ['$rootScope', "$scope", "$timeout", function ($rootScope, $scope, $timeout) {

    //计算表格高度
    $scope.gettbodyH = function () {
        var iH = angular.element(".opMenuCon").height();
        var iTop = angular.element(".panel-Title").height() + angular.element(".titlePanel").height() + angular.element(".mic-tables-thdiv").height();
        angular.element(".mic-tables-div").height(iH - iTop - 20);
    };
    $timeout($scope.gettbodyH, 200);

    window.onresize = function () {
        $scope.gettbodyH();
    };

    //dto 操作数据使用
    $scope.dto = {};


    /***************左侧菜单树 开始*********************/
    //树形数据样例
    $scope.treedata1 = [];

    $scope.selectedData = "";//当前节点,点击树时自动赋值
    //选中回调函数
    $scope.onSelected = function (node, getParentNodeBackFun) {
        $scope.parentid = node.id;
        $scope.searchList();
    };

    //$timeout(function () { console.log($scope.treeCtrl) }, 1000);

    $scope.getTreeData = function (data, b) {
        data = JSON.parse(data);
        $scope.treedata = angular.copy(data);
        
        $timeout(function () {
            $scope.treedata1 = angular.copy(data);
            var preAll = { expanded: false, id: "", img: "indented tree-icon fa fa-navicon", isLeaf: false, label: "全部", pId: "0" };
            $scope.treedata1.unshift(preAll);
        });
    };
    http_ajax({ keyword: '', target: '' }, "/Module/GetTreeJson", $scope.getTreeData, "Get");

    /***************左侧菜单树 结束*********************/


    /***************模态框 开始*********************/


    $scope.iconModal = { winName: "选择图标" };
    function addIEvent() {
        $timeout(function () {
            var els = angular.element("#test").find('div');
            if (els.length === 0) {
                addIEvent();
                return;
            }

            angular.forEach(els, function (e, k) {
                var el = angular.element(e);
                var iel = el.find('i')[0];
                var str = angular.element(iel).attr('class');
                angular.element(el).on("click", function (e) {
                    $scope.className = str;
                    var siblingsEle = angular.element(e)[0].target.parentElement.children;
                    angular.forEach(siblingsEle, function (se, sk) {
                        var seClass = angular.element(se)[0].attributes.class.textContent;
                        if (seClass.indexOf("iconActive") > -1) {
                            seClass = seClass.replace("iconActive", "")
                        };
                        angular.element(se)[0].attributes.class.textContent = seClass;
                    });
                    var targetClass = angular.element(e)[0].target.attributes.class.textContent.trim();
                    angular.element(e)[0].target.attributes.class.textContent = targetClass + " iconActive";
                });
            });
        });
    }
    //注意：需要在路由中注入uiModalsDirective
    //用于双向绑定的Modal，或提交到后台的对象。
    $scope.inputModal = {
        winName: "添加功能",
        Id: "",
        F_FullName: "",
        F_Icon: "",
        F_ParentId: "",
        F_ParentName: "",
        F_SortCode: "",
        F_EnabledMark: false,
        iconopenPopwinFun: function () {
            $scope.iconopenPopwinFun();
            addIEvent();
        },
        selectedComboDatas: [],
        onComboChecked: function (a, b) {
            $scope.inputModal.F_ParentId = $scope.inputModal.selectedComboDatas.id;
            $scope.inputModal.F_ParentName = $scope.inputModal.selectedComboDatas.label;
        }
    };


    var copyMod = angular.copy($scope.inputModal);


    //提交数据操作
    $scope.inputModal.submitForm = function (modalInstance, form) {
        if ($scope.inputModal.winName == "添加功能") {
            for (var p in $scope.dto) {
                $scope.dto[p] = null;
            }
        }
        if ($scope.inputModal.F_EnabledMark) {
            $scope.dto.F_EnabledMark = 1;
        } else {
            $scope.dto.F_EnabledMark = 0;
        }
        $scope.dto.F_EnCode = $scope.inputModal.F_EnCode;
        $scope.dto.F_FullName = $scope.inputModal.F_FullName;
        $scope.dto.F_Icon = $scope.inputModal.F_Icon;
        $scope.dto.F_ParentId = $scope.inputModal.F_ParentId;
        $scope.dto.F_SortCode = $scope.inputModal.F_SortCode;
        $scope.dto.F_UrlAddress = $scope.inputModal.F_UrlAddress;
        saveMenuList($scope.dto);

        //关闭弹出框
        modalInstance.close();
    };
    //关闭或取消操作
    $scope.inputModal.cancel = function () {
        $scope.inputModal = angular.copy(copyMod);
    };
    //提交数据操作
    $scope.iconsubmitForm = function (modalInstance, form) {
        $scope.inputModal.F_Icon = $scope.className;
        modalInstance.close();
    };
    //关闭或取消操作
    $scope.cancel = function () {
        modalInstance.close();
    };

    //模态窗口打开时的回调函数
    $scope.inputModal.openedBack = function () {
    };

    //打开弹窗
    $scope.operateBtn = function (type) {
        $scope.dto.F_ParentId = "0";
        $scope.inputModal.treedatacomb = angular.copy($scope.treedata); //获取上级节点数据
        var preAll = { expanded: false, id: "0", img: "", isLeaf: false, label: "===请选择===", pId: "0",children:[] };
        $scope.inputModal.treedatacomb.unshift(preAll);
        $scope.inputModal.selectedData = {};//当前节点,点击树时自动赋值
        $scope.inputModal.startSelectedData = $scope.inputModal.treedatacomb[0];//初始化选中节点
        //判断选中节点
        selNode($scope.inputModal.treedatacomb, $scope.PkeyValue);
        function selNode(data, key) {
            angular.forEach(data, function (e, k) {
                if (e.id == key) {
                    //e.selected = true;
                    $scope.inputModal.startSelectedData = e;
                } else {
                    if (e.children.length > 0) {
                        selNode(e.children, key)
                    }
                }
            });
        };
        //选中回调函数
        $scope.inputModal.onSelected = function (node, getParentNodeBackFun) {
            $scope.inputModal.F_ParentId = node.id;
            $scope.inputModal.F_ParentName = node.label;
        };
        switch (type) {
            case "add":    //编号
                $scope.inputModal.winName = "添加功能";
                break;
            case "edit":      //名称
                $scope.inputModal.winName = "编辑功能";
                if ($scope.keyValue != "") {
                    searchMenu($scope.keyValue);
                    $scope.addopenPopwinFun();
                } else {
                    alert("请先选择需要编辑的数据！");
                }
                break;
            default:
                $scope.inputModal.winName = "添加功能";
                break;

        }
        if (type == "add") {
            $scope.addopenPopwinFun();
        }
    };



    /***************模态框 结束*********************/


    /************************列表数据 开始*******************************/
    //初始化
    $scope.selConBox = false;//控制选择框显隐
    $scope.condition = "选择条件";
    $scope.parentid = ""; //父级ID
    $scope.keyValue = ""; //选中行id
    $scope.PkeyValue = ""; //选中行父id

    $scope.pageing = { pageIndex: 1, pageSize: 2, pageCounts: 100 };//分页初始化

    $scope.pageChanged = function () {
        console.log($scope.pageing);
    };

    //成员的click事件回调
    $scope.myDataClickBak = function (row, key) {
        $scope.keyValue = row.Id;
        $scope.PkeyValue = row.F_ParentId;
    };



    /***************查 开始*********************/

    $scope.searchListFn = function (data, b) {
        data = JSON.parse(data);
        $scope.pageing.pageCounts = data.length;
        $timeout(function () {
            $scope.tabDatas = data;
        });
       
        angular.element(".mic-tables-div .isNull").remove();
        if (data.length == 0) {
            angular.element(".mic-tables-div tbody").append('<p class="isNull" style="color:red;padding:5px 4px;border-bottom:1px solid #ddd">没有找到您要的相关数据!</p>');
        }
        if (data.length > 0) {
            if (!$scope.dto.Id) {
                $scope.dto = angular.copy(data[0]);
            }
            angular.forEach(data, function (e, i) {
                e.code = i + 1;
                if (e.F_EnabledMark == "1") {
                    e.F_EnabledMark = "是";
                } else {
                    e.F_EnabledMark = "否";
                }
            });
        }
    };
    $scope.searchList = function () {
        switch ($scope.condition) {
            case "编号":    //编号
                $scope.conditionName = "EnCode";
                break;
            case "名称":      //名称
                $scope.conditionName = "FullName";
                break;
            case "ui-sref":   //地址
                $scope.conditionName = "UrlAddress";
                break;
            case "选择条件":   //未选择条件
                $scope.conditionName = "";
                break;

        }
        http_ajax({ parentid: $scope.parentid, condition: $scope.conditionName, keyword: $scope.keyword }, "/Module/GetListJson", $scope.searchListFn, "Get");
        $scope.keyValue = "";
        $scope.PkeyValue = "";
    };

    $scope.searchList();


    /***************查 结束*********************/

    /***************单条查询 开始*********************/

    function searchMenu(keyValue) {
        $scope.saveMenuFn = function (data, form) {

            data = JSON.parse(data);
            $scope.dto = angular.copy(data);
            if (data.F_EnabledMark == "1") {
                $scope.inputModal.F_EnabledMark = true;
            } else {
                $scope.inputModal.F_EnabledMark = false;
            }
            $scope.inputModal.F_EnCode = data.F_EnCode;
            $scope.inputModal.F_FullName = data.F_FullName;
            $scope.inputModal.F_Icon = data.F_Icon;
            $scope.inputModal.F_ParentId = data.F_ParentId;
            $scope.inputModal.F_SortCode = data.F_SortCode;
            $scope.inputModal.F_UrlAddress = data.F_UrlAddress;
        };
        http_ajax({ keyValue: keyValue }, "/Module/GetFormJson", $scope.saveMenuFn, "GET");
    }

    /***************单条查询 结束*********************/


    /***************增 开始*********************/

    //添加、修改
    function saveMenuList(dto) {
        $scope.saveMenuFn = function (a, b) {
        };
        if (!dto.F_ParentId) {
            dto.F_ParentId = "0";
        }
        http_ajax({ moduleEntity: dto }, "/Module/SaveForm", $scope.saveMenuFn, "POST");
        //reSearch();
        $timeout(reSearch);
    }


    /***************增 结束*********************/

    /***************删 开始*********************/
    //添加、修改
    function delMenuList(keyValue) {
        $scope.delMenuFn = function (a, b) {
            alert(a);
        };
        http_ajax({ keyValue: keyValue }, "/Module/RemoveForm", $scope.delMenuFn, "POST");
    }
    $scope.btn_delete = function () {
        var confirmTxt = confirm("确定要删除该条数据吗？");
        if (confirmTxt) {
            delMenuList($scope.keyValue);
            //reSearch();
            $timeout(reSearch);
        }
    }

    /***************删 结束*********************/

    //增删改之后需要执行的查询事件
    function reSearch() {
        http_ajax({ keyword: '', target: '' }, "/Module/GetTreeJson", $scope.getTreeData, "Get");//左侧菜单树
        $scope.searchList();//数据列表
    };


    /*************************列表数据 结束*******************************/
   
}]);
