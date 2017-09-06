using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;

namespace InfoEarthFrame.Web
{
    public class SSOWebApiWS
    {
        private string SSOUrl = string.Empty;

        public SSOWebApiWS(string ssourl)
        {
            SSOUrl = ssourl;
        }

        /// <summary>
        /// 检查票据的有效性
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        public bool CheckToken(string token)
        {
            string url = "api/SSOAuth/CheckTicket/" + token;
            //创建HttpClient（注意传入HttpClientHandler）
            var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
            using (var http = new HttpClient(handler))
            {
                http.BaseAddress = new Uri(SSOUrl);
                //await异步等待回应
                var response = http.GetAsync(url).Result;
                //确保HTTP成功状态值
                response.EnsureSuccessStatusCode();
                //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                return bool.Parse(response.Content.ReadAsStringAsync().Result);
            }
        }

        /// <summary>
        /// 检查地址的有效性
        /// </summary>
        /// <param name="ticket"></param>
        /// <param name="moduleId"></param>
        /// <param name="weburl"></param>
        /// <returns></returns>
        public bool CheckUrlPermission(string ticket, string moduleId, string weburl)
        {
            string url = "api/SSOAuth/CheckUrlPermission";
            //创建HttpClient（注意传入HttpClientHandler）
            var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
            string businessCode = System.Configuration.ConfigurationManager.AppSettings["businessCode"];
            using (var http = new HttpClient(handler))
            {
                http.BaseAddress = new Uri(SSOUrl);
                //await异步等待回应 //await异步等待回应
                var content = new FormUrlEncodedContent(new Dictionary<string, string>() { { "ticket", ticket }, { "moduleId", moduleId }, { "url", weburl }, { "businessCode", businessCode } });
                var response = http.PostAsync(url, content).Result;
                //确保HTTP成功状态值
                response.EnsureSuccessStatusCode();

                //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                return bool.Parse(response.Content.ReadAsStringAsync().Result);
            }
        }

        public void GetXZQHDatas(string ticket, string userId)
        {
            string url = "http://localhost:4064/api/AuthDistrictZoneListApi/FetchByUserID";
            //创建HttpClient（注意传入HttpClientHandler）
            var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };

            using (var http = new HttpClient(handler))
            {
                http.BaseAddress = new Uri(SSOUrl);
                //await异步等待回应 //await异步等待回应
                http.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", ticket);
                var content = new FormUrlEncodedContent(new[] { new KeyValuePair<string, string>("", userId) });
                var response = http.PostAsync(url, content).Result;
                //确保HTTP成功状态值
                response.EnsureSuccessStatusCode();

                //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                string result = response.Content.ReadAsStringAsync().Result;
            }
        }

        public string GetUserID(string ticket)
        {
            string url = "api/AuthDistrictZoneListApi/GetCurrentUserId";
            //创建HttpClient（注意传入HttpClientHandler）
            var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };

            using (var http = new HttpClient(handler))
            {
                http.BaseAddress = new Uri(SSOUrl);
                //await异步等待回应 //await异步等待回应
                http.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", ticket);
                var response = http.PostAsync(url, null).Result;
                //确保HTTP成功状态值
                response.EnsureSuccessStatusCode();

                //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                return response.Content.ReadAsStringAsync().Result;
            }
        }

        public void GetBusniessMenus(string ticket)
        {
            string businessCode = System.Configuration.ConfigurationManager.AppSettings["businessCode"];
            string url = "http://localhost:4064/api/BusinessMenuApi/GetMenuByBusinessCodeAndUserID/" + businessCode;
            //创建HttpClient（注意传入HttpClientHandler）
            var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
            using (var http = new HttpClient(handler))
            {
                http.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", ticket);
                //await异步等待回应
                var response = http.GetAsync(url).Result;
                //确保HTTP成功状态值
                response.EnsureSuccessStatusCode();
                //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                var menus = (response.Content.ReadAsStringAsync().Result);
            }
        }

        public List<string> GetMenuByBusinessCodeAndUserID(string businessCode)
        {
            if (businessCode == null) throw new ArgumentNullException("businessCode");
            try
            {
                var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
                HttpClient httpClient = new HttpClient(handler);
                string token = WebHelper.GetCookie("Token");
                token = HttpUtility.UrlDecode(token);
                if (token.Contains(','))
                {
                    token = token.Split(',')[0];
                }
                httpClient.BaseAddress = new Uri(SSOUrl);
                httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
                //await异步等待回应
                var response = httpClient.GetAsync("api/BusinessMenuApi/GetMenuByBusinessCodeAndUserID/" + businessCode).Result;
                //确保HTTP成功状态值
                response.EnsureSuccessStatusCode();
                //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                var menus = (response.Content.ReadAsStringAsync().Result);

                return JsonConvert.DeserializeObject<List<string>>(menus);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void ClearTicket()
        {
            try
            {
                var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
                HttpClient httpClient = new HttpClient(handler);
                string token = WebHelper.GetCookie("Token");
                token = HttpUtility.UrlDecode(token);
                if (token.Contains(','))
                {
                    token = token.Split(',')[0];
                }
                httpClient.BaseAddress = new Uri(SSOUrl);
                //httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
                //await异步等待回应
                var response = httpClient.GetAsync("api/SSOAuth/ClearTicket/" + token).Result;
                //确保HTTP成功状态值
                response.EnsureSuccessStatusCode();
                //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                var result = (response.Content.ReadAsStringAsync().Result);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public string GetUserInfo()
        {
            try
            {
                var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
                HttpClient httpClient = new HttpClient(handler);
                string token = WebHelper.GetCookie("Token");
                token = HttpUtility.UrlDecode(token);
                if (token.Contains(','))
                {
                    token = token.Split(',')[0];
                }
                httpClient.BaseAddress = new Uri(SSOUrl);
                httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
                //await异步等待回应
                var response = httpClient.GetAsync("api/SSOAuth/GetUserInfoByTicket/" + token).Result;
                //确保HTTP成功状态值
                response.EnsureSuccessStatusCode();
                //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                var result = (response.Content.ReadAsStringAsync().Result);
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}