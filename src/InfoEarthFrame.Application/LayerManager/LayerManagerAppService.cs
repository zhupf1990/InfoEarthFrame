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

namespace InfoEarthFrame.Application
{
    //[AbpAuthorize]
    public class LayerManagerAppService : ApplicationService, ILayerManagerAppService
    {
        private readonly ILayerManagerRepository _iLayerManagerRepository;
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="iLayerManagerRepository"></param>
        public LayerManagerAppService(ILayerManagerRepository iLayerManagerRepository)
        {
            _iLayerManagerRepository = iLayerManagerRepository;
        }

        /// <summary>
        /// 创建树
        /// </summary>
        /// <param name="list"></param>
        /// <param name="pid"></param>
        /// <returns></returns>
        private List<Gislayer> CreatTree(List<LayerManagerDto> list, string pid)
        {
            List<Gislayer> treeList = new List<Gislayer>();
            var childList = list.FindAll(x => x.PID == pid);
            foreach (LayerManagerDto childItem in childList)
            {
                Gislayer item = new Gislayer();
                item.Id = childItem.Id;
                item.PID = childItem.PID;
                item.LABEL = childItem.LABEL;
                item.ZOOMLEVEL = childItem.ZOOMLEVEL;
                item.ZEROLEVELSIZE = childItem.ZEROLEVELSIZE;
                item.DATASERVERKEY = childItem.DATASERVERKEY;
                item.URL = childItem.URL;
                item.TILESIZE = childItem.TILESIZE;
                item.PICTYPE = childItem.PICTYPE;
                item.showCheckbox = true;
                item.@checked = false;
                item.children = CreatTree(list, item.Id);
                treeList.Add(item);
            }
            return treeList;
        }
        /// <summary>
        /// 获取所有
        /// </summary>
        /// <returns></returns>
        public async Task<object> GetAllList()
        {
            var result = await _iLayerManagerRepository.GetAllListAsync();
            var list = result.MapTo<List<LayerManagerDto>>();

            LayerManagerDto map1 = list.First(x => x.PID == "1");//天地图
            LayerManagerDto note1 = list.First(x => x.PID == "2");//天地图标注
            LayerManagerDto map2 = list.First(x => x.PID == "3");//影像图
            LayerManagerDto note2 = list.First(x => x.PID == "4");//影像图标注
            List<Gislayer> gislist = CreatTree(list, "0000");//gis图层树

            return new
            {
                BaseMap = new { map = map1, note = note1 },
                StatelliteMap = new { map = map2, note = note1 },
                GisLayer = gislist
            };
        }

        /// <summary>
        /// 获取不带count的分页列表
        /// </summary>
        /// <param name="PageIndex"></param>
        /// <param name="PageSize"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<ListResultOutput<LayerManagerDto>> GetPageList(QueryLayerManagerInput input)
        {
            var result = await _iLayerManagerRepository.GetPageList(input.PageIndex, input.PageSize);
            var outputList = new ListResultOutput<LayerManagerDto>(result.MapTo<List<LayerManagerDto>>());
            return outputList;
        }
        /// <summary>
        /// 获取带count的分页列表
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultOutput<LayerManagerDto>> GetPageListAndCount(QueryLayerManagerInput input)
        {
            var result = await _iLayerManagerRepository.GetPageList(input.PageIndex, input.PageSize);

            IReadOnlyList<LayerManagerDto> ir = result.MapTo<List<LayerManagerDto>>();
            int count = _iLayerManagerRepository.Count();
            PagedResultOutput<LayerManagerDto> outputList = new PagedResultOutput<LayerManagerDto>(count, ir);
            return outputList;
        }
        /// <summary>
        /// 获取符合的数据条数
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<int> GetPageCount(QueryLayerManagerInput input)
        {
            int counts = await _iLayerManagerRepository.CountAsync();
            return counts;
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [UnitOfWork(IsDisabled = true)]
        public async Task<PagedResultOutput<LayerManagerDto>> Intsert(int pageIndex, int pageSize, LayerManagerInput input)
        {
            Tbl_LayerManager lm = new Tbl_LayerManager
            {
                Id = Guid.NewGuid().ToString(),
                PID = input.PID,
                LABEL = input.LABEL,
                ZOOMLEVEL = input.ZOOMLEVEL,
                URL = input.URL,
                DATASERVERKEY = input.DATASERVERKEY,
                TILESIZE = 512,
                ZEROLEVELSIZE = input.ZEROLEVELSIZE,
                PICTYPE = input.PICTYPE,
                CREATETIME = DateTime.Now
            };
            _iLayerManagerRepository.Insert(lm);
            QueryLayerManagerInput queryInput = new QueryLayerManagerInput
            {
                PageIndex = pageIndex,
                PageSize = pageSize
            };

            return await GetPageListAndCount(queryInput);
        }



        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [UnitOfWork(IsDisabled = true)]
        public async Task<PagedResultOutput<LayerManagerDto>> Update(int pageIndex, int pageSize, LayerManagerDto input)
        {
            Tbl_LayerManager lm = _iLayerManagerRepository.Get(input.Id);
            lm.PID = input.PID;
            lm.LABEL = input.LABEL;
            lm.ZOOMLEVEL = input.ZOOMLEVEL;
            lm.URL = input.URL;
            lm.DATASERVERKEY = input.DATASERVERKEY;
            lm.TILESIZE = 512;
            lm.ZEROLEVELSIZE = input.ZEROLEVELSIZE;
            lm.PICTYPE = input.PICTYPE;
            _iLayerManagerRepository.Update(lm);
            QueryLayerManagerInput queryInput = new QueryLayerManagerInput
            {
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            return await GetPageListAndCount(queryInput);
        }
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <param name="PageSize"></param>
        /// <returns>PageData</returns>
        [UnitOfWork(IsDisabled = true)]
        public async Task<PagedResultOutput<LayerManagerDto>> Delete(string id, int pageIndex, int pageSize)
        {
            _iLayerManagerRepository.Delete(id);
            QueryLayerManagerInput queryInput = new QueryLayerManagerInput
            {
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            return await GetPageListAndCount(queryInput);
        }

        /// <summary>
        /// 绑定下拉框 根据父ID查询
        /// </summary>
        /// <param name="pid"></param>
        /// <returns></returns>
        public async Task<ListResultOutput<LayerManagerDto>> GetLayerManagerByPID()
        {
            var result = _iLayerManagerRepository.GetAll().Where(q => q.PID == "0000");
            var outputList = new ListResultOutput<LayerManagerDto>(result.MapTo<List<LayerManagerDto>>());
            return outputList;
        }
    }
}
