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
    public interface IModuleColumnAppService : IApplicationService
    {
        #region 获取数据
        /// <summary>
        /// 视图列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        List<ModuleColumnDTO> GetList();
        /// <summary>
        /// 视图列表
        /// </summary>
        /// <param name="moduleId">功能Id</param>
        /// <returns></returns>
        [HttpGet]
        List<ModuleColumnDTO> GetList(string moduleId);
        /// <summary>
        /// 视图实体
        /// </summary>
        /// <param name="keyValue">主键值</param>
        /// <returns></returns>
        [HttpGet]
        ModuleColumnDTO GetEntity(string keyValue);
        #endregion

        #region 提交数据
        /// <summary>
        /// 添加视图
        /// </summary>
        /// <param name="moduleColumnEntity">视图实体</param>
        /// <returns></returns>
        [HttpPost]
        void AddEntity(ModuleColumnDTO moduleColumnEntity);
        #endregion
    }
}
