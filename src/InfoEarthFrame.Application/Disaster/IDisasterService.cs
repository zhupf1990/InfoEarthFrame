using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System.Web.Http;

namespace InfoEarthFrame.Application
{
    /// <summary>
    /// 地灾模块
    /// </summary>
    public interface IDisasterService : IApplicationService
    {
        #region  自动生成

        /// <summary>
        /// 获取所有
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        Task<ListResultOutput<DisasterDto>> GetAllList();

        /// <summary>
        /// 分页查询
        /// </summary>
        /// <param name="queryDto">查询信息</param>
        /// <returns></returns>
        [HttpPost]
        Task<ListResultOutput<DisasterDto>> GetPageList(QueryDisasterInput queryDto);

        /// <summary>
        /// 分页查询(获取总条数)
        /// </summary>
        /// <param name="queryDto">查询信息</param>
        /// <returns></returns>
        [HttpPost]
        Task<PagedResultOutput<DisasterDto>> GetPageAndCountList(QueryDisasterInput queryDto);

        /// <summary>
        /// 获取总条数
        /// </summary>
        /// <param name="queryDto">查询信息</param>
        /// <returns></returns>
        [HttpPost]
        Task<int> GetCount(QueryDisasterInput queryDto);

        /// <summary>
        /// 根据ID查询详细信息
        /// </summary>
        /// <param name="Id">主键</param>
        /// <returns></returns>
        [HttpGet]
        Task<DisasterOutput> GetDetailById(int Id);

        /// <summary>
        /// 新增
        /// </summary>
        /// <param name="input">信息</param>
        /// <returns></returns>
        [HttpPost]
        Task<DisasterDto> Insert(DisasterInput input);

        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="input">信息</param>
        /// <returns></returns>
        [HttpPost]
        Task<DisasterDto> Update(DisasterInput input);

        /// <summary>
        /// 根据主键删除
        /// </summary>
        /// <param name="Id">主键</param>
        /// <returns></returns>
        [HttpGet]
        Task DeleteById(int Id);

        [HttpGet]
        Task<DisasterDto> InertDisaster();

        #endregion

        #region  自定义

        #endregion
    }
}
