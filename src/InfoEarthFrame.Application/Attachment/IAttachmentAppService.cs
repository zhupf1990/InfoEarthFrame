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
    public interface IAttachmentAppService : IApplicationService
    {
        [HttpGet]
        Task<ListResultOutput<AttachmentDto>> GetAllList(string fkid);
        [HttpPost]
        string InsertMultimedia(MultimediaAttachmentInput input);
        [HttpPost]
        Task<bool> Insert(AttachmentInput input);
        [HttpPost]
        Task<bool> Insert(List<AttachmentInput> inputList);
        [HttpGet]
        Task<bool> Delete(string id);
        [HttpGet]
        Task<bool> DeleteAllByFKId(string FKId);
    }
}
