using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System;
using System.Net.Http;
using System.Net;
using Newtonsoft.Json;
using System.Web;
using InfoEarthFrame.Module;
using InfoEarthFrame.Common;
using InfoEarthFrame.Module.Dtos;

namespace InfoEarthFrame.Web.Controllers
{
    /// <summary>
    /// 版 本
    /// Copyright (c) 2013-2016 
    /// 创建人：佘赐雄
    /// 日 期：2015.09.01 13:32
    /// 描 述：客户端数据
    /// </summary
    public class ClientDataController : InfoEarthFrameControllerBase
    {

        private string SSOUrl = System.Configuration.ConfigurationManager.AppSettings["SSOUrl"];

        private SSOWebApiWS _ssoWS = null;

        private string _busniessCode = System.Configuration.ConfigurationManager.AppSettings["businessCode"];
        private IModuleAppService _appService ;
        private IModuleButtonAppService _appButtonService;

        public ClientDataController(IModuleAppService appService, IModuleButtonAppService appButtonService)
        {
            _appService = appService;
            _appButtonService = appButtonService;
            _ssoWS = new SSOWebApiWS(SSOUrl);
        }

        #region 获取数据
        /// <summary>
        /// 批量加载数据给客户端（把常用数据全部加载到浏览器中 这样能够减少数据库交互）
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult GetClientDataJson()
        {
            var jsonData = new
            {
              
                authorizeMenu = this.GetModuleData(),                           //导航菜单
                authorizeButton = this.GetALLModuleButtonData(),                   //功能按钮
               // authorizeColumn = this.GetModuleColumnData(),                   //功能视图
                menu = this.GetALLModuleData(),                                 //所有功能
                button = this.GetALLModuleButtonData(),                         //所有功能按钮
            };
            return Content(jsonData.ToJson());
        }
        #endregion

        /// <summary>
        /// 获取所有功能数据
        /// </summary>
        /// <returns></returns>
        private object GetALLModuleData()
        {
            var data = _appService.GetList().FindAll(t => t.F_EnabledMark.Equals(1)); 
            Dictionary<string, object> dictionary = new Dictionary<string, object>();
            foreach (var item in data)
            {
                dictionary.Add(item.Id, item);
            }
            return dictionary;
        }
        /// <summary>
        /// 获取功能按钮数据
        /// </summary>
        /// <returns></returns>
        private object GetALLModuleButtonData()
        {
            var data = _appButtonService.GetList();
            List<ModuleButtonDTO> list = new List<ModuleButtonDTO>();
            list = data.ToList();
            string token = WebHelper.GetCookie("Token");
            token = HttpUtility.UrlDecode(token);
            if (token.Contains(','))
            {
                string userName = token.Split(',')[1];
                if (userName != "System")
                {
                    list.Clear();
                    List<string> mlist = _ssoWS.GetMenuButtonByBusinessCodeAndUserID(_busniessCode);
                    foreach (var item in data)
                    {
                        if (mlist.Contains(item.Id))
                        {
                            list.Add(item);
                        }
                    }
                }
            }

            var dataModule = list.Distinct(new Comparint<ModuleButtonDTO>("F_ModuleId"));
            Dictionary<string, object> dictionary = new Dictionary<string, object>();
            foreach (ModuleButtonDTO item in dataModule)
            {
                var buttonList = list.Where(t => t.F_ModuleId.Equals(item.F_ModuleId));
                dictionary.Add(item.F_ModuleId, buttonList);
            }
            return dictionary;
        }

   
        #region 处理授权数据
        /// <summary>
        /// 获取功能数据
        /// </summary>
        /// <returns></returns>
        private object GetModuleData()
        {
            try
            {
                var menus = _appService.GetList().FindAll(t => t.F_EnabledMark.Equals(1));
                string token = WebHelper.GetCookie("Token");
                token = HttpUtility.UrlDecode(token);
                if (token.Contains(','))
                {
                    string userName = token.Split(',')[1];
                    if (userName == "System")
                    {
                        return menus;
                    }
                }
                List<ModuleDTO> list = new List<ModuleDTO>();
                List<string> mlist = _ssoWS.GetMenuByBusinessCodeAndUserID(_busniessCode);
                foreach (var item in menus)
                {
                    if (mlist.Contains(item.Id))
                    {
                        list.Add(item);
                    }
                }
                return list;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        #endregion

     
    }
}
