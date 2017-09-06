using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Net.Http.Headers;
using System.Web.Http.Description;

namespace iTelluro.WebApi.Filter
{
    /// <summary>
    /// WebApi��չʾ��Ϣ
    /// </summary>
    public class HelpPageApiModel
    {
        /// <summary>
        /// ���캯��
        /// </summary>
        public HelpPageApiModel()
        {
            SampleRequests = new Dictionary<MediaTypeHeaderValue, object>();
            SampleResponses = new Dictionary<MediaTypeHeaderValue, object>();
            ErrorMessages = new Collection<string>();
        }

        /// <summary>
        /// api����
        /// </summary>
        public ApiDescription ApiDescription { get; set; }

        /// <summary>
        /// ������Ϣ
        /// </summary>
        public IDictionary<MediaTypeHeaderValue, object> SampleRequests { get; private set; }

        /// <summary>
        /// ������Ϣ
        /// </summary>
        public IDictionary<MediaTypeHeaderValue, object> SampleResponses { get; private set; }

        /// <summary>
        /// ������Ϣ
        /// </summary>
        public Collection<string> ErrorMessages { get; private set; }
    }
}