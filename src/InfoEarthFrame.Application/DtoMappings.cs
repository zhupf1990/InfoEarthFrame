using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

using InfoEarthFrame.Core;
using InfoEarthFrame.Module.Dtos;

namespace InfoEarthFrame
{
    internal static class DtoMappings
    {
        public static void Map()
        {
            //I specified mapping for AssignedPersonId since NHibernate does not fill Task.AssignedPersonId
            //If you will just use EF, then you can remove ForMember definition.
            //Mapper.CreateMap<Task, TaskDto>().ForMember(t => t.AssignedPersonId, opts => opts.MapFrom(d => d.AssignedPerson.Id));
            Mapper.CreateMap<ModuleEntity, ModuleDTO>();
            Mapper.CreateMap<ModuleButtonEntity, ModuleButtonDTO>();
            Mapper.CreateMap<ModuleColumnEntity, ModuleColumnDTO>();
            Mapper.CreateMap<ModuleDTO,ModuleEntity>();
            Mapper.CreateMap<ModuleButtonDTO,ModuleButtonEntity>();
            Mapper.CreateMap<ModuleColumnDTO,ModuleColumnEntity>();
        }
    }
}
