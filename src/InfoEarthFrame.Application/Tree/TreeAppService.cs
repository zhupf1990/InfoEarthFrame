using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Uow;
using Abp.AutoMapper;
using InfoEarthFrame.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace InfoEarthFrame.Application
{
    [AbpAuthorize]
    public class TreeAppService : ApplicationService, ITreeAppService
    {

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="iLayerManagerRepository"></param>
        public TreeAppService()
        {
           
        }

        private List<TreeListDto> CreatTree(List<InfoEarthFrame.Core.TreeBase> list, string pid)
        {
            List<TreeListDto> treeList = new List<TreeListDto>();
            var childList = list.FindAll(
            delegate(InfoEarthFrame.Core.TreeBase gmt)
            {
                return (gmt.ParentID == pid);
            });
            foreach (InfoEarthFrame.Core.TreeBase childItem in childList)
            {
                TreeListDto item = new TreeListDto();
                item.Id = childItem.Id;
                item.ParentID = childItem.ParentID;
                item.Name = childItem.Name;
                item.Sn = childItem.Sn;
                item.ChildNode = CreatTree(list, item.Id);
                treeList.Add(item);
            }
            return treeList;
        }


        //public List<TreeListDto> GetTree(List<InfoEarthFrame.Core.TreeBase> objTree, string TopValue)
        //{
        //    List<TreeListDto> ResultList = new List<TreeListDto>();
        //    List<TreeListDto> CurrNodeList = GetTreeListDto(objTree, TopValue);
        //    for (int i = 0; i < CurrNodeList.Count; i++)
        //    {
        //        TreeListDto tlDto = CurrNodeList[i];

        //        SearchChild(objTree, ref tlDto);

        //        ResultList.Add(tlDto);
        //    }

        //    return ResultList;
        //}

        //protected TreeListDto SearchChild(List<TreeBase> objTree, ref TreeListDto currNode)
        //{
        //    List<TreeListDto> NextNodeList = GetTreeListDto(objTree, currNode.PID);
           
        //    currNode.ChildNode = NextNodeList;
        //    for (int i = 0; i < NextNodeList.Count; i++)
        //    {
        //        TreeListDto tlDto = NextNodeList[i];

        //        SearchChild(objTree, ref tlDto);
        //    }
        //}

        //protected List<TreeListDto> GetTreeListDto(List<TreeBase> objTree, string PIdValue)
        //{
        //    IEnumerable<TreeListDto> items = objTree.Select(s => new TreeListDto()
        //    {
        //        Id = s.Id,
        //        PID = s.PID,
        //        Name = s.Name,
        //        ChildNode = new List<TreeListDto>()
        //    }).ToList();

        //    return items.Where(s => s.PID == PIdValue).ToList();
        //}
    }
}
