using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Net.Http.Headers;
using System.Web.Http.Description;

namespace iTelluro.WebApi.Filter
{
    /// <summary>
    /// WebApi的展示信息
    /// </summary>
    public class HelpPageApiModel
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public HelpPageApiModel()
        {
            SampleRequests = new Dictionary<MediaTypeHeaderValue, object>();
            SampleResponses = new Dictionary<MediaTypeHeaderValue, object>();
            ErrorMessages = new Collection<string>();
        }

        /// <summary>
        /// api描述
        /// </summary>
        public ApiDescription ApiDescription { get; set; }

        /// <summary>
        /// 请求信息
        /// </summary>
        public IDictionary<MediaTypeHeaderValue, object> SampleRequests { get; private set; }

        /// <summary>
        /// 返回信息
        /// </summary>
        public IDictionary<MediaTypeHeaderValue, object> SampleResponses { get; private set; }

        /// <summary>
        /// 错误信息
        /// </summary>
        public Collection<string> ErrorMessages { get; private set; }
    }
}