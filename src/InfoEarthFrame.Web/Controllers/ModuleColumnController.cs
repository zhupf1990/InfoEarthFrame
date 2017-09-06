using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using InfoEarthFrame.Common;
using InfoEarthFrame.Module;
using InfoEarthFrame.Module.Dtos;
using InfoEarthFrame.Web.Controllers;

namespace Infoearth.Application.Web.Areas.AuthorizeManage.Controllers
{
    /// <summary>
    /// 版 本 6.1
    /// Copyright (c) 2013-2016 上海力软信息技术有限公司
    /// 创建人：佘赐雄
    /// 日 期：2015.10.29 15:13
    /// 描 述：系统视图
    /// </summary>
    public class ModuleColumnController : InfoEarthFrameControllerBase
    {
        private IModuleColumnAppService _appService;

        public ModuleColumnController(IModuleColumnAppService appService)
        {
            _appService = appService;
        }

        #region 视图功能
        /// <summary>
        /// 视图表单
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Form()
        {
            return View();
        }
        /// <summary>
        /// 批量添加
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult BatchAdd()
        {
            return View();
        }
        #endregion

        #region 获取数据
        /// <summary>
        /// 视图列表 
        /// </summary>
        /// <returns>返回列表Json</returns>
        [HttpGet]
        public ActionResult GetListJson(string moduleId)
        {
            var data = _appService.GetList(moduleId);
            return Content(data.ToJson());
        }
        /// <summary>
        /// 视图列表 
        /// </summary>
        /// <returns>返回树形列表Json</returns>
        [HttpGet]
        public ActionResult GetTreeListJson(string moduleId)
        {
            var data = _appService.GetList(moduleId);
            if (data != null)
            {
                return Content(data.ToJson());
            }
            return null;
        }
        #endregion

        #region 提交数据
        /// <summary>
        /// 视图列表Json转换视图树形Json 
        /// </summary>
        /// <param name="moduleColumnJson">视图列表</param>
        /// <returns>返回树形列表Json</returns>
        [HttpPost]
        public ActionResult ListToListTreeJson(string moduleColumnJson)
        {
            var data = from items in moduleColumnJson.ToList<ModuleColumnDTO>() orderby items.F_SortCode select items;
            return Content(data.ToJson());
        }
        #endregion
    }
}
