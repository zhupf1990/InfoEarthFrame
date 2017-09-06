using Abp.Application.Services;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Module.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace InfoEarthFrame.Module
{
    /// <summary>
    /// 菜单模块
    /// </summary>
    public interface IModuleButtonAppService: IApplicationService
    {
        #region 获取数据
        /// <summary>
        /// 按钮列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        List<ModuleButtonDTO> GetList();
        /// <summary>
        /// 按钮列表
        /// </summary>
        /// <param name="moduleId">功能Id</param>
        /// <returns></returns>
        [HttpGet]
        List<ModuleButtonDTO> GetList(string moduleId);
        /// <summary>
        /// 按钮实体
        /// </summary>
        /// <param name="keyValue">主键值</param>
        /// <returns></returns>
        [HttpGet]
        ModuleButtonDTO GetEntity(string keyValue);
        #endregion

        #region 提交数据
        /// <summary>
        /// 添加按钮
        /// </summary>
        /// <param name="moduleButtonEntity">按钮实体</param>
        [HttpPost]
        void AddEntity(ModuleButtonDTO moduleButtonEntity);
        #endregion
    }
}
