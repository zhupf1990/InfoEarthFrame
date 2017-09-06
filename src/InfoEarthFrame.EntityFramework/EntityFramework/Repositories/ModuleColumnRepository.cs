using Abp.EntityFramework;
using InfoEarthFrame.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.EntityFramework.Repositories
{
    public class ModuleColumnRepository : InfoEarthFrameRepositoryBase<ModuleColumnEntity, string>, IModuleColumnRepository
    {
       public ModuleColumnRepository(IDbContextProvider<InfoEarthFrameDbContext> dbContextProvider)
           : base(dbContextProvider)
       {


       }
   }
   
}
