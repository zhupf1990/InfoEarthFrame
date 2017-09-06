using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Common
{
    public class TreeEntity
    {
        public string pId { get; set; }
        public string id { get; set; }
        public string label { get; set; }
        public string value { get; set; }
      
        /// <summary>
        /// 是否有子节点
        /// </summary>
        public bool hasChildren { get; set; }
        /// <summary>
        /// 图片
        /// </summary>
        public string img { get; set; }
       
    }
}
