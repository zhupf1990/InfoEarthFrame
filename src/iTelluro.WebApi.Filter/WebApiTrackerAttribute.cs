using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace iTelluro.WebApi.Filter
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false)]
    public class WebApiTrackerAttribute : ActionFilterAttribute
    {
        private readonly string _key = "_thisWebApiOnActionMonitorLog_";
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            var attributesA = actionContext.ActionDescriptor.GetCustomAttributes<WebApiNoTrackerAttribute>().OfType<WebApiNoTrackerAttribute>();
            var attributesC = actionContext.ControllerContext.ControllerDescriptor.GetCustomAttributes<WebApiNoTrackerAttribute>().OfType<WebApiNoTrackerAttribute>();
            bool isNoTrackerA = attributesA.Any(a => a is WebApiNoTrackerAttribute);
            bool isNoTrackerC = attributesC.Any(a => a is WebApiNoTrackerAttribute);
            bool isLog = true;
            if (isNoTrackerA || isNoTrackerC)
            {
                isLog = false;
            }
            else
            {
                isLog = true;
            }
            actionContext.Request.Properties["_thisActionIsLog_"] = isLog;
            if (isLog)
            {
                WebApiMonitorLogInfo logInfo = new WebApiMonitorLogInfo();
                logInfo.F_ExecuteStartTime = DateTime.Now;
                logInfo.Watch = new Stopwatch();
                logInfo.Watch.Start();
                //获取Action 参数
                logInfo.ActionParams = actionContext.ActionArguments;
                logInfo.F_HttpRequestHeaders = actionContext.Request.Headers.ToString();
                logInfo.F_HttpMethod = actionContext.Request.Method.Method;

                actionContext.Request.Properties[_key] = logInfo;

                var form = System.Web.HttpContext.Current.Request.Form;

                #region 如果参数是实体对象，获取序列化后的数据(Post请求)

                Stream stream = actionContext.Request.Content.ReadAsStreamAsync().Result;
                Encoding encoding = Encoding.UTF8;
                stream.Position = 0;
                string responseData = "";
                using (StreamReader reader = new StreamReader(stream, encoding))
                {
                    responseData = reader.ReadToEnd().ToString();
                }
                if (!string.IsNullOrWhiteSpace(responseData) && !logInfo.ActionParams.ContainsKey("_EntityParamsList_"))
                {
                    logInfo.ActionParams["_EntityParamsList_"] = responseData;
                }

                #endregion
            }
            base.OnActionExecuting(actionContext);

        }

        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            bool isLog = bool.Parse(actionExecutedContext.Request.Properties["_thisActionIsLog_"].ToString());
            if (isLog)
            {
                WebApiMonitorLogInfo logInfo = actionExecutedContext.Request.Properties[_key] as WebApiMonitorLogInfo;
                logInfo.F_ExecuteEndTime = DateTime.Now;
                logInfo.Watch.Stop();
                logInfo.F_ExecuteTime = logInfo.Watch.ElapsedMilliseconds / 1000.0;
                logInfo.F_IP = logInfo.GetRequestIP();
                logInfo.ActionName = actionExecutedContext.ActionContext.ActionDescriptor.ActionName;
                logInfo.ControllerName = actionExecutedContext.ActionContext.ActionDescriptor.ControllerDescriptor.ControllerName;
                logInfo.F_WebApiUrl = "http://" + actionExecutedContext.Request.RequestUri.Host + ":" + actionExecutedContext.Request.RequestUri.Port + actionExecutedContext.Request.RequestUri.AbsolutePath;
                logInfo.F_FullUrl = actionExecutedContext.Request.RequestUri.ToString();
                //foreach (var item in logInfo.ActionParams)
                //{
                //    if (item.Value != null)
                //    {
                //        logInfo.F_WebApiUrl = logInfo.F_WebApiUrl.Replace(item.Value.ToString(), "");
                //    }
                //}
                //logInfo.F_WebApiUrl = logInfo.F_WebApiUrl.TrimEnd('/');

                logInfo.F_MethodParam = logInfo.GetMethodParam(logInfo.ActionParams);
                logInfo.F_STAUE = "1";
                try
                {
                    if (actionExecutedContext.Response != null && actionExecutedContext.Response.Content != null)
                    {
                        logInfo.F_Result = actionExecutedContext.Response.Content.ReadAsStringAsync().Result;
                    }
                }
                catch (Exception ex)
                {
                    logInfo.F_Result = ex.Message;
                    logInfo.F_STAUE = "0";
                }

                if (actionExecutedContext.Exception != null)
                {
                    logInfo.F_Exception = actionExecutedContext.Exception.Message;
                    logInfo.F_STAUE = "0";
                }
                //写日志
                SaveLog(logInfo);
            }
            base.OnActionExecuted(actionExecutedContext);
        }

        private void SaveLog(WebApiMonitorLogInfo log)
        {
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(log);
            var contentJson = new StringContent(json, Encoding.UTF8, "application/json");
            var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
            HttpClient httpClient = new HttpClient(handler);
            string url = System.Configuration.ConfigurationManager.AppSettings["WebBusinessUrl"];
            httpClient.BaseAddress = new Uri(url);
            //await异步等待回应
            var response = httpClient.PostAsync("api/V1/WebApiLog/SaveLog", contentJson).Result;
            //确保HTTP成功状态值
            response.EnsureSuccessStatusCode();
            //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
            var result = (response.Content.ReadAsStringAsync().Result);
        }
    }
}
