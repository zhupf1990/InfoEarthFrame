using System;
using System.Collections.Generic;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace iTelluro.WebApi.Filter
{
    /// <summary>
    /// Use this class to customize the Help Page.
    /// For example you can set a custom <see cref="System.Web.Http.Description.IDocumentationProvider"/> to supply the documentation
    /// or you can provide the samples for the requests/responses.
    /// </summary>
    public static class HelpPageConfig
    {
        public static void Register(HttpConfiguration config,string xmlPath)
        {
            config.SetDocumentationProvider(new XmlDocumentationProvider(xmlPath));
            config.SetSampleForMediaType(
                 new TextSample("Binary JSON content. See http://bsonspec.org for details."),
                 new MediaTypeHeaderValue("application/bson"));
        }
    }
}