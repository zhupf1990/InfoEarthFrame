using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using AutoMapper;
using InfoEarthFrame.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace InfoEarthFrame.Application
{
    /// <summary>
    /// 多媒体模块
    /// </summary>
    public interface IMultimediaAppService : IApplicationService
    {
        /// <summary>
        /// 获取多媒体信息
        /// </summary>
        /// <param name="input">多媒体信息</param>
        /// <returns></returns>
        [HttpPost]
        List<MultimediaOutput> GetAllList(ModuleInfoInput input);

        /// <summary>
        /// 新增多媒体
        /// </summary>
        /// <param name="input">多媒体信息</param>
        /// <returns></returns>
        [HttpPost]
        Task<string> Insert(MultimediaTypeInput input);

        /// <summary>
        /// 更新多媒体信息
        /// </summary>
        /// <param name="input">多媒体信息</param>
        /// <returns></returns>
        [HttpPost]
        Task<bool> Update(MultimediaTypeInput input);

        /// <summary>
        /// 删除多媒体信息
        /// </summary>
        /// <param name="id">主键</param>
        /// <returns></returns>
        [HttpGet]
        Task<bool> Delete(string id);
    }
}
