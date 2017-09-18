using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using InfoEarthFrame.Common;
using System.Collections.Generic;
using System.Web.Script.Serialization;
using System.IO;
using System;
using System.Configuration;
using Thinktecture.IdentityModel.Clients;
using InfoEarthFrame.Util.Offices;
using System.Data;
using InfoEarthFrame.Module;

namespace InfoEarthFrame.Web.Controllers
{
    [SSOHandlerLogin]
    public class HomeController : InfoEarthFrameControllerBase
    {

        private IModuleAppService _appService;
        private string SSOUrl = System.Configuration.ConfigurationManager.AppSettings["SSOUrl"];

        private SSOWebApiWS _ssoWS = null;

        public HomeController(IModuleAppService appService)
        {
            _appService = appService;
            _ssoWS = new SSOWebApiWS(SSOUrl);
        }

        public ActionResult Index()
        {
            _appService.GetSortCode();
            //_appService.GetList();
            //string userPhone = "System";
            //string passWord = "0000";

            //string url = ConfigurationManager.AppSettings["AuthorityUrl"];// "http://dz.infoearth.com:8000/identityserver/core";
            //var tokenUrl = new Uri(url + "/connect/token");
            //OAuth2Client client1 = new OAuth2Client(tokenUrl, "roclient", "secret");//配置验证方式
            //ViewBag.token = client1.RequestAccessTokenUserName(userPhone, passWord, "sampleApi read write").AccessToken;//获取TOKEN
            ViewBag.token = WebHelper.GetCookie("Token");


            //this.GetUserInfo();

            //InfoEarthFrame.Area.AreaAppService objAreaAppService = new Area.AreaAppService();

            //InfoEarthFrame.Area.ProvincesQuery pq = new Area.ProvincesQuery();
            //pq.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJjbGllbnRfaWQiOiJtdmMzIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInJvbGVzIiwic2FtcGxlQXBpIl0sInN1YiI6IjE3MyIsImFtciI6WyJwYXNzd29yZCJdLCJhdXRoX3RpbWUiOjE0ODIzOTkzNTYsImlkcCI6Imlkc3J2IiwibmFtZSI6ImM1ZmFkOWMyLTM1MDEtNDNjYi04NDhlLTg2MzIzNjJkOWU1MyIsImdpdmVuX25hbWUiOiJhZG1pbiIsImZhbWlseV9uYW1lIjoi566h55CG5ZGYIiwiZ2VuZGVyIjoiRiIsImlkIjoiMTczIiwic2VjcmV0IjoiY2E1NWM2OTdhZGRiYTk5YTY0Y2JmYTUyNjYwMmM0ODkiLCJhZGRyZXNzIjoiNGQ4NzhjYzE2NWM1ZjYxZSIsIm1pZGRsZV9uYW1lIjoiQXZlZ3AyVVRFVlRFVWI0TWtheWkiLCJlbWFpbCI6Ind3d3d3QDEyMzEuY2NjIiwiYmlydGhkYXRlIjoiMjAxNi8zLzEgMTU6NDk6MzMiLCJyb2xlIjoiNTIwMDAwLDgyMDAwMCw2NTAwMDAsMDAwMDAwLDM0MDAwMCw0NTAwMDAsNDYwMDAwLDEzMDAwMCw1MzAwMDAsMTUwMDAwLDMyMDAwMCwyMzAwMDAsMjIwMDAwLDY0MDAwMCwzNzAwMDAsNTEwMDAwLDM2MDAwMCw2MjAwMDAsMzUwMDAwLDUwMDAwMCwyMTAwMDAsNjEwMDAwLDQyMDAwMCw2MzAwMDAsNDEwMDAwLDE0MDAwMCwxMTAwMDAsMzMwMDAwLDgxMDAwMCw0MzAwMDAsMTIwMDAwLDMxMDAwMCw0NDAwMDAsNzEwMDAwLDU0MDAwMCIsImlzcyI6Imh0dHA6Ly8xOTIuMTY4LjEwMC41NTo4MDAwL2lkZW50aXR5c2VydmVyL2NvcmUiLCJhdWQiOiJodHRwOi8vMTkyLjE2OC4xMDAuNTU6ODAwMC9pZGVudGl0eXNlcnZlci9jb3JlL3Jlc291cmNlcyIsImV4cCI6MTQ5MTAzOTM1NiwibmJmIjoxNDgyMzk5MzU2fQ.Hbaydt1YEY9ytltLfNX6axTuMM6sKE9PFkHua-htwCPMl2vnVGfAmlAO2sFFOCaCwj1NZhLEqP11H68O0KlGwDf5dOP8dwsCdmJ-cbvC6Sg80bAxvLQ3Y8j9hDgtKQl3aOagJ8N83Ba1uMtP8-hQDOjYeQAroQxjzlHJuf34XJiKqfJBxKI3ipRmwOKl5oqeIHVKHQGVzprd3irNsm-YDzepZtSwfK-CMIXFtvFwzUEkWdbC2hbPk-BK8KrciB27Zlu2ixMK2JsmO_dgDvpmE8zzW5qFIcuk6qrUfl6Nb1OxPdgkh90eHyO0p1H0hWe8Wbsj997-Y4vELGQ2EZTToA";
            //objAreaAppService.GetProvinces(pq);

            return View("~/App/Main/index.cshtml"); //Layout of the angular application.
        }

