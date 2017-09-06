using Abp.Application.Services.Dto;
using InfoEarthFrame.Common;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Module.Dtos
{
    public class ModuleDTO : EntityDto<string>
    {
        public string F_ParentId { get; set; }
       
        public string F_EnCode { get; set; }
      
        public string F_FullName { get; set; }
       
        public string F_Icon { get; set; }
       
        public string F_UrlAddress { get; set; }
       
        public string F_Target { get; set; }
       
        public int? F_IsMenu { get; set; }
       
        public int? F_AllowExpand { get; set; }
       
        public int? F_IsPublic { get; set; }
       
        public int? F_AllowEdit { get; set; }
       
        public int? F_AllowDelete { get; set; }
       
        public int? F_SortCode { get; set; }
      
        public int? F_DeleteMark { get; set; }
        
        public int? F_EnabledMark { get; set; }
       
        public string F_Description { get; set; }

        //[JsonConverter(typeof(DateTimeConverter))]
        public DateTime? F_CreateDate { get; set; }
       
        public string F_CreateUserId { get; set; }
       
        public string F_CreateUserName { get; set; }

        //[JsonConverter(typeof(DateTimeConverter))]
        public DateTime? F_ModifyDate { get; set; }
      
        public string F_ModifyUserId { get; set; }
       
        public string F_ModifyUserName { get; set; }
       
    }
}
