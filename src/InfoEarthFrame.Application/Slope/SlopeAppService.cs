using Abp.Application.Services;
using Abp.Authorization;
using AutoMapper;
using InfoEarthFrame.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InfoEarthFrame.Common;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System.Globalization;
using System.ComponentModel.DataAnnotations;
using Abp.Domain.Uow;


namespace InfoEarthFrame.Application
{
    [AbpAuthorize]
    public class SlopeAppService : ApplicationService, ISlopeAppService
    {
        private readonly ISlopeRepository _iSlopeRepository;
        public SlopeAppService(ISlopeRepository iSlopeRepository)
        {
            _iSlopeRepository = iSlopeRepository;
        }




        /// <summary>
        /// 按条件分页查询
        /// </summary>
        /// <param name="querySlopeInput"></param>
        /// <returns></returns>
        public async Task<ListResultOutput<SlopeDto>> GetPageList(QuerySlopeInput querySlopeInput)
        {
            try
            {
                var slope = await _iSlopeRepository.GetPageList(querySlopeInput.PageIndex, querySlopeInput.PageSize, querySlopeInput.DISASTERUNITNAME, querySlopeInput.LOCATION);
                var list = new ListResultOutput<SlopeDto>(slope.MapTo<List<SlopeDto>>());
                return list;
            }
            catch (Exception exception)
            {

                throw exception;
            }
        }

        /// <summary>
        /// 按条件分页查询指定字段，并返回总数
        /// </summary>
        /// <param name="querySlopeInput"></param>
        /// <returns></returns>
        public async Task<PagedResultOutput<SlopeDto>> GetFieldsPageList(QuerySlopeInput querySlopeInput)
        {
            try
            {
                if (querySlopeInput.DISASTERUNITNAME == "" && querySlopeInput.LOCATION == "")
                {
                    var slope = _iSlopeRepository.GetAll()
                        .Select
                        (s => new SlopeDto()
                        {
                            Id = s.Id,
                            UNIFIEDCODE = s.UNIFIEDCODE,
                            DISASTERUNITNAME = s.DISASTERUNITNAME,
                            LOCATION = s.LOCATION,
                            UPDATETIME = s.UPDATETIME,
                            SLOPETYPE=s.SLOPETYPE
                        }
                        )
                        .OrderBy(s => s.UNIFIEDCODE).Skip((querySlopeInput.PageIndex - 1) * querySlopeInput.PageSize).Take(querySlopeInput.PageSize);

                    IReadOnlyList<SlopeDto> ir = slope.MapTo<List<SlopeDto>>();
                    int count = await GetCount(querySlopeInput);

                    PagedResultOutput<SlopeDto> list = new PagedResultOutput<SlopeDto>(count, ir);
                    return list;
                }
                else
                {
                    var slope = _iSlopeRepository.GetAll()
                        .Where(_iSlopeRepository.GetWhere(querySlopeInput.DISASTERUNITNAME, querySlopeInput.LOCATION))
                       .Select
                       (s => new SlopeDto()
                       {
                           Id = s.Id,
                           UNIFIEDCODE = s.UNIFIEDCODE,
                           DISASTERUNITNAME = s.DISASTERUNITNAME,
                           LOCATION = s.LOCATION,
                           UPDATETIME = s.UPDATETIME,
                           SLOPETYPE = s.SLOPETYPE
                       }
                       )
                       .OrderBy(s => s.UNIFIEDCODE).Skip((querySlopeInput.PageIndex - 1) * querySlopeInput.PageSize).Take(querySlopeInput.PageSize);

                    IReadOnlyList<SlopeDto> ir = slope.MapTo<List<SlopeDto>>();
                    int count = await GetCount(querySlopeInput);

                    PagedResultOutput<SlopeDto> list = new PagedResultOutput<SlopeDto>(count, ir);
                    return list;
                }


            }
            catch (Exception exception)
            {

                throw exception;
            }

        }


        /// <summary>
        /// 分页条件查询，并返回总数
        /// </summary>
        /// <param name="querySlopeInput"></param>
        /// <returns></returns>

        public async Task<PagedResultOutput<SlopeDto>> GetPageAndCountList(QuerySlopeInput querySlopeInput)
        {
            try
            {
                var slope = await _iSlopeRepository.GetPageList(querySlopeInput.PageIndex, querySlopeInput.PageSize, querySlopeInput.DISASTERUNITNAME, querySlopeInput.LOCATION);

                IReadOnlyList<SlopeDto> ir = slope.MapTo<List<SlopeDto>>();
                int count = await GetCount(querySlopeInput);
                PagedResultOutput<SlopeDto> list = new PagedResultOutput<SlopeDto>(count, ir);
                return list;


            }
            catch (Exception exception)
            {

                throw exception;
            }
        }

        /// <summary>
        /// 条件查询获取pageCount
        /// </summary>
        /// <param name="querySlopeInput"></param>
        /// <returns>pageCount</returns>
        /// 
        public async Task<int> GetCount(QuerySlopeInput querySlopeInput)
        {
            int pageCount = await _iSlopeRepository.GetPageCount(querySlopeInput.PageIndex, querySlopeInput.PageSize, querySlopeInput.DISASTERUNITNAME, querySlopeInput.LOCATION);
            return pageCount;
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="slopeInput"></param>
        /// <returns></returns>
        /// 
        [UnitOfWork(IsDisabled = true)]
        public async Task<SlopeDto> Insert(SlopeInput slopeInput)
        {
            try
            {
                SlopeEntity slope = new SlopeEntity
                {
                    Id = Guid.NewGuid().ToString(),
                    UNIFIEDCODE = slopeInput.UNIFIEDCODE,
                    DISASTERUNITNAME = slopeInput.DISASTERUNITNAME,
                    SLOPETYPE = slopeInput.SLOPETYPE,
                    LOCATION = slopeInput.LOCATION,
                    UPDATETIME = slopeInput.UPDATETIME
                };
                SlopeEntity entity = await _iSlopeRepository.InsertAsync(slope);
                SlopeDto slopeDtoRtn = entity.MapTo<SlopeDto>();
                return slopeDtoRtn;
            }
            catch (Exception exception)
            {

                throw exception;
            }


        }


        /// <summary>
        /// 根据Id删除
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [UnitOfWork(IsDisabled = true)]
        public async Task DeleteById(string Id)
        {
            try
            {
                await _iSlopeRepository.DeleteAsync(Id);
            }
            catch (Exception exception)
            {

                throw exception;
            }

        }

        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="slopeInput"></param>
        /// <returns></returns>
        [UnitOfWork(IsDisabled = true)]
        public async Task<SlopeDto> Update(SlopeInput slopeInput)
        {
            try
            {
                SlopeEntity slope = new SlopeEntity
                {
                    Id = slopeInput.ID,
                    UNIFIEDCODE = slopeInput.UNIFIEDCODE,
                    DISASTERUNITNAME = slopeInput.DISASTERUNITNAME,
                    SLOPETYPE = slopeInput.SLOPETYPE,
                    UPDATETIME = slopeInput.UPDATETIME,
                    LOCATION = slopeInput.LOCATION
                };
                SlopeEntity entity = await _iSlopeRepository.UpdateAsync(slope);
                SlopeDto SlopeDtoRtn = entity.MapTo<SlopeDto>();
                return SlopeDtoRtn;
            }
            catch (Exception exception)
            {

                throw exception;
            }

        }

    }
}
