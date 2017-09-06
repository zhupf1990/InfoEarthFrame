﻿using InfoEarthFrame.Module;
using InfoEarthFrame.Module.Dtos;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using InfoEarthFrame.Common;

namespace InfoEarthFrame.Web.Controllers
{
    /// <summary>
    /// 版 本 6.1
    /// Copyright (c) 2013-2016 上海力软信息技术有限公司
    /// 创建人：佘赐雄
    /// 日 期：2015.08.01 14:00
    /// 描 述：系统按钮
    /// </summary>
    public class ModuleButtonController : InfoEarthFrameControllerBase
    {
        private IModuleButtonAppService _appService;

        public ModuleButtonController(IModuleButtonAppService appService)
        {
            _appService = appService;
        }

        #region 视图功能
        /// <summary>
        /// 按钮表单
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Form()
        {
            return View();
        }
        /// <summary>
        /// 选择系统功能
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult OptionModule()
        {
            return View();
        }
        #endregion

        #region 获取数据
        /// <summary>
        /// 按钮列表 
        /// </summary>
        /// <returns>返回列表Json</returns>
        [HttpGet]
        public ActionResult GetListJson(string moduleId)
        {
            var data = _appService.GetList(moduleId);
            return Content(data.ToJson());
        }
        /// <summary>
        /// 按钮列表 
        /// </summary>
        /// <returns>返回树形列表Json</returns>
        [HttpGet]
        public ActionResult GetTreeListJson(string moduleId)
        {
            var data = _appService.GetList(moduleId);
            if (data != null)
            {
                //var TreeList = new List<TreeGridEntity>();
                //foreach (ModuleButtonEntity item in data)
                //{
                //    TreeGridEntity tree = new TreeGridEntity();
                //    bool hasChildren = data.Count(t => t.F_ParentId == item.F_ModuleButtonId) == 0 ? false : true;
                //    tree.id = item.F_ModuleButtonId;
                //    tree.parentId = item.F_ParentId;
                //    tree.expanded = true;
                //    tree.hasChildren = hasChildren;
                //    tree.entityJson = item.ToJson();
                //    TreeList.Add(tree);
                //}
                return Content(data.ToJson());
            }
            return null;
        }
        #endregion

        #region 提交数据
        /// <summary>
        /// 按钮列表Json转换按钮树形Json 
        /// </summary>
        /// <param name="moduleButtonJson">按钮列表</param>
        /// <returns>返回树形Json</returns>
        [HttpPost]
        public ActionResult ListToTreeJson(string moduleButtonJson)
        {
            var data = from items in moduleButtonJson.ToList<ModuleButtonDTO>() orderby items.F_SortCode select items;
            //var treeList = new List<TreeEntity>();
            //foreach (ModuleButtonEntity item in data)
            //{
            //    TreeEntity tree = new TreeEntity();
            //    bool hasChildren = data.Count(t => t.F_ParentId == item.F_ModuleButtonId) == 0 ? false : true;
            //    tree.id = item.F_ModuleButtonId;
            //    tree.text = item.F_FullName;
            //    tree.value = item.F_ModuleId;
            //    tree.isexpand = true;
            //    tree.complete = true;
            //    tree.hasChildren = hasChildren;
            //    tree.parentId = item.F_ParentId;
            //    treeList.Add(tree);
            //}
            return Content("");
        }
        /// <summary>
        /// 按钮列表Json转换按钮树形Json 
        /// </summary>
        /// <param name="moduleButtonJson">按钮列表</param>
        /// <returns>返回树形列表Json</returns>
        [HttpPost]
        public ActionResult ListToListTreeJson(string moduleButtonJson)
        {
            var data = from items in moduleButtonJson.ToList<ModuleButtonDTO>() orderby items.F_SortCode select items;
            //var TreeList = new List<TreeGridEntity>();
            //foreach (ModuleButtonEntity item in data)
            //{
            //    TreeGridEntity tree = new TreeGridEntity();
            //    bool hasChildren = data.Count(t => t.F_ParentId == item.F_ModuleButtonId) == 0 ? false : true;
            //    tree.id = item.F_ModuleButtonId;
            //    tree.parentId = item.F_ParentId;
            //    tree.expanded = true;
            //    tree.hasChildren = hasChildren;
            //    tree.entityJson = item.ToJson();
            //    TreeList.Add(tree);
            //}
            return Content("");
        }
        /// <summary>
        /// 复制按钮
        /// </summary>
        /// <param name="keyValue">主键</param>
        /// <param name="moduleId">功能主键</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CopyForm(string keyValue, string moduleId)
        {
            //moduleButtonBLL.CopyForm(keyValue, moduleId);
            return Content("");
        }
        #endregion
    }
}
