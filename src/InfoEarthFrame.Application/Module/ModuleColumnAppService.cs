using Abp.Application.Services;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Module.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Abp.AutoMapper;
using InfoEarthFrame.Core;

namespace InfoEarthFrame.Module
{
    public class ModuleColumnAppService : ApplicationService, IModuleColumnAppService
    {
        private readonly IModuleColumnRepository _moduleColumnRepository;

        public ModuleColumnAppService(IModuleColumnRepository moduleColumnRepository)
        {
            _moduleColumnRepository = moduleColumnRepository;
        }

        public List<ModuleColumnDTO> GetList()
        {
            var result = _moduleColumnRepository.GetAll().OrderBy(t => t.F_SortCode);
            var outputList = result.MapTo<List<ModuleColumnDTO>>();
            return outputList;
        }

        public List<ModuleColumnDTO> GetList(string moduleId)
        {
            var result = _moduleColumnRepository.GetAll().Where(t => t.F_ModuleId == moduleId).OrderBy(t => t.F_SortCode);
            var outputList = result.MapTo<List<ModuleColumnDTO>>();
            return outputList;
        }

        public ModuleColumnDTO GetEntity(string keyValue)
        {
            return _moduleColumnRepository.Get(keyValue).MapTo<ModuleColumnDTO>();
        }

        public void AddEntity(ModuleColumnDTO moduleColumnEntity)
        {
            var entity = moduleColumnEntity.MapTo<ModuleColumnEntity>();
            if (string.IsNullOrEmpty(entity.Id))
            {
                entity.Id = Guid.NewGuid().ToString();
            }

            _moduleColumnRepository.InsertOrUpdate(entity);
        }
    }
}
