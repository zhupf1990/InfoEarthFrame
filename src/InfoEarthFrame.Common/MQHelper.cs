using RabbitMQ.Client;
using RabbitMQ.Client.Content;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Common
{
    public class MqHelper : IDisposable
    {
        #region 消息队列的配置信息

        public IConnection MQConnection { get; set; }
        public IModel MQModel { get; set; }


        #endregion
        public MqHelper()
        {
            //_routingKey = ConfigurationManager.AppSettings["RoutingKey"];
            //if (string.IsNullOrEmpty(_routingKey))
            //    throw new ConfigurationErrorsException("MQHelper配置节rountingKey错误");
            //_header = ConfigurationManager.AppSettings["header"];
            //if (string.IsNullOrEmpty(_header))
            //    throw new ConfigurationErrorsException("MQHelper配置节header错误");
            //_exChange = ConfigurationManager.AppSettings["ExChange"];
            //if (string.IsNullOrEmpty(_exChange))
            //    throw new ConfigurationErrorsException("MQHelper配置节ExChange错误");
            //_queueName = ConfigurationManager.AppSettings["QueueName"];
            //if (string.IsNullOrEmpty(_queueName))
            //    throw new ConfigurationErrorsException("MQHelper配置节QueueName错误");
            //try
            //{
            //    _persistModel = bool.Parse(ConfigurationManager.AppSettings["PersistMode"]);
            //}
            //catch (Exception ex)
            //{
            //    throw new ConfigurationErrorsException("MQHelper配置节PersistMode错误", ex);
            //}

            //var username = ConfigurationManager.AppSettings["UserName"];
            //if (string.IsNullOrEmpty(username))
            //    throw new ConfigurationErrorsException("MQHelper配置节UserName错误");
            //var password = ConfigurationManager.AppSettings["PassWord"];
            //if (string.IsNullOrEmpty(password))
            //    throw new ConfigurationErrorsException("MQHelper配置节PassWord错误");
            //var virtualhost = ConfigurationManager.AppSettings["VirtualHost"];
            //if (string.IsNullOrEmpty(virtualhost))
            //    throw new ConfigurationErrorsException("MQHelper配置节VirtualHost错误");

            //AmqpTcpEndpoint endpoint;
            //try
            //{
            //    var uri = new Uri(ConfigurationManager.AppSettings["uri"]);
            //    endpoint = new AmqpTcpEndpoint(uri);
            //}
            //catch (Exception ex)
            //{
            //    throw new ConfigurationErrorsException("MQHelper配置节uri错误", ex);
            //}

            //var connectionFactory = new ConnectionFactory
            //{
            //    UserName = username,
            //    Password = password,
            //    VirtualHost = virtualhost,
            //    RequestedHeartbeat = 0,
            //    Endpoint = endpoint
            //};
            //_logger = LoggerFrameFactory.CreateLog();
            //try
            //{
            //    _connection = connectionFactory.CreateConnection();
            //    _model = _connection.CreateModel();
            //    if (_exChangeType != null)
            //    {
            //        _model.ExchangeDeclare(_exChange, _exChangeType);
            //        _model.QueueDeclare(_queueName, true, false, false, null);
            //        _model.QueueBind(_queueName, _exChange, _routingKey);
            //    }
            //}
            //catch (Exception ex)
            //{
            //    throw new Exception("MQHelper创建连接失败", ex);
            //}
        }

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="devicecode"></param>
        /// <param name="dataguid"></param>
        /// <param name="time"></param>
        /// <returns></returns>
        public bool SendMsg(string devicecode, string dataguid, DateTime time)
        {
            //try
            //{
            //    IMapMessageBuilder mmb = new MapMessageBuilder(_model);
            //    System.Collections.Generic.IDictionary<string, object> header = mmb.Headers;
            //    header["Header"] = _header;

            //    string msg = string.Format("DeviceCode={0}#DataGuid={1}#DataTime={2}", devicecode, dataguid, time);
            //    byte[] body = Encoding.UTF8.GetBytes(msg);

            //    if (_persistModel)
            //        ((IBasicProperties)mmb.GetContentHeader()).DeliveryMode = 2;
            //    _model.BasicPublish(_exChange, _routingKey, (IBasicProperties)mmb.GetContentHeader(), body);
            //}
            //catch (Exception ex)
            //{

            //}
            return true;
        }

        public void Dispose()
        {
            //if (_model != null)
            //    _model.Dispose();

            //if (_connection != null)
            //    _connection.Dispose();
        }
    }

    /// <summary>
    /// 消息队列配置信息
    /// </summary>
    public class MqConfigInfo
    {
        public string MQExChange { get; set; }
        public string MQExChangeType = "direct";
        public string MQRoutingKey { get; set; }
        public string MQHeader { get; set; }
        public bool _persistModel = true;

        /// <summary>
        /// 队列名称
        /// </summary>
        public string MQQueueName { get; set; }

        public string UserName { get; set; }

        public string PassWord { get; set; }
    }
}
