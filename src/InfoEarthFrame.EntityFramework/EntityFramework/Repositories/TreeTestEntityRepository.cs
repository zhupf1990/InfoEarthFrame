using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InfoEarthFrame.Core;
using Abp.EntityFramework;

namespace InfoEarthFrame.EntityFramework.Repositories
{
    public class TreeTestEntityRepository : InfoEarthFrameRepositoryBase<TreeTestEntity, string>, ITreeTestRepository
    {
        public TreeTestEntityRepository(IDbContextProvider<InfoEarthFrameDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }
  
    }
}
