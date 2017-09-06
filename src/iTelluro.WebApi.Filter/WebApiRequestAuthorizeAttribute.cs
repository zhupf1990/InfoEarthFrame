using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;

namespace iTelluro.WebApi.Filter
{
    public class RequestAuthorizeAttribute : AuthorizeAttribute
    {
        //重写基类的验证方式，加入我们自定义的Ticket验证//验证WebApi的
        public override void OnAuthorization(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            //从http请求的头里面获取身份验证信息，验证是否是请求发起方的ticket
            var authorization = actionContext.Request.Headers.Authorization;
            //如果取不到身份验证信息，并且不允许匿名访问，则返回未验证401
            if (authorization == null)
            {
                var attributesA = actionContext.ActionDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().OfType<AllowAnonymousAttribute>();
                var attributesC = actionContext.ControllerContext.ControllerDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().OfType<AllowAnonymousAttribute>();
                bool isAnonymousA = attributesA.Any(a => a is AllowAnonymousAttribute);
                bool isAnonymousC = attributesC.Any(a => a is AllowAnonymousAttribute);
                if (isAnonymousA || isAnonymousC)
                {
                    base.OnAuthorization(actionContext);
                }
                else
                {
                    HandleUnauthorizedRequest(actionContext);
                }

            }
            else
            {
                //解密用户ticket,并校验用户名密码是否匹配
                string encryptTicket = "";
                if (authorization != null)
                {
                    encryptTicket = authorization.ToString();
                }
                if (authorization.Parameter != null)
                {
                    encryptTicket = authorization.Parameter;
                }
                if (ValidateTicket(encryptTicket))
                {
                    base.IsAuthorized(actionContext);
                }
                else
                {
                    HandleUnauthorizedRequest(actionContext);
                }
            }
        }

        protected override void HandleUnauthorizedRequest(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            base.HandleUnauthorizedRequest(actionContext);
            var response = actionContext.Response = actionContext.Response ?? new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.Forbidden;
            response.Content = new StringContent("服务器拒绝访问,token值已过期,请重新获取token值", Encoding.UTF8);
        }

        //校验ticket是否有效
        private bool ValidateTicket(string ticket)
        {
            ticket = ticket.Split(',')[0];
            var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
            HttpClient httpClient = new HttpClient(handler);
            string url = System.Configuration.ConfigurationManager.AppSettings["WebBusinessUrl"];
            httpClient.BaseAddress = new Uri(url);
            //await异步等待回应
            var response = httpClient.GetAsync("api/SSOAuth/CheckTicket/" + ticket).Result;
            //确保HTTP成功状态值
            response.EnsureSuccessStatusCode();
            //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
            bool result =bool.Parse(response.Content.ReadAsStringAsync().Result);
            return result;
        }
    }
}