'use strict';
/**
 * testPage1Ctrl Controller
 */
subapp.controller('menuManageCtrl', ['$rootScope', "$scope", "$timeout", '$localStorage', 'SweetAlert', 'abp.services.app.V1.V1.module', function ($rootScope, $scope, $timeout, $localStorage, SweetAlert, abp) {
    var hrefArr = location.href.split('/');
    $scope.moduleCode = hrefArr[hrefArr.length - 1];
    getGUID($scope.moduleCode, btnDisplay);

    //获取按钮权限
    function btnDisplay(param) {
        if (param) {
            $scope.replace = false;
            $scope.add = false;
            $scope.edit = false;
            $scope.delete = false;
            getBtnEnable(param, $scope);
        } else {
            $scope.replace = true;
            $scope.add = true;
            $scope.edit = true;
            $scope.delete = true;
        }
    }
    //$timeout(function () { $scope.delete = false;},200); //$scope.delete = false;
    $timeout(function () { angular.element("#operateBtn>a:last").addClass("operateLastBtn"); },1000); //$scope.delete = false;
    

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
    $scope.treedata1 = [{ expanded: false, id: "", img: "indented tree-icon fa fa-navicon", isLeaf: false, label: "功能目录", pId: "0",children:[] }];
    $scope.startSelectedData = $scope.treedata1[0];//初始选中节点
    $scope.startselNode = ""; 

    $scope.selectedData = "";//当前节点,点击树时自动赋值
    //选中回调函数
    $scope.onSelected = function (node, getParentNodeBackFun) {
        $scope.parentid = node.id;
        //console.log(node);
        var pnode = getParentNodeBackFun(node);
        if (pnode) {
            $scope.startselNode = pnode.id;
        }
        $scope.searchList();
    };

    //$timeout(function () { console.log($scope.treeCtrl) }, 1000);

    function leftMenuTree() {
        $scope.getTreeData = function (data, b) {
            data = JSON.parse(data);
            $scope.treedata = angular.copy(data);

            $timeout(function () {
                $scope.treedata1 = $scope.treedata1.splice(0, 1);
                $scope.treedata1[0].children = [];
                $scope.treedata1[0].children = $scope.treedata1[0].children.concat(data);
                //console.log($scope.startSelectedData); console.log($scope.selectedData);
                if ($scope.parentid == "") {
                    $scope.startSelectedData = $scope.treedata1[0];
                } else {
                    selLeftNode(data, $scope.parentid);
                }
            });
        };
        http_ajax({ keyword: '', target: '' }, "/Module/GetTreeJson", $scope.getTreeData, "Get");

    };
    leftMenuTree();

    function selLeftNode(data, key) {
        angular.forEach(data, function (e, k) {
            if (e.id == key) {
                //e.selected = true;
                $scope.startSelectedData = e;
            } else {
                if (e.children.length > 0) {
                    selLeftNode(e.children, key)
                }
            }
        });
    };
    /***************左侧菜单树 结束*********************/


    /***************模态框 开始*********************/


    function addIEvent() {
        $timeout(function () {
            var els = angular.element("#test").find('a');
            if (els.length === 0) {
                addIEvent();
                return;
            }
       

            angular.forEach(els, function (e, k) {
                var el = angular.element(e);
                //console.log("abc", el);
                var iel = el.find('i')[0];
                var str = angular.element(iel).attr('class');
                angular.element(el).on("click", function (tag) {
                    var dom = angular.element(angular.element(tag)[0].target);
                    if (angular.element(angular.element(tag)[0].target).html()=="") {
                        dom = angular.element(angular.element(tag)[0].target).parent();
                    }
                    dom.addClass("iconActive");
                    dom.parent().siblings().find("a").removeClass("iconActive");
                    $scope.className = str;
                    var abc = dom.children("i");

                   
                });
              
            });
        });
    }
    //注意：需要在路由中注入uiModalsDirective
    //用于双向绑定的Modal，或提交到后台的对象。
    $scope.inputModal = {
        winName: "添加功能",
        btnwinName: "添加按钮",
        Id: "",
        F_FullName: "",
        F_Icon: "",
        F_ParentId: "",
        F_ParentName: "",
        F_SortCode: "",
        F_EnabledMark: false,
        AcceptClick: function ($modalInstance) {
            //console.log($modalInstance);
            saveForm($modalInstance);
        },
        nextClick: function () {
            if ($scope.inputModal.tabBtnDatas.length == 0) {
                searchBtnList($scope.keyValue);
            }
        },
        openManageBtn: function (type) {
            switch (type) {
                case "add":    //编号
                    $scope.inputModal.btnwinName = "添加按钮";
                    //按钮列表信息
                    $scope.btnDto = {
                        F_ModuleId: "",
                        F_ParentId: "0",
                        F_Icon: "",
                        F_EnCode: "",
                        F_FullName: "",
                        F_ActionAddress: "",
                        F_SortCode: ""
                    };
                    break;
                case "edit":      //名称
                    $scope.inputModal.btnwinName = "编辑按钮";
                    if ($scope.btnDto.F_EnCode) {
                        $scope.openmanageBtn();
                    } else {
                        //alert("请先选择需要编辑的数据！");
                        noticModal("请先选择需要编辑的数据！", false);
                    }
                    break;
                default:
                    $scope.inputModal.btnwinName = "添加功能";
                    break;

            }
            if (type == "add") {
                $scope.openmanageBtn();
            }

        }, btn_delete: function () {
            if ($scope.btnDto.F_EnCode) {
                SweetAlert.swal({
                    title: "确定?",
                    text: "你将删除该条数据!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "确定",
                    cancelButtonText: "取消"
                }, function (isConfirm) {
                    if (isConfirm) {
                        angular.forEach($scope.inputModal.tabBtnDatas, function (e, k) {
                            if (e.code == $scope.btnDto.code) {
                                $scope.inputModal.tabBtnDatas.splice(k, 1);
                            }
                        });
                    } else {
                        console.log("你取消了该操作！");
                    }
                });
            } else {
                //alert("请先选择需要编辑的数据！");
                noticModal("请先选择需要删除的数据！", false);
            }
        },
        iconopenPopwinFun: function () {
            $scope.iconopenPopwinFun();
            addIEvent();
        },
        openmanageBtn: function () {
            $scope.openmanageBtn();
        },
        selectedComboDatas: [],
        onComboChecked: function (a, b) {
            $scope.inputModal.F_ParentId = $scope.inputModal.selectedComboDatas.id;
            $scope.inputModal.F_ParentName = $scope.inputModal.selectedComboDatas.label;
        }, cancel: function (modalInstance, form) {
            $scope.inputModal = angular.copy(copyMod);
            $scope.inputModal.tabBtnDatas = [];
            //添加按钮集合
            $scope.btnDtoList = [];
            modalInstance.close();
        }, btnDataClickBak: function (row, key) {
            $scope.btnDto = row;
        }
    };


    var copyMod = angular.copy($scope.inputModal);


    //提交数据操作
    $scope.inputModal.submitForm = function (modalInstance, form) {
        //关闭弹出框
        modalInstance.close();
    };
    //关闭或取消操作
    //$scope.inputModal.cancel = function (modalInstance, form) {
    //    $scope.inputModal = angular.copy(copyMod);
    //    $scope.inputModal.tabBtnDatas = [];
    //    //添加按钮集合
    //    $scope.btnDtoList = [];
    //    modalInstance.close();
    //};

    //模态窗口打开时的回调函数
    $scope.inputModal.openedBack = function () {
    };
    //图标弹窗：提交数据操作
    $scope.inputModal.iconsubmitForm = function (modalInstance, form) {
        $scope.inputModal.F_Icon = $scope.className;
        //console.log($scope.className);
        modalInstance.close();
    };
    //图标弹窗：关闭或取消操作
    $scope.inputModal.iconcancel = function () {
    };
    //图标弹窗：提交数据操作
    $scope.inputModal.btnsubmitForm = function (modalInstance, form) {
        $scope.btnDto.F_ModuleId = $scope.keyValue;
        $scope.btnDtoList.push($scope.btnDto);
        $timeout(function () {
            if ($scope.inputModal.btnwinName == "添加按钮") {
                $scope.inputModal.tabBtnDatas.push($scope.btnDto);
                addCodeForData($scope.inputModal.tabBtnDatas);
            } else {
                angular.forEach($scope.inputModal.tabBtnDatas, function (e,k) {
                    if (e.code == $scope.btnDto.code) {
                        $scope.inputModal.tabBtnDatas[k] = $scope.btnDto;
                    }
                });
            }
        });
        angular.element(".testwinCls .mic-tables-div .isNull").remove();
        modalInstance.close();

    };
    $scope.btnDataClick = function (tag) {
        console.log(tag);
    };
    //图标弹窗：关闭或取消操作
    $scope.inputModal.btncancel = function () {
    };
    //模态窗口打开时的回调函数
    $scope.inputModal.btnopenedBack = function () {
    };

    //打开一级弹窗
    $scope.operateBtn = function (type) {
        $scope.inputModal.tabBtnDatas = [];
        $scope.dto.F_ParentId = "0";
        $scope.inputModal.treedatacomb = angular.copy($scope.treedata); //获取上级节点数据
        var preAll = { expanded: false, id: "0", img: "", isLeaf: false, label: "===请选择===", pId: "0", children: [] };
        $scope.inputModal.treedatacomb.unshift(preAll);
        $scope.inputModal.selectedData = {};//当前节点,点击树时自动赋值
        $scope.inputModal.startSelectedData = $scope.inputModal.treedatacomb[0];//初始化选中节点
        //判断选中节点 
        if ($scope.parentid != "" && $scope.PkeyValue=="") {
            $scope.PkeyValue = $scope.parentid;
        }
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
                    //alert("请先选择需要编辑的数据！");
                    noticModal("请先选择需要编辑的数据！", false);
                }
                break;
            default:
                $scope.inputModal.winName = "添加功能";
                break;

        }
        if (type == "add") {
            $scope.keyValue = "";
            $scope.PkeyValue = "";
            $scope.addopenPopwinFun();
        }
        //按钮列表信息
        $scope.btnDto = {
            F_ModuleId: "",
            F_ParentId: "0",
            F_Icon: "",
            F_EnCode: "",
            F_FullName: "",
            F_ActionAddress: "",
            F_SortCode: ""
        };
        //添加按钮集合
        $scope.btnDtoList = [];

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

    //按钮列表成员的click事件回调
    //$scope.inputModal.btnDataClickBak = function (row, key) {
    //    console.log(row);
    //    console.log(key);
    //};


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
        if ($scope.notice) {
            noticModal($scope.notice+"成功",true);
        }
    };
    $scope.searchList = function (notice) {
        $scope.notice = notice;
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
    function saveMenuList(dto, dataList, notice) {
        $scope.notice = notice;
        $scope.saveMenuFn = function (a, b) {
            //alert(a);
            if (a) {
                noticModal(a, true);
            } else {
                noticModal("保存失败", false);
            }
        };
        if (!dto.F_ParentId) {
            dto.F_ParentId = "0";
        }
        http_ajax({ moduleEntity: dto, moduleButtonListJson: dataList }, "/Module/SaveForm", $scope.saveMenuFn, "POST");
        //reSearch();
        $timeout(reSearch);
    }


    /***************增 结束*********************/

    /***************删 开始*********************/
    //添加、修改
    function delMenuList(keyValue) {
        $scope.delMenuFn = function (a, b) {
            if (a) {
                noticModal(a, true);
            } else {
                noticModal("删除失败", false);
            }
        };
        http_ajax({ keyValue: keyValue }, "/Module/RemoveForm", $scope.delMenuFn, "POST");
    }
    $scope.btn_delete = function () {
        if($scope.keyValue!=""){
        SweetAlert.swal({
            title: "确定?",
            text: "你将删除该条数据!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }, function (isConfirm) {
            if (isConfirm) {
                delMenuList($scope.keyValue);
            //reSearch();
                $timeout(reSearch);
        } else {
                console.log("你取消了该操作！");
        }
        });
        } else {
            noticModal("请先选择需要删除的数据！", false);
        }
    }

    /***************删 结束*********************/

    //增删改之后需要执行的查询事件
    function reSearch() {
        //http_ajax({ keyword: '', target: '' }, "/Module/GetTreeJson", $scope.getTreeData, "Get");//左侧菜单树
        leftMenuTree();
        $scope.searchList();//数据列表
        localStorage.navDataState = "已更新";
    };


    /*************************列表数据 结束*******************************/


    /***************按钮管理 开始*********************/

    /***************列表查询 开始*********************/

    $scope.searchBtnListFn = function (data, b) {
        data = JSON.parse(data);
        $timeout(function () {
            $scope.inputModal.tabBtnDatas = angular.copy(data);
        });

        angular.element(".testwinCls .mic-tables-div .isNull").remove();
        if (data.length == 0) {
            angular.element(".testwinCls .mic-tables-div tbody").append('<p class="isNull" style="color:red;padding:5px 4px;border-bottom:1px solid #ddd">没有找到您要的相关数据!</p>');
        }
        if (data.length > 0) {
            angular.forEach(data, function (e, i) {
                e.code = i + 1;
            });
        }
    };
    function searchBtnList(moduleId) {
        console.log(moduleId);
        http_ajax({ moduleId: moduleId }, "/ModuleButton/GetListJson", $scope.searchBtnListFn, "Get");
    };

    /***************列表查询 结束*********************/

    /***************列表保存 开始*********************/
    function saveForm($modalInstance) {

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
        saveMenuList($scope.dto, JSON.stringify($scope.inputModal.tabBtnDatas),"保存");
        $scope.inputModal.cancel($modalInstance);
    }

    /***************列表保存 结束*********************/


    /***************按钮管理 结束*********************/

    //给数据添加序号
    function addCodeForData(data) {
        angular.forEach(data, function (e, i) {
            e.code = i + 1;
        });
    };


    function noticModal(type, boo) {
        if (boo) {
            SweetAlert.swal({
                title: "成功!",
                text: type,
                type: "success",
                confirmButtonColor: "#007AFF"
            });
        } else {
            SweetAlert.swal({
                title: "警告!",
                text: type,
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
    }

    //监视必填项
    $scope.$watch('inputModal', function (newValue, oldValue) {
        var F_EnCode_val =newValue.F_EnCode;
        var F_FullName_val = newValue.F_FullName;
        var F_SortCode_val = newValue.F_SortCode;
        var F_UrlAddress_val = newValue.F_UrlAddress;
        if (F_EnCode_val && F_FullName_val && F_SortCode_val && F_UrlAddress_val) {
            angular.element("#btn_next").attr("disabled", false);
        } else {
            angular.element("#btn_next").attr("disabled", true);
        };

    }, true);


}]);
