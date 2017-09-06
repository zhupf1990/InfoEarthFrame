using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iTelluro.WebApi.Filter
{
    /// <summary>
    /// 特性(不记录日志的标志)
    /// </summary>
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false)]
    public class WebApiNoTrackerAttribute:Attribute
    {
    }
}
