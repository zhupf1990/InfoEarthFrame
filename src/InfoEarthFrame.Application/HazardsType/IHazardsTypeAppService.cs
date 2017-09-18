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
    public interface IHazardsTypeAppService : IApplicationService
    {
        /// <summary>
        /// 获取所有地灾类型
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        Task<ListResultOutput<HazardsTypeDto>> GetAllList();
    }
}