        [HttpGet]
        public ActionResult Logout()
        {
            //HttpContext.GetOwinContext().Authentication.SignOut();

            Session.Abandon();                                          //清除当前会话
            Session.Clear();                                            //清除当前浏览器所有Session
            WebHelper.RemoveCookie("Token");                           //清除Token


            string ssoUrl = System.Configuration.ConfigurationManager.AppSettings["SSOUrl"];
            SSOWebApiWS ws = new SSOWebApiWS(ssoUrl);
            ws.ClearTicket();

            string webUrl = System.Configuration.ConfigurationManager.AppSettings["WebUrl"];
            var jsonData = new
            {
                ssoUrl = ssoUrl + "Login/SSOClear?BackURL=" + webUrl,
                Msg = "退出系统"
            };
            return Content(jsonData.ToJson());
        }

        /// <summary>
        /// 
        /// </summary>
        private void GetUserInfo()
        {
            string access_token = (User as ClaimsPrincipal).FindFirst("access_token").Value;
            string given_name = (User as ClaimsPrincipal).FindFirst("given_name").Value;
            string family_name = (User as ClaimsPrincipal).FindFirst("family_name").Value;
            string gender = (User as ClaimsPrincipal).FindFirst("gender").Value;
            string id = (User as ClaimsPrincipal).FindFirst("id").Value;
            string middle_name = (User as ClaimsPrincipal).FindFirst("middle_name").Value;
            string orgRole = (User as ClaimsPrincipal).FindFirst("role").Value;

            ViewBag.token = access_token;//获取access_token值
            ViewBag.given_name = given_name;
            ViewBag.family_name = family_name;
            ViewBag.gender = gender;
            ViewBag.id = id;
            ViewBag.middle_name = middle_name;

            UserInfo.givenName = given_name;
            UserInfo.familyName = family_name;
            UserInfo.gender = gender;
            UserInfo.ID = id;
            UserInfo.middleName = middle_name;
            UserInfo.areaRight = orgRole;

        }

        [HttpGet]
        public void ExcelTest()
        {
            DataTable objTable = new DataTable("测试");
            objTable.Columns.Add("测试1", typeof(string));
            objTable.Columns.Add("测试2 ", typeof(string));
            objTable.Columns.Add("测试3", typeof(string));

            System.Data.DataRow dr = objTable.NewRow();
            dr[0] = "1122";
            dr[1] = "3214";
            dr[2] = "5455";
            System.Data.DataRow dr1 = objTable.NewRow();
            dr1[0] = "1122";
            dr1[1] = "3214";
            dr1[2] = "5455";
            System.Data.DataRow dr2 = objTable.NewRow();
            dr2[0] = "1122";
            dr2[1] = "3214";
            dr2[2] = "5455";
            System.Data.DataRow dr4 = objTable.NewRow();
            dr4[0] = "1122";
            dr4[1] = "3214";
            dr4[2] = "5455";
            objTable.Rows.Add(dr);
            objTable.Rows.Add(dr1);
            objTable.Rows.Add(dr2);
            objTable.Rows.Add(dr4);
            ExcelHelper.ExcelDownloadOnlyDT(objTable, "测试", "测试.xls");
        }

        [HttpGet]
        public ActionResult GetWebPath()
        {
            string webBusinessUrl = System.Configuration.ConfigurationManager.AppSettings["WebBusinessUrl"];
            string ssoUrl = System.Configuration.ConfigurationManager.AppSettings["SSOUrl"];
            string webUrl = System.Configuration.ConfigurationManager.AppSettings["WebUrl"];
            var JsonData = new
            {
                webUrl = webUrl.TrimEnd('/'),
                webBusinessUrl = webBusinessUrl.TrimEnd('/'),
                ssoUrl = ssoUrl.TrimEnd('/'),
            };
            return Content(JsonData.ToJson());
        }

        public ActionResult GetAreaInfo(string parentId)
        {
            string result = _ssoWS.GetAreaListJson(parentId);
            return Content(result);
        }
    }
}