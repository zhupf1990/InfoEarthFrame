using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using iTelluro.SYS.Entity;
using System.Web.Http;

namespace InfoEarthFrame.Application
{
    /// <summary>
    /// 行政区划模块
    /// </summary>
    public interface IAreaAppService : IApplicationService
    {
        /// <summary>
        /// 获取省
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <returns></returns>
        [HttpPost]
        List<AreaOutput> GetProvinces(ProvincesQuery query);

        /// <summary>
        /// 获取市
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <returns></returns>
        [HttpPost]
        List<AreaOutput> GetCity(CityQuery query);

        /// <summary>
        /// 获取区县
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <returns></returns>
        [HttpPost]
        List<AreaOutput> GetCounty(CountyQuery query);

        /// <summary>
        /// 获取乡镇
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <returns></returns>
        [HttpPost]
        List<TownOutput> GetTowns(TownsQuery query);
    }
}
