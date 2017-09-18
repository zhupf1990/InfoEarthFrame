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
    public interface IModuleAppService : IApplicationService
    {
        #region 获取数据
        /// <summary>
        /// 获取最大编号
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        int GetSortCode();
        /// <summary>
        /// 功能列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        List<ModuleDTO> GetList();
        /// <summary>
        /// 功能实体
        /// </summary>
        /// <param name="keyValue">主键值</param>
        /// <returns></returns>
        [HttpGet]
        ModuleDTO GetEntity(string keyValue);

        /// <summary>
        /// 根据模块编号查询菜单
        /// </summary>
        /// <param name="moduleCode">模块编号</param>
        /// <returns></returns>
        [HttpGet]
        ModuleDTO GetEntityByModuleCode(string moduleCode);
        #endregion

        #region 验证数据
        /// <summary>
        /// 功能编号不能重复
        /// </summary>
        /// <param name="enCode">编号</param>
        /// <param name="keyValue">主键</param>
        /// <returns></returns>
        [HttpGet]
        bool ExistEnCode(string enCode, string keyValue);
        /// <summary>
        /// 功能名称不能重复
        /// </summary>
        /// <param name="fullName">名称</param>
        /// <param name="keyValue">主键</param>
        /// <returns></returns>
        [HttpGet]
        bool ExistFullName(string fullName, string keyValue);
        #endregion

        #region 提交数据
        /// <summary>
        /// 删除功能
        /// </summary>
        /// <param name="keyValue">主键</param>
        [HttpGet]
        string RemoveForm(string keyValue);
        /// <summary>
        /// 保存表单（新增、修改）
        /// </summary>
        /// <param name="moduleEntity">功能实体</param>
        /// <returns></returns>
        void SaveForm(ModuleInfoDTO moduleEntity);
        #endregion
    }
}
