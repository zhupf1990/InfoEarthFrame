using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace iTelluro.WebApi.Filter
{
    /// <summary>  
    /// 表示允许跨域请求  
    /// </summary>  
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false)]
    public class ApiCorsPolicyAttribute : Attribute, ICorsPolicyProvider
    {
        private readonly CorsPolicy _policy;
        /// <summary>  
        /// 表示允许跨域请求  
        /// </summary>  
        public ApiCorsPolicyAttribute()
        {
            _policy = new CorsPolicy
            {
                AllowAnyMethod = true,
                AllowAnyHeader = true
            };
            //_policy.Origins.Add("http://localhost:24102");
            //_policy.Origins.Add("http://sedo.wec.com");
            //_policy.Origins.Add("http://xq.duy001.com");
            //_policy.Origins.Add("http://kuaiche.35.com");
            //_policy.Origins.Add("http://zhudeshou.qdqcewl.com");
            //_policy.Origins.Add("http://qtebb.tuieeguangdashi.cn");
        }
        /// <summary>  
        /// 表示允许跨域请求  
        /// </summary>  
        /// <param name="origins">允许的Cors来源Url，默认对所有来源启用</param>  
        public ApiCorsPolicyAttribute(string origins = null)
        {
            // Create a CORS policy.  
            _policy = new CorsPolicy
            {
                AllowAnyMethod = true,
                AllowAnyHeader = true
            };
            if (string.IsNullOrEmpty(origins))
            {
                _policy.AllowAnyOrigin = true;
            }
            else
            {
                //_policy.Origins.Add("http://localhost:24102");
                //_policy.Origins.Add("http://192.168.1.255:8089");
                //_policy.Origins.Add("http://192.168.1.255:8088");
                //_policy.Origins.Add("http://localhost:56005");
                //_policy.Origins.Add("http://198.18.0.290:8921");
                //_policy.Origins.Add("http://192.168.2.243:8693");
                //_policy.Origins.Add("http://xpmdex.webuy01.com");
                origins.Split(',').ToList().ForEach(s => _policy.Origins.Add(s));
            }
        }
        public Task<CorsPolicy> GetCorsPolicyAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            return Task.FromResult(_policy);
        }
    }  
}
