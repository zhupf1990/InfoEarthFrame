
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