using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Description;

namespace iTelluro.WebApi.Filter
{
    public class WebApiScaner
    {
        /// <summary>
        /// WebApi 扫描注册(反射的方式,此方式获取的信息不全)
        /// </summary>
        /// <param name="baseUrl">webApi的基础地址</param>
        public static void WebApiRegistor(string baseUrl)
        {
            string executDir = Assembly.GetExecutingAssembly().CodeBase.Replace("iTelluro.WebApi.Filter.DLL", "").Replace("file:///", "");
            if (!Directory.Exists(executDir))
            {
                return;
            }
            DirectoryInfo di = new DirectoryInfo(executDir);
            FileInfo[] dlls = di.GetFiles("*.dll", SearchOption.TopDirectoryOnly);
            if (dlls == null || dlls.Length <= 0)
            {
                return;
            }
            foreach (var item in dlls)
            {
                Assembly asm = Assembly.LoadFile(item.FullName);
                var typesToRegister = asm.GetTypes()
                .Where(type => !String.IsNullOrEmpty(type.Namespace)).Where(type => typeof(ApiController).IsAssignableFrom(type));
              
                foreach (var type in typesToRegister)
                {
                    MethodInfo[] methodInfos = type.GetTypeInfo().DeclaredMethods.ToArray();
                    if(methodInfos==null||methodInfos.Length<=0)
                    {
                        continue;
                    }

                    foreach (var method in methodInfos)
                    {
                        var attributesGet = method.GetCustomAttributes<HttpGetAttribute>().OfType<HttpGetAttribute>();
                        var attributesPost = method.GetCustomAttributes<HttpPostAttribute>().OfType<HttpPostAttribute>();
                        var attributesPut = method.GetCustomAttributes<HttpPutAttribute>().OfType<HttpPutAttribute>();
                        var attributesDelete = method.GetCustomAttributes<HttpDeleteAttribute>().OfType<HttpDeleteAttribute>();
                        bool isGet = attributesGet.Any(a => a is HttpGetAttribute);
                        bool isPost = attributesPost.Any(a => a is HttpPostAttribute);
                        bool isPut = attributesPut.Any(a => a is HttpPutAttribute);
                        bool isDelete = attributesDelete.Any(a => a is HttpDeleteAttribute);

                        if (!isGet && !isPost && !isPut && !isDelete)
                        {
                            continue;
                        }
                        string controllerName=type.Name.Replace("Controller","");
                        string methodName=method.Name;
                        //获取方法的信息注册
                        string webApiUrl = baseUrl + "api/" + controllerName + "/" + methodName;
                        string parameters = GetMethodParameterList(method);
                        string retrnType = GetTypeName(method.ReturnType);
                        string methodType = "Get";
                        if(isPost)
                        {
                            methodType = "Post";
                        }
                        if(isPut)
                        {
                            methodType = "Put";
                        }
                        if (isDelete)
                        {
                            methodType = "Delete";
                        }

                        RegistorInfo info = new RegistorInfo();
                        info.F_WebApiUrl = webApiUrl;
                        info.F_Parameters = parameters;
                        info.F_RetrunType = retrnType;
                        info.F_MethedType = methodType;
                        SaveInfo(info);
                        
                    }
                }
            }

        }

        /// <summary>
        /// WebApi 扫描注册
        /// </summary>
        /// <param name="baseUrl">webApi的基础地址</param>
        /// <param name="isEnableHttpAttr">是否启用HttpGet,HttpPost特性检查,默认为启用</param>
        public static void WebApiRegistorWithXML(string baseUrl,bool isEnableHttpAttr=true)
        {
            string businessName = System.Configuration.ConfigurationManager.AppSettings["BusinessName"];
            ApiExplorer apiExplore = GlobalConfiguration.Configuration.Services.GetApiExplorer() as ApiExplorer;
            if(apiExplore==null)
            {
                return;
            }
            apiExplore.DocumentationProvider= GlobalConfiguration.Configuration.Services.GetDocumentationProvider();
            Collection<ApiDescription> descs = GlobalConfiguration.Configuration.Services.GetApiExplorer().ApiDescriptions;
            if (descs == null)
            {
                return;
            }
            ILookup<HttpControllerDescriptor, ApiDescription> apiGroups = descs.ToLookup(api => api.ActionDescriptor.ControllerDescriptor);

            if (apiGroups == null)
            {
                return;
            }
            foreach (var api in apiGroups)
            {
                IDocumentationProvider p = apiExplore.DocumentationProvider;
                string controllerName=p!=null?p.GetDocumentation(api.Key):string.Empty;
                foreach (var item in api)
                {
                    if(item.ID.Contains("TypeScript")|| item.ID.Contains("AbpCache")||item.ID.Contains("ServiceProxies"))
                    {
                        continue;
                    }
                    var attributesGet = item.ActionDescriptor.GetCustomAttributes<System.Web.Http.HttpGetAttribute>().OfType<System.Web.Http.HttpGetAttribute>();
                    var attributesPost = item.ActionDescriptor.GetCustomAttributes<System.Web.Http.HttpPostAttribute>().OfType<System.Web.Http.HttpPostAttribute>();
                    var attributesPut = item.ActionDescriptor.GetCustomAttributes<System.Web.Http.HttpPutAttribute>().OfType<System.Web.Http.HttpPutAttribute>();
                    var attributesDelete = item.ActionDescriptor.GetCustomAttributes<System.Web.Http.HttpDeleteAttribute>().OfType<System.Web.Http.HttpDeleteAttribute>();
                    bool isGet = attributesGet.Any(a => a is System.Web.Http.HttpGetAttribute);
                    bool isPost = attributesPost.Any(a => a is System.Web.Http.HttpPostAttribute);
                    bool isPut = attributesPut.Any(a => a is System.Web.Http.HttpPutAttribute);
                    bool isDelete = attributesDelete.Any(a => a is System.Web.Http.HttpDeleteAttribute);

                    if (!isGet && !isPost && !isPut && !isDelete)
                    {
                        if (isEnableHttpAttr)
                        {
                            continue;
                        }
                    }

                    //HelpPageSampleGenerator sampleGenerator = .GetHelpPageSampleGenerator();
                    HelpPageApiModel model = HelpPageConfigurationExtensions.GenerateApiModel(item, GlobalConfiguration.Configuration);

                    string retrnType = GetTypeName(item.ActionDescriptor.ReturnType);
                    string parameters = GetMethodParameterList(item.ParameterDescriptions);
                    RegistorInfo info = new RegistorInfo();
                    info.F_WebApiUrl = baseUrl + item.RelativePath;
                    info.F_Parameters = parameters;
                    info.F_RetrunType = retrnType;
                    info.F_MethedType = item.HttpMethod.Method;
                    info.F_Description = item.Documentation;
                    info.F_SYSTEMNAME = businessName;
                    info.F_CLASSNAME = controllerName;
                    info.F_ACTIONNAME = item.RelativePath;
                    info.F_STAUE = "1";
                    //Uri url = new Uri(baseUrl);
                    info.F_IP = baseUrl;// +":" + url.Port;
                    info.F_DetailUrl = info.F_WebApiUrl + GetMethodParameterListForUrl(item.ParameterDescriptions);
                    if (model != null)
                    {
                        if (model != null)
                        {
                            foreach (var key in model.SampleRequests.Keys)
                            {
                                if (key.MediaType.ToUpperInvariant().Contains("APPLICATION/JSON"))
                                {
                                    info.F_QS = key.MediaType + ":" + model.SampleRequests[key].ToString();
                                }
                            }
                            foreach (var key in model.SampleResponses.Keys)
                            {
                                if (key.MediaType.ToUpperInvariant().Contains("APPLICATION/JSON"))
                                {
                                    info.F_RS = key.MediaType + ":" + model.SampleResponses[key].ToString();
                                }
                            }
                        }
                    }
                    SaveInfo(info);
                }
            }
        }

        private static string GetTypeName(Type type)
        {
            string result = string.Empty;
            if (type != null)
            {
                if (!type.IsGenericType)
                {
                    if (type == typeof(void))
                        result = "void";
                    else
                        result = type.Name;
                }

                if (type.Name.Contains("`1"))
                {
                    result = string.Format("{0}﹤{1}﹥", type.Name.Replace("`1", ""), GetTypeName(type.GetGenericArguments()[0]));
                }

                if (type.Name.Contains("`2"))
                {
                    result = string.Format("{0}﹤{1},{2}﹥", type.Name.Replace("`2", ""), GetTypeName(type.GetGenericArguments()[0]), GetTypeName(type.GetGenericArguments()[1]));
                }
            }

            return result;
        }

        private static string GetMethodParameterList(MethodInfo method)
        {
            ParameterInfo[] parameters = method.GetParameters();
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < parameters.Length; i++)
            {
                sb.Append(parameters[i].Name);
                sb.Append("; 类型：");
                sb.Append(GetTypeName(parameters[i].ParameterType) + "\r\n");
            }
            return sb.ToString();
        }

        private static string GetMethodParameterList(Collection<ApiParameterDescription> parameters)
        {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < parameters.Count; i++)
            {
                sb.Append(GetTypeName(parameters[i].ParameterDescriptor.ParameterType) + "#");
                sb.Append(parameters[i].Name + "#");
                sb.Append(parameters[i].Documentation + "&");
            }
            return sb.ToString().TrimEnd('&');
        }

        private static string GetMethodParameterListForUrl(Collection<ApiParameterDescription> parameters)
        {
            StringBuilder sb = new StringBuilder("/");
            for (int i = 0; i < parameters.Count; i++)
            {
                sb.Append(GetTypeName(parameters[i].ParameterDescriptor.ParameterType) + "_");
                sb.Append(parameters[i].Name + "/");
            }
            return sb.ToString().TrimEnd('/');
        }


        private static void SaveInfo(RegistorInfo info)
        {
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(info);
            var contentJson = new StringContent(json, Encoding.UTF8, "application/json");
            var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip };
            HttpClient httpClient = new HttpClient(handler);
            string url = System.Configuration.ConfigurationManager.AppSettings["WebBusinessUrl"];
            httpClient.BaseAddress = new Uri(url);
            //await异步等待回应
            var response = httpClient.PostAsync("api/V1/WebApiRegistor/WebApiRegist", contentJson).Result;
            //确保HTTP成功状态值
            response.EnsureSuccessStatusCode();
            //await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
            var result = (response.Content.ReadAsStringAsync().Result);
        }
    }
}
