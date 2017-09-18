'use strict';
/** 
  * controllers for Angular File Upload
*/
//app.controller('UploadCtrlss', ['$scope', '$timeout',  'abp.services.app.V1.attachment', 'SweetAlert',
//function ($scope, $timeout, attachment, SweetAlert) {
//    $scope.tabContent1 = [{
//        heading: 'HTML',
//        aceMode: 'ace/mode/html',
//        code: '<mic-upload edit-data="fileListData" file-type=".jpg.png.jpeg.bmp.gif" file-size="1024*1024" tiphot="（请上传图片类型，且单张图片不得大于1kb！）" on-success="onLoadSuccess" on-del-all="onDelAll" on-del-single="del"></mic-upload>' +
//            '\r\n<!--注意：该控件本身不包含表单<form>等业务代码,需要开发者在业务代码中添加。-->'
//        }, {
//        heading: 'JS',
//        aceMode: 'ace/mode/javascript',
//        code:'//提交表单时保存附件的MODAL对象\r\n' +
//            'var fileInput = [];\r\n\r\n' +
//            '//上传附件成功回调\r\n' +
//            '$scope.onLoadSuccess = function (ret) {\r\n' +
//            "    var obj = { fKey: '111111111', physicalName: ret.physicalName, logicName: ret.logicName, fileSize: ret.fileSize, extension: ret.extension, physicalPath: ret.physicalPath, httpPath: ret.httpPath };\r\n" +
//            '    fileInput.push(obj);\r\n' +
//            '};\r\n\r\n' +
//            '//删除所有附件回调\r\n' +
//            '$scope.onDelAll = function () {\r\n' +
//            "    console.log('onDelAll');\r\n" +
//            '};\r\n\r\n' +
//            '//删除单个附件回调\r\n' +
//            '$scope.del = function (backValue) {\r\n' +
//            '    console.log(backValue);\r\n' +
//            '    $scope.fileListData = backValue;\r\n' +
//            '    console.log($scope.fileListData);\r\n' +
//            '};\r\n\r\n' +
//            '//从后台读取的数据\r\n' +
//            "attachment.getAllList('111111111').success(function (data, status) {\r\n" +
//            "    $scope.fileListData = { id: '111111111', files: data.items };\r\n" +
//            '}).error(function (data, status) {\r\n' +
//            '});\r\n\r\n' +
//            '//表单提交到后台\r\n' +
//            '$scope.submitForm = {\r\n' +
//            '    submit: function (form) {\r\n' +
//            '        if (form.$invalid) {//校验表单\r\n' +
//            '            var field = null, firstError = null;\r\n' +
//            '            for (field in form) {\r\n' +
//            "                if (field[0] != '$') {\r\n" +
//            '                    if (firstError === null && !form[field].$valid) {\r\n' +
//            '                        firstError = form[field].$name;\r\n' +
//            '                    }\r\n' +
//            '                    if (form[field].$pristine) {\r\n' +
//            '                        form[field].$dirty = true;\r\n' +
//            '                    }\r\n' +
//            '                }\r\n' +
//            '            }\r\n' +
//            '            return;\r\n\r\n' +
//            '        } else {\r\n' +
//            '            console.log(fileInput);\r\n' +
//            '            if (fileInput.length === 0) { return; }\r\n' +
//            '            attachment.insert(fileInput).success(function (data, status) {\r\n' +
//            '                console.log(data);\r\n' +
//            '                fileInput = [];\r\n' +
//            '            }).error(function (data, status) {\r\n\r\n' +
//            '            });\r\n' +
//            '        }\r\n' +
//            '    },\r\n' +
//            '    reset: function (form) {//重置表单\r\n\r\n' +
//            '    }\r\n' +
//            '};'
//    }];





//    //提交表单时保存附件的MODAL对象
//    var fileInput = [];

//    //上传附件成功回调
//    $scope.onLoadSuccess = function (ret) {
//        var obj = { fKey: '111111111', physicalName: ret.physicalName, logicName: ret.logicName, fileSize: ret.fileSize, extension: ret.extension, physicalPath: ret.physicalPath, httpPath: ret.httpPath };
//        fileInput.push(obj);

//    };

//    //删除所有附件回调
//    $scope.onDelAll = function () {
//        console.log('onDelAll');
//    };

//    //删除单个附件回调
//    $scope.del = function (backValue) {
//        console.log(backValue);
//        $scope.fileListData = backValue;
//        console.log($scope.fileListData);
//    };

//    //从后台读取的数据
//    attachment.getAllList('111111111').success(function (data, status) {
//        $scope.fileListData = { id: '111111111', files: data.items };
//    }).error(function (data, status) {

//    });

//    //表单提交
//    $scope.submitForm = {
//        submit: function (form) {
//            if (form.$invalid) {//校验表单
//                var field = null, firstError = null;
//                for (field in form) {
//                    if (field[0] != '$') {
//                        if (firstError === null && !form[field].$valid) {
//                            firstError = form[field].$name;
//                        }
//                        if (form[field].$pristine) {
//                            form[field].$dirty = true;
//                        }
//                    }
//                }
//                return;

//            } else {
//                console.log(fileInput);
//                if (fileInput.length === 0) { return; }
//                attachment.insert(fileInput).success(function (data, status) {
//                    window.location.reload();
//                    console.log(data);
//                    fileInput = [];
//                }).error(function (data, status) {

//                });
//            }
//        },
//        reset: function (form) {//重置表单

//        }
//    };




//    $timeout(function () {
//        qsa('.code').forEach(function (codeEl) {
//            AllCodeToHighLight(codeEl);
//        });
//    }, 0, false);
//}]);

app.controller('breakpointUploadCtrl', ['$scope', '$timeout',  'SweetAlert',
function ($scope, $timeout, attachment, SweetAlert) {
    $scope.tabContent1 = [{
        heading: 'HTML',
        aceMode: 'ace/mode/html',
        code: ''
    }, {
        heading: 'JS',
        aceMode: 'ace/mode/javascript',
        code: ''
    }];
    $scope.onLoadSuccess = function (val) {
        console.log(val);
    }
    $scope.onDelAll = function () {
        console.log(222);
    }
    $scope.del = function (val) {
        console.log(val);
    }

    //$scope.$watch('queue', function (a, b) {
    //    console.log('Debug: ctrl  ', a, b);
    //}); 

    //$scope.aaaa = function () {
    //    console.log(' $scope.queue  ', $scope.queue);
    //};

    $timeout(function () {
        qsa('.code').forEach(function (codeEl) {
            AllCodeToHighLight(codeEl);
        });
    }, 0, false);
}]);