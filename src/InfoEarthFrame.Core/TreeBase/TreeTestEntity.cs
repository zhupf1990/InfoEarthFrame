using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;
using System.ComponentModel.DataAnnotations;

namespace InfoEarthFrame.Core
{
    [Table("TreeTest")]
    public class TreeTestEntity : Entity<string>
    {
        /// <summary>
        /// PID
        /// </summary>
        [MaxLength(100)]
        public string ParentID { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        [MaxLength(150)]
        public string Name { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        public int Sn { get; set; }

        /// <summary>
        /// Other1
        /// </summary>
        [MaxLength(100)]
        public string Other1 { get; set; }

        /// <summary>
        /// Other2
        /// </summary>
        [MaxLength(100)]
        public string Other2 { get; set; }
    }
}
