using Abp.EntityFramework;
using InfoEarthFrame.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.EntityFramework.Repositories
{
    public class LayerManagerRepository : InfoEarthFrameRepositoryBase<Tbl_LayerManager, string>, ILayerManagerRepository
    {
        public LayerManagerRepository(IDbContextProvider<InfoEarthFrameDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }

        public async Task<List<Tbl_LayerManager>> GetPageList(int PageIndex, int PageSize)
        {
            var query = GetAll().OrderBy(q => q.CREATETIME).Skip((PageIndex - 1) * PageSize).Take(PageSize).ToList();
            return query;                            
        }    
    }
}
