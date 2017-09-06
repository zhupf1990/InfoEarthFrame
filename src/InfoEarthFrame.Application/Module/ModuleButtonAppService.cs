using Abp.Application.Services;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Core;
using InfoEarthFrame.Module.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Abp.AutoMapper;

namespace InfoEarthFrame.Module
{
    public class ModuleButtonAppService : ApplicationService, IModuleButtonAppService
    {
        private readonly IModuleButtonRepository _moduleButtonRepository;

        public ModuleButtonAppService(IModuleButtonRepository moduleButtonRepository)
        {
            _moduleButtonRepository = moduleButtonRepository;
        }

        public List<ModuleButtonDTO> GetList()
        {
            try
            {
                var result = _moduleButtonRepository.GetAll().OrderBy(t => t.F_SortCode);
                var outputList = result.MapTo<List<ModuleButtonDTO>>();
                return outputList;
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        public List<ModuleButtonDTO> GetList(string moduleId)
        {
            var result = _moduleButtonRepository.GetAll().Where(t=>t.F_ModuleId==moduleId).OrderBy(t => t.F_SortCode);
            var outputList = result.MapTo<List<ModuleButtonDTO>>();
            return outputList;
        }

        public ModuleButtonDTO GetEntity(string keyValue)
        {
            return _moduleButtonRepository.Get(keyValue).MapTo<ModuleButtonDTO>();
        }

        public void AddEntity(ModuleButtonDTO moduleButtonEntity)
        {
            var entity = moduleButtonEntity.MapTo<ModuleButtonEntity>();
            if(string.IsNullOrEmpty(entity.Id))
            {
                entity.Id = Guid.NewGuid().ToString();
            }

            _moduleButtonRepository.InsertOrUpdate(entity);
        }
    }
}
