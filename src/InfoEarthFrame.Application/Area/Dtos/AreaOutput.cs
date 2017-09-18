using System;
using System.Collections.Generic;
using iTelluro.SYS.Entity;

namespace InfoEarthFrame.Application
{
    public class AreaOutput : DistrictDict
    {
        /// <summary>
        /// 树形显示的参数
        /// </summary>
        public string Label { get; set; }
        /// <summary>
        /// 树形显示的参数叶子节点
        /// </summary>
        public object[] Children { get; set; }
    }
    public class TownOutput : Town
    {
        /// <summary>
        /// 树形显示的参数
        /// </summary>
        public string Label { get; set; }
        /// <summary>
        /// 树形显示的参数叶子节点
        /// </summary>
        public object[] Children { get; set; }
        public string DistrictCode { get; set; }
        
    }
}
