'use strict';
/**
 * testPage1Ctrl Controller
 */
subapp.controller('WizardCtrl', ['$rootScope', "$scope", "$timeout", function ($rootScope, $scope, $timeout) {
    $(function () {
        initialPage();
        buttonOperation();
    })
    //初始化页面
    function initialPage() {
        //加载导向
        $('#wizard').wizard().on('change', function (e, data) {
            var $finish = $("#btn_finish");
            var $next = $("#btn_next");
            if (data.direction == "next") {
                if (data.step == 1) {
                    $finish.removeAttr('disabled');
                    $next.attr('disabled', 'disabled');
                } else {
                    $finish.attr('disabled', 'disabled');
                }
            } else {
                $finish.attr('disabled', 'disabled');
                $next.removeAttr('disabled');
            }
        });
    }
    //按钮操作（上一步、下一步、完成、关闭）
    function buttonOperation() {
        var $last = $("#btn_last");
        var $next = $("#btn_next");
        var $finish = $("#btn_finish");
        //如果是菜单，开启 上一步、下一步
        $("#F_IsMenu").click(function () {
            if (!$(this).attr("checked")) {
                $(this).attr("checked", true)
                $next.removeAttr('disabled');
                $finish.attr('disabled', 'disabled');
            } else {
                $(this).attr("checked", false)
                $next.attr('disabled', 'disabled');
                $finish.removeAttr('disabled');
            }
        });
        //完成提交保存
        //$finish.click(function () {
        //    AcceptClick();
        //})
    }
    

}]);
