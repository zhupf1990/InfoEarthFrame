using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Common
{
    /// <summary>
    /// 构造树形Json
    /// </summary>
    public static class TreeJson
    {
        /// <summary>
        /// 转换树Json
        /// </summary>
        /// <param name="list">数据源</param>
        /// <param name="ParentId">父节点</param>
        /// <returns></returns>
        public static string TreeToJson(this List<TreeEntity> list, string ParentId = "0")
        {
            StringBuilder strJson = new StringBuilder();
            List<TreeEntity> item = list.FindAll(t => t.pId == ParentId);
            strJson.Append("[");
            if (item.Count > 0)
            {
                foreach (TreeEntity entity in item)
                {
                    strJson.Append("{");
                    strJson.Append("\"id\":\"" + entity.id + "\",");
                    if (entity.label != null && !string.IsNullOrEmpty(entity.label))
                    {
                        strJson.Append("\"label\":\"" + entity.label.Replace("&nbsp;", "") + "\",");
                    }
                    else
                    {
                        strJson.Append("\"label\":\"\",");
                    }
                    if (entity.pId != null)
                    {
                        strJson.Append("\"pId\":\"" + entity.pId + "\",");
                    }
                    strJson.Append("\"value\":\"" + entity.value + "\",");
                    if (entity.img != null && !string.IsNullOrEmpty(entity.img.Replace("&nbsp;", "")))
                    {
                        strJson.Append("\"img\":\"" + entity.img.Replace("&nbsp;", "") + "\",");
                    }
                   // strJson.Append("\"hasChildren\":" + entity.hasChildren.ToString().ToLower() + ",");
                    strJson.Append("\"children\":" + TreeToJson(list, entity.id) + "");
                    strJson.Append("},");
                }
                strJson = strJson.Remove(strJson.Length - 1, 1);
            }
            strJson.Append("]");
            return strJson.ToString();
        }
    }
}
