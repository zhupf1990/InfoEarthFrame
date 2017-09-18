﻿
'use strict';
/**
 * Config constant
 */
app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Javascript Plugins
        'modernizr': ['../App/bower_components/components-modernizr/modernizr.js'],
        'moment': ['../App/bower_components/moment/min/moment.min.js'],
        //时间控件汉化包
        'moment-zh-cn': ['../App/bower_components/moment/min/angular-locale_zh-cn.js'],
        'spin': '../App/bower_components/spin.js/spin.js',

        //*** jQuery Plugins
        'jquery-mobile': ['../App/bower_components/jquery-mobile/mobiscroll.custom-3.0.0-beta4.min.css','../App/bower_components/jquery-mobile/mobiscroll.custom-3.0.0-beta4.min.js'],

        'perfect-scrollbar-plugin': ['../App/bower_components/perfect-scrollbar/js/min/perfect-scrollbar.jquery.min.js', '../App/bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css'],
        'ladda': ['../App/bower_components/ladda/dist/ladda.min.js', '../App/bower_components/ladda/dist/ladda-themeless.min.css'],
        'sweet-alert': ['../App/bower_components/sweetalert/lib/sweet-alert.min.js', '../App/bower_components/sweetalert/lib/sweet-alert.css'],
        'chartjs': '../App/bower_components/chartjs/Chart.min.js',
        'jquery-sparkline': '../App/bower_components/jquery.sparkline.build/dist/jquery.sparkline.min.js',
        'ckeditor-plugin': '../App/bower_components/ckeditor/ckeditor.js',
        'jquery-nestable-plugin': ['../App/bower_components/jquery-nestable/jquery.nestable.js'],
        'touchspin-plugin': ['../App/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js', '../App/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
        ////*** 引用webuploader的js和css
        //'webuploader': ['../Scripts/webuploader-0.1.5/webuploader.js', '../Scripts/webuploader-0.1.5/webuploader.css'],
        //'micFilereaderUpload': '/App/Main/assets/js/directives/uploadBreakpointDirective.js',
        //'uploadCtrl': '/App/Main/assets/js/controllers/uploadCtrl.js',
        //'bpUploadHtml': '/App/Main/assets/js/directives/bpUploadHtml5Directive.js',
        //富文本编辑器
        'wang-editor': ['../App/bower_components/wangEditor/js/wangEditor.js', '../App/bower_components/wangEditor/js/highlight.min.js', '../App/bower_components/wangEditor/css/wangEditor.min.css'],

        //*** openlayer 
        'openlayerjs': ['../Scripts/openlayer/mapScript/ol.js', '../Scripts/openlayer/mapCss/ol.css'],
        'itellurojs': '../Scripts/openlayer/mapScript/itelluro.ol.js',
        'measuretooljs': '../Scripts/openlayer/mapScript/measuretool.js',


        //*** Controllers
        ///*测试pageCtrl
        "testPage1Ctrl": '/App/Main/assets/js/controllers/testPage1Ctrl.js',
        "testPage2Ctrl": '/App/Main/assets/js/controllers/testPage2Ctrl.js',

        //demo
        "demo_map": '/App/Main/assets/js/controllers/demo/map.js',

		//*** Filters
        ///*ui-select 下拉框过滤器
        'propsFilter': '/App/Main/assets/js/filters/propsFilter.js',
    },
    //*** angularJS Modules
    modules: [
        {
        name: 'angularMoment',
        files: ['../App/bower_components/angular-moment/angular-moment.min.js']
    }, {
        name: 'toaster',
        files: ['../App/bower_components/AngularJS-Toaster/toaster.js', '../App/bower_components/AngularJS-Toaster/toaster.css']
    }, {
        name: 'angularBootstrapNavTree',
        files: ['../App/bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js', '../App/bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css']
    }, {
        name: 'angular-ladda',
        files: ['../App/bower_components/angular-ladda/dist/angular-ladda.min.js']
    }, {
        name: 'ngTable',
        files: ['../App/bower_components/ng-table/dist/ng-table.min.js', '../App/bower_components/ng-table/dist/ng-table.min.css']
    }, {
        name: 'ui.select',
        files: ['App/bower_components/angular-ui-select/dist/select.min.js', 'App/bower_components/angular-ui-select/dist/select.min.css', 'App/bower_components/select2/dist/css/select2.css', 'App/bower_components/select2-bootstrap-css/select2-bootstrap.min.css', 'App/bower_components/selectize/dist/css/selectize.bootstrap3.css']
    }, {
        name: 'ui.mask',
        files: ['../App/bower_components/angular-ui-utils/mask.min.js']
    }, {
        name: 'ngImgCrop',
        files: ['../App/bower_components/ngImgCrop/compile/minified/ng-img-crop.js', '../App/bower_components/ngImgCrop/compile/minified/ng-img-crop.css']
    }, {
        name: 'angularFileUpload',
        files: ['../App/bower_components/angular-file-upload/angular-file-upload.min.js']
    }, {
        name: 'ngAside',
        files: ['../App/bower_components/angular-aside/dist/js/angular-aside.min.js', '../App/bower_components/angular-aside/dist/css/angular-aside.min.css']
    }, {
        name: 'truncate',
        files: ['../App/bower_components/angular-truncate/src/truncate.js']
    }, {
        name: 'oitozero.ngSweetAlert',
        files: ['../App/bower_components/angular-sweetalert-promised/SweetAlert.min.js']
    }, {
        name: 'monospaced.elastic',
        files: ['../App/bower_components/angular-elastic/elastic.js']
    }, {
        name: 'ngMap',
        files: ['../App/bower_components/ngmap/build/scripts/ng-map.min.js']
    }, {
        name: 'tc.chartjs',
        files: ['../App/bower_components/tc-angular-chartjs/dist/tc-angular-chartjs.js']
    }, {
        name: 'flow',
        files: ['../App/bower_components/ng-flow/dist/ng-flow-standalone.min.js']
    }, {
        name: 'uiSwitch',
        files: ['../App/bower_components/angular-ui-switch/angular-ui-switch.min.js', '../App/bower_components/angular-ui-switch/angular-ui-switch.min.css']
    }, {
        name: 'ckeditor',
        files: ['../App/bower_components/angular-ckeditor/angular-ckeditor.min.js']
    }, {
        name: 'mwl.calendar',
        files: ['../App/bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar.js', '../App/bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.js', '../App/bower_components/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css']
    }, {
        name: 'ng-nestable',
        files: ['../App/bower_components/ng-nestable/src/angular-nestable.js']
    }, {
        name: 'vAccordion',
        files: ['../App/bower_components/v-accordion/dist/v-accordion.min.js', '../App/bower_components/v-accordion/dist/v-accordion.min.css']
    }, {
        name: 'xeditable',
        files: ['../App/bower_components/angular-xeditable/dist/js/xeditable.min.js', '../App/bower_components/angular-xeditable/dist/css/xeditable.css', '../App/Main/assets/js/config/config-xeditable.js']
    }, {
        name: 'checklist-model',
        files: ['../App/bower_components/checklist-model/checklist-model.js']
    }, {
        name: 'prettify',
        files: ['../App/bower_components/prettify/prettify.1.0.1.js', '../App/bower_components/prettify/prettify-style.css', '../App/bower_components/prettify/angular-tree-directive.js', '../App/bower_components/prettify/css/tree-control.css', '../App/bower_components/prettify/css/tree-control-attribute.css']
    }]
});
