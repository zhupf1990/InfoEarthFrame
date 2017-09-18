'use strict';
/** 
  * 断点上传控件
  * by licx
*/

app.directive('micFilereaderUpload', function ($timeout) {
   var _ajax = function (guid, fileName, backFun) {
        $.ajax({
            url: "/UploadForBreakpoint/FileMerge",
            data: { guid: guid, fileName: fileName },
            type: "POST",
            dataType: "json",
            headers: { Authorization: 'Bearer ' + AccessTokenValues },
            success: function (ret, status) {
                if (status === 'success') {
                    backFun(ret.result);
                }
            },
            error: function (msg, textStatus) {
                backFun('error');
            }
        });
    };


    return {
        restrict: 'A',
        template: function () {
            var tmp = '<div><i class="ti-upload"></i>&nbsp;上传</div>';
            
            return tmp;
        },
        scope: {
            queue: '=?',

            del:'=?',

            totalProgress: '=?',
            url: '=?',


            fileType: '@?',
            fileSize: '=?',
            onSuccess: '=?',
            onDelAll: '=?',
            onDelSingle: '=?',
			onAfterAddingfile: '=?',
			onAfterAddingall: '=?',
        },
        replace: true,
        link: function (scope, element) {
            scope.queue = {};
            var GUID = WebUploader.Base.guid();
            //并发上传（多线程上传）
            var uploader = WebUploader.create({
                //兼容老版本IE
                swf: '/Scripts/webuploader-0.1.5/Uploader.swf',
                // 文件接收服务端
                server: '/UploadForBreakpoint/AddFiles',
                // 开起分片上传
                chunked: true,
                //分片大小
                chunkSize: 2097152,
                //允许自动重传次数
                chunkRetry:5,
                //上传并发数
                threads: 5,
                formData:{
                    guid:GUID
                },
                // 选择文件的按钮
                pick: element[0]
            });

            uploader.on('beforeFileQueued', function (a, b) {
                //console.info('Debug: beforeFileQueued    ', a, b);
            });

            //做上传失败重试
            var tmp = {}
            /*uploader.retry()*/


           //添加文件后促发
            uploader.on('fileQueued', function (a) {

                //用来促发文件上传  
                uploader.upload();

                $timeout(function () {
                    scope.queue[a.name] = { name: a.name, size: a.size, type: a.type, progress: 0 };
                });

            });

            //单个进度和总体进度设置
            uploader.on('uploadProgress', function (a, b) {
                $timeout(function () {
                    scope.queue[a.name].progress = Math.floor((b * 100));
                    scope.totalProgress = 100;
                });
            });
            //设置返回队列参数
            function setQueue(k, ret) {
                $timeout(function () {
                    console.log('Debug: ret   ', ret);
                    if (ret === 'error') {
                        scope.queue[k].msg = '上传失败';
                        scope.queue[k].progress = 0;

                    } else {
                        scope.queue[k].msg = '上传上功';
                        scope.queue[k].progress = 100;
                        scope.queue[k].extension = ret.extension;
                        scope.queue[k].fileGuid = ret.fileGuid;
                        scope.queue[k].size = ret.fileSize;
                        scope.queue[k].httpPath = ret.httpPath;
                        scope.queue[k].logicName = ret.logicName;
                        scope.queue[k].physicalName = ret.physicalName;
                        scope.queue[k].physicalPath = ret.physicalPath;
                    }
                });
            }


            var MergeArr=[];
            uploader.on('uploadSuccess', function (a, b) {
                MergeArr.push(a.name);
            });
            uploader.on('uploadAccept', function (a, b) {

                //console.info('Debug: uploadAccept  ', a, b);

            });
            uploader.on('uploadError', function (a,b) {
                   
                //console.error('Debug: Error  ', a, b);

            });



            uploader.on('uploadFinished', function () {
                var arr = angular.copy(MergeArr.reverse());
                MergeArr = [];
                var i = arr.length-1;
                var callback = function (a) {
                    //设置返回值
                    setQueue(arr[i], a);
                    i--;
                    if (!!arr[i]) {
                        //递归上传
                        _ajax(GUID, arr[i], callback);
                    }
                    else if (i === -1) {
                        //全部上传成功
                        $timeout(function () {
                            scope.totalProgress = 100;
                        });
                    }
                };
                _ajax(GUID, arr[i], callback);
            });
        }
    }
});