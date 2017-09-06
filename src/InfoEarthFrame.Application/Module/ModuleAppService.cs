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
    public class ModuleAppService : ApplicationService, IModuleAppService
    {
        private readonly IModuleRepository _moduleRepository;
        private readonly IModuleButtonRepository _moduleButtonRepository;
        private readonly IModuleColumnRepository _moduleColumnRepository;

        public ModuleAppService(IModuleRepository moduleRepository, IModuleButtonRepository moduleButtonRepository, IModuleColumnRepository moduleColumnRepository)
        {
            _moduleRepository = moduleRepository;
            _moduleButtonRepository = moduleButtonRepository;
            _moduleColumnRepository = moduleColumnRepository;
        }

        public int GetSortCode()
        {
            int? sortCode = _moduleRepository.GetAll().Max(t => t.F_SortCode);
            if (!sortCode.HasValue)
            {
                return sortCode.Value + 1;
            }
            return 100001;
        }

        public List<ModuleDTO> GetList()
        {
            var result = _moduleRepository.GetAll().OrderBy(t => t.F_SortCode);
            var outputList =result.MapTo<List<ModuleDTO>>();
            return outputList;
        }

        public ModuleDTO GetEntity(string keyValue)
        {
            return _moduleRepository.Get(keyValue).MapTo<ModuleDTO>();
        }

        public bool ExistEnCode(string enCode, string keyValue)
        {
            var query = _moduleRepository.GetAll();
            query = query.Where(t => t.F_EnCode == enCode);
            if (!string.IsNullOrEmpty(keyValue))
            {
                query = query.Where(t => t.Id != keyValue);
            }
            return query.Count() == 0 ? true : false;
        }

        public bool ExistFullName(string fullName, string keyValue)
        {
            var query = _moduleRepository.GetAll();
            query = query.Where(t => t.F_FullName == fullName);
            if (!string.IsNullOrEmpty(keyValue))
            {
                query = query.Where(t => t.Id != keyValue);
            }
            return query.Count() == 0 ? true : false;
        }

        public string RemoveForm(string keyValue)
        {
            int count = _moduleRepository.GetAll().Where(t => t.F_ParentId == keyValue).Count();
            if (count > 0)
            {
                return ("当前所选数据有子节点数据！");
            }
            _moduleColumnRepository.Delete(t => t.F_ModuleId.Equals(keyValue));
            _moduleButtonRepository.Delete(t => t.F_ModuleId.Equals(keyValue));
            _moduleRepository.Delete(keyValue);
            return "删除成功！";
        }

        public void SaveForm(ModuleInfoDTO moduleEntity)
        {
            try
            {
                var moduleDTO = moduleEntity.ModuleDTO.MapTo<ModuleEntity>();
                if (!string.IsNullOrEmpty(moduleDTO.Id))
                {
                    _moduleRepository.Update(moduleDTO);
                }
                else
                {
                    moduleDTO.Id = Guid.NewGuid().ToString();
                    _moduleRepository.Insert(moduleDTO);
                }
                _moduleButtonRepository.Delete(t => t.F_ModuleId.Equals(moduleDTO.Id));

                if (moduleEntity.ModuleButtonDTOList != null)
                {
                    var moduleButtons = moduleEntity.ModuleButtonDTOList.MapTo<List<ModuleButtonEntity>>();
                    foreach (var item in moduleButtons)
                    {
                        if (item.Id == null)
                        {
                            item.Id = Guid.NewGuid().ToString();
                        }
                        //item.Create();解决代码生成器自动生成按钮报错问题 bugatti 2017-04-11
                        item.F_ModuleId = moduleDTO.Id;
                        _moduleButtonRepository.Insert(item);
                    }
                }
                //_moduleColumnRepository.Delete(t => t.F_ModuleId.Equals(keyValue));
                //if (moduleColumnList != null)
                //{
                //    var moduleColumns = moduleColumnList.MapTo<List<ModuleColumnEntity>>();
                //    foreach (var item in moduleColumns)
                //    {
                //        _moduleColumnRepository.Insert(item);
                //    }
                //}

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
