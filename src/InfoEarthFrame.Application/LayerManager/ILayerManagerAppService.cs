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
    /// 地图模块
    /// </summary>
    public interface ILayerManagerAppService : IApplicationService
    {
        /// <summary>
        /// 获取所有图层
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        Task<object> GetAllList();

        [HttpPost]
        Task<ListResultOutput<LayerManagerDto>> GetPageList(QueryLayerManagerInput input);

        [HttpPost]
        Task<PagedResultOutput<LayerManagerDto>> GetPageListAndCount(QueryLayerManagerInput input);

        [HttpPost]
        Task<int> GetPageCount(QueryLayerManagerInput input);

        [HttpPost]
        Task<PagedResultOutput<LayerManagerDto>> Intsert(int pageIndex, int pageSize, LayerManagerInput input);

        [HttpPost]
        Task<PagedResultOutput<LayerManagerDto>> Update(int pageIndex, int pageSize, LayerManagerDto input);

        [HttpGet]
        Task<PagedResultOutput<LayerManagerDto>> Delete(string id, int pageIndex, int pageSize);

        [HttpGet]
        Task<ListResultOutput<LayerManagerDto>> GetLayerManagerByPID();
    }
}
