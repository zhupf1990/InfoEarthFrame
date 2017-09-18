using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InfoEarthFrame.Web.Controllers
{
    [SSOHandlerLogin]
    public class TestController : Controller
    {
        //
        // GET: /Test/
        public ActionResult Index()
        {
            ViewBag.token = WebHelper.GetCookie("Token");
            return View("~/App/Main/index.cshtml"); //Layout of the angular application.
        }
    }
}