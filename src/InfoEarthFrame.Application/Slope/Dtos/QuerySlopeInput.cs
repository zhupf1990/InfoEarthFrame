using Abp.Application.Services.Dto;
using InfoEarthFrame.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Application
{
    public class QuerySlopeInput : PageInfo
    {
        public string DISASTERUNITNAME { get; set; }
        public string LOCATION { get; set; }
    }
}
