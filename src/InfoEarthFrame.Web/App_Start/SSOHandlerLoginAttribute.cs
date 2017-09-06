using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace InfoEarthFrame.Web
{
    public class SSOHandlerLoginAttribute : AuthorizeAttribute
    {
        private string SSOUrl = System.Configuration.ConfigurationManager.AppSettings["SSOUrl"];

        private string _token = string.Empty;

        private SSOWebApiWS _ssoWS = null;

        public SSOHandlerLoginAttribute()
        {
            _ssoWS = new SSOWebApiWS(SSOUrl);
        }

        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            //判断是否忽略SSO验证
            var attributes = filterContext.ActionDescriptor.GetCustomAttributes(typeof(AllowAnonymousAttribute), true);
            bool isAnonymous = attributes.Any(a => a is AllowAnonymousAttribute);
            if (isAnonymous)
            {
                return;
            }

            HttpRequestBase Request = filterContext.HttpContext.Request;
            //路由信息
            RouteValueDictionary routes = filterContext.RouteData.Values;
            //QueryString信息
            NameValueCollection queryString = Request.QueryString;
            string baseUrl = Request.Url.ToString();
            var areaName = filterContext.RouteData.DataTokens["area"];
            string controller = routes["controller"].ToString();
            string action = routes["action"].ToString();
            string url = string.Empty;
            if (baseUrl.Contains('?'))
            {
                url = baseUrl.Substring(0, baseUrl.IndexOf('?'));//截取页面的url
            }
            else
            {
                url = baseUrl;
            }
            //获取token信息
            TryFetchToken(filterContext);
            //地址中去掉Token参数
            int index = 0;
            for (int i = 0; i < queryString.Count; i++)
            {
                string qk = queryString.GetKey(i);
                string qkValue = queryString.Get(i);
                if (qk == "Token")
                {
                    continue;
                }
                if (index == 0)
                {
                    url += "?" + qk + "=" + qkValue;
                }
                else
                {
                    url += "&" + qk + "=" + qkValue;
                }
                index++;
            }

            if (!Request.IsAuthenticated && string.IsNullOrEmpty(_token))
            {
                //没有带token信息,缓存中没有token信息,直接跳转登陆页面
                filterContext.Result = new RedirectResult(SSOUrl + "Login/SSOIndex?BackURL=" + url);
                return;
            }

            //验证token的有效性
            string tiket = _token.Split(',')[0];
            if (!_ssoWS.CheckToken(tiket))
            {
                filterContext.Result = new RedirectResult(SSOUrl + "Login/SSOIndex?BackURL=" + url);
                return;
            }
            //去掉Token后重新定位
            if (!string.IsNullOrEmpty(queryString.Get("Token")))
            {
                filterContext.Result = new RedirectResult(url);
                return;
            }
            ////检测页面权限
            //if (url.Contains('?'))
            //{
            //    url = url.Substring(0, url.IndexOf('?'));//截取页面的url
            //}
            //string moudelId = WebHelper.GetCookie("currentmoduleId");
            //if (string.IsNullOrEmpty(moudelId))
            //{
            //    moudelId = "";
            //}
            //string webUrl = string.Empty;
            //if (areaName != null)
            //{
            //    webUrl += "/" + areaName.ToString();
            //}
            //webUrl += "/" + controller + "/" + action;
            ////检查权限
            //if (!CheckUrlPermission(tiket, moudelId, webUrl))
            //{
            //   // filterContext.HttpContext.Response.Redirect(SSOUrl + "AccessDeny/Index");
            //    return;
            //}
        }

        /// <summary>
        /// 从RquestUrl、Cookie或者Session中获得Token值
        /// 结果保存在成员变量token中，默认情况下token值为string.Empty
        /// </summary>
        private void TryFetchToken(AuthorizationContext filterContext)
        {
            _token = string.Empty;
            if (!string.IsNullOrEmpty(filterContext.HttpContext.Request.QueryString.Get("Token")))
            {
                _token = filterContext.HttpContext.Request.QueryString.Get("Token");
                _token = HttpUtility.UrlDecode(_token);
                filterContext.HttpContext.Response.Cookies.Add(new HttpCookie("Token", _token));
            }
            else
            {
                var cookie = filterContext.HttpContext.Request.Cookies["Token"];
                if (cookie != null && !string.IsNullOrEmpty(cookie.Value))
                {
                    _token = cookie.Value;
                    _token = HttpUtility.UrlDecode(_token);
                }
            }
        }
    }
}