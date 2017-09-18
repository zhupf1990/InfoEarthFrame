﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core;

namespace InfoEarthFrame.Application
{
    [AutoMapFrom(typeof(DisasterEntity))]
    public class DisasterOutput : IOutputDto
    {

        public int Id { get; set; }
        /// <summary>
        /// 灾害点名称
        /// </summary>

      
        public string DISASTERNAME { get; set; }

        /// <summary>
        /// 发生时间
        /// </summary>

        public DateTime OCCURTIME { get; set; }

        /// <summary>
        /// 具体位置
        /// </summary>
    
        public string POSITION { get; set; }

        /// <summary>
        /// 备注
        /// </summary>

        public string REMARK { get; set; }

        /// <summary>
        /// 所属区域
        /// </summary>
     
        public string AREARIGHTCODE
        {
            get;
            set;
        }
    
        public bool IsDeleted
        {
            get;
            set;
        }
    }
}