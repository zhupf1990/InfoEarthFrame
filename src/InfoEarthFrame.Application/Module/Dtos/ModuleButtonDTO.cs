﻿using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Module.Dtos
{
    public class ModuleButtonDTO : EntityDto<string>
    {
        public string F_ModuleId { get; set; }
        
        public string F_ParentId { get; set; }
       
        public string F_Icon { get; set; }
     
        public string F_EnCode { get; set; }
      
        public string F_FullName { get; set; }
       
        public string F_ActionAddress { get; set; }
       
        public int? F_SortCode { get; set; }
       
    }
}
