
//var subapp = angular.module("subApp", ['ui.router']);
var subapp = angular.module("subApp", ['clip-two']);

function http_ajax(params, url, backfun,type) {
    //var token = document.getElementById("token").value;
    if (!type) {
        type = "GET"
    }
    var settings = {
        data: params,
        type: type,
        url: url,
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

//需要sso授权信息时使用
var cookieArr = document.cookie.split(";");
var SSOToken = "";
$.each(cookieArr, function (i,e) {
    if (e.indexOf("Token") > -1) {
        SSOToken = e.split("=")[1];
    }
});
function http_ajaxSSO(params, url, backfun, type) {
    //var token = document.getElementById("token").value;
    if (!type) {
        type = "GET"
    }
    //var settings = {
    //    data: params,
    //    type: type,
    //    url: url,
    //    dataType:"jsonp",
      
    //    error: function (XHR, textStatus, errorThrown) {
    //        console.log(XHR);
    //        console.log(textStatus);
    //        console.log(errorThrown);
    //        console.log("获取数据失败！");
    //    },
    //    success: function (data, textStatus) {
    //        backfun(data, textStatus);

    //    },
    //    headers: {
    //        "Authorization": "Bearer " + token

    //    }
    //};
    //$.ajax(settings);


    $.jsonp({

        "url": url,
        beforeSend: function (XHR) {
            //发送ajax请求之前向http的head里面加入验证信息
            XHR.setRequestHeader('Authorization', SSOToken);
        },
        "success": function (data, textStatus) {
            //$("#current-group").text("当前工作组",data.result.name);
            backfun(data, textStatus);



        },
        "error": function (XHR, textStatus, errorThrown) {

            //alert("Could not find user"+msg);
                    console.log(XHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                    console.log("获取数据失败！");


        }

    });

}

//按钮授权方法:参数id为当前功能导航的主键 scope为当前控制器的作用域
function getBtnEnable(id, scope) {
    var btnEnableData;
    function resBak(a, b) {
        a = JSON.parse(a);
        for (var p in a.authorizeButton) {
            if (p == id) {
                btnEnableData = a.authorizeButton[p];
            };
        };
        angular.forEach(btnEnableData, function (e, k) {
            var p = e.F_EnCode.substr(4, e.F_EnCode.length);
            scope[p] = true;
        });
    };
    http_ajax('', "/ClientData/GetClientDataJson", resBak, 'POST');
}

//获取功能模块主键
function getGUID(code,bakFn) {
    function resGUID(a, b) {
        bakFn(a);
    }
    http_ajax({ moduleCoe: code }, "/Module/GetEntityByModuleCode", resGUID, "Get");
};