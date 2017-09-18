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
    /// 拐点坐标模块
    /// </summary>
    public interface IKneeCoordinateAppService : IApplicationService
    {
        /// <summary>
        /// 转化拐点坐标
        /// </summary>
        /// <param name="input">输入信息</param>
        /// <returns></returns>
        [HttpGet]
        KneeCoordinateOutput GeoCoordinateList(KneeCoordinateInput input);
    }
}
