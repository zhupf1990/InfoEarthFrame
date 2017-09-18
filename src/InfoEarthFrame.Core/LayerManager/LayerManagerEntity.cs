using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Core
{
    [Table("TBL_LAYERMANAGER")]
    public class Tbl_LayerManager : Entity<string>
    {
        /// <summary>
        /// 父ID
        /// </summary>
        [MaxLength(128)]
        public string PID { get; set; }
        /// <summary>
        /// 标题文本
        /// </summary>
        [MaxLength(200)]
        public string LABEL { get; set; }
        /// <summary>
        /// 放大总级数
        /// </summary>
        public int? ZOOMLEVEL { get; set; }
        /// <summary>
        /// 图层url
        /// </summary>
        [MaxLength(200)]
        public string URL { get; set; }
        /// <summary>
        /// 数据服务Key值
        /// </summary>
        [MaxLength(200)]
        public string DATASERVERKEY { get; set; }
        /// <summary>
        /// 切片大小
        /// </summary>
        public int? TILESIZE { get; set; }
        /// <summary>
        /// 零级大小
        /// </summary>
        [MaxLength(200)]
        public string ZEROLEVELSIZE { get; set; }
        /// <summary>
        /// 图片类型
        /// </summary>
        [MaxLength(200)]
        public string PICTYPE { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CREATETIME { get; set; }

    }
    public class PageData
    {
        public List<Tbl_LayerManager> data { get; set; }
        public int counts { get; set; }

    }
}
