using System;
using System.Collections.Generic;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application
{
    public class TreeListDto : EntityDto
    {
        /// <summary>
        /// ID
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// PID
        /// </summary>
        public string ParentID { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        public int Sn { get; set; }

        public List<TreeListDto> ChildNode { get; set; }
    }
}
