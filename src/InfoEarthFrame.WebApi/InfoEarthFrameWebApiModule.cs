using System.Reflection;
using Abp.Application.Services;
using Abp.Modules;
using Abp.WebApi;
using Abp.WebApi.Controllers.Dynamic.Builders;
using System.Web.Http;
using System.Web.Http.Cors;
using iTelluro.WebApi.Filter;
using System.Web;

namespace InfoEarthFrame
{
    [DependsOn(typeof(AbpWebApiModule), typeof(InfoEarthFrameApplicationModule))]
    public class InfoEarthFrameWebApiModule : AbpModule
    {
        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());

            DynamicApiControllerBuilder
                .ForAll<IApplicationService>(typeof(InfoEarthFrameApplicationModule).Assembly, "app/V1").WithConventionalVerbs().WithFilters(new WebApiTrackerAttribute())
                .Build();

            //设置跨域
            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
            cors.SupportsCredentials = true;
            GlobalConfiguration.Configuration.EnableCors(cors);

          
        }

        public override void PostInitialize()
        {
            iTelluro.WebApi.Filter.HelpPageConfig.Register(GlobalConfiguration.Configuration, HttpContext.Current.Server.MapPath("~/App_Data/InfoEarthFrame.Application.xml"));
            bool isRegist = bool.Parse(System.Configuration.ConfigurationManager.AppSettings["WebApiRegist"]);
            if (isRegist)
            {
                string baseUrl = System.Configuration.ConfigurationManager.AppSettings["WebUrl"];
                WebApiScaner.WebApiRegistorWithXML(baseUrl,false);
            }
            base.PostInitialize();
        }
    }
}
