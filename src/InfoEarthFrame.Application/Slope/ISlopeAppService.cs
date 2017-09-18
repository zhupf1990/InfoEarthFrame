using Abp.Application.Services;
using Abp.Application.Services.Dto;
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
    /// 地灾模块
    /// </summary>
    public interface ISlopeAppService : IApplicationService
    {
        [HttpPost]
        Task<SlopeDto> Insert(SlopeInput slopeInput);

        [HttpPost]
        Task<ListResultOutput<SlopeDto>> GetPageList(QuerySlopeInput querySlopeInput);

        [HttpPost]
        Task<PagedResultOutput<SlopeDto>> GetFieldsPageList(QuerySlopeInput querySlopeInput);

        [HttpPost]
        Task<PagedResultOutput<SlopeDto>> GetPageAndCountList(QuerySlopeInput querySlopeInput);

        [HttpGet]
        Task DeleteById(string id);
        [HttpPost]
        Task<SlopeDto> Update(SlopeInput slopeInput);
        [HttpPost]
        Task<int> GetCount(QuerySlopeInput querySlopeInput);

    }
}
