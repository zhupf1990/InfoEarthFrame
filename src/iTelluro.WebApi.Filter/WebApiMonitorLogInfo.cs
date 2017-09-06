using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iTelluro.WebApi.Filter
{
/// <summary>
    /// 监控日志对象
    /// </summary>
    [JsonObject(MemberSerialization.OptOut)]
    public class WebApiMonitorLogInfo
    {
        [JsonIgnore]
        public string ControllerName
        {
            get;
            set;
        }

        [JsonIgnore]
        public string ActionName
        {
            get;
            set;
        }

        public DateTime F_ExecuteStartTime
        {
            get;
            set;
        }

        public DateTime F_ExecuteEndTime
        {
            get;
            set;
        }

        /// <summary>
        /// 执行时间
        /// </summary>
        public double F_ExecuteTime { get; set; }

        /// <summary>
        /// 计时器
        /// </summary>
        [JsonIgnore]
        public Stopwatch Watch { get; set; }

        /// <summary>
        /// 请求的Action 参数
        /// </summary>
        [JsonIgnore]
        public Dictionary<string, object> ActionParams
        {
            get;
            set;
        }

        /// <summary>
        /// 方法参数
        /// </summary>
        public string F_MethodParam { get; set; }

        /// <summary>
        /// Http请求头
        /// </summary>
        public string F_HttpRequestHeaders
        {
            get;
            set;
        }

        /// <summary>
        /// 请求方式
        /// </summary>
        public string F_HttpMethod
        {
            get;
            set;
        }

        /// <summary>
        /// 请求的IP地址
        /// </summary>
        public string F_IP
        {
            get;
            set;
        }

        /// <summary>
        /// 异常信息
        /// </summary>
        public string F_Exception { get; set; }

        /// <summary>
        /// 方法返回的结果
        /// </summary>
        public string F_Result { get; set; }

        /// <summary>
        /// Api的路由地址
        /// </summary>
        public string F_WebApiUrl { get; set; }

        /// <summary>
        /// 请求的全地址
        /// </summary>
        public string F_FullUrl { get; set; }

        /// <summary>
        /// 执行状态
        /// </summary>
        public string F_STAUE { get; set; }

        /// <summary>
        /// 获取监控指标日志
        /// </summary>
        /// <param name="mtype"></param>
        /// <returns></returns>
        public string GetLoginfo()
        {
            string Msg = @"
            Action执行时间监控：
            ControllerName：{0}Controller
            ActionName:{1}
            开始时间：{2}
            结束时间：{3}
            总 时 间：{4}秒
            Action参数：{5}
            Http请求头:{6}
            客户端IP：{7},
            HttpMethod:{8}
                    ";
            return string.Format(Msg,
                ControllerName,
                ActionName,
                F_ExecuteStartTime,
                F_ExecuteEndTime,
                (F_ExecuteEndTime - F_ExecuteStartTime).TotalSeconds,
                GetMethodParam(ActionParams),
                 F_HttpRequestHeaders,
                F_IP,
                F_HttpMethod);
        }

        /// <summary>
        /// 获取Action 参数
        /// </summary>
        /// <param name="Collections"></param>
        /// <returns></returns>
        public string GetMethodParam(Dictionary<string, object> Collections)
        {
            string Parameters = string.Empty;
            if (Collections == null || Collections.Count == 0)
            {
                return Parameters;
            }
            foreach (string key in Collections.Keys)
            {
                Parameters += string.Format("{0}={1}$", key, Collections[key]);
            }
            if (!string.IsNullOrWhiteSpace(Parameters) && Parameters.EndsWith("$"))
            {
                Parameters = Parameters.Substring(0, Parameters.Length - 1);
            }
            return Parameters;
        }

        /// <summary>
        /// 获取IP
        /// </summary>
        /// <returns></returns>
        public string GetRequestIP()
        {
            string ip = string.Empty;
            if (!string.IsNullOrEmpty(System.Web.HttpContext.Current.Request.ServerVariables["HTTP_VIA"]))
            {
                ip = Convert.ToString(System.Web.HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"]);
            }
            if (string.IsNullOrEmpty(ip))
            {
                ip = Convert.ToString(System.Web.HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"]);
            }
            return ip;
        }
    }
}
