using Abp.Domain.Entities;
using Abp.EntityFramework;
using Abp.EntityFramework.Repositories;

namespace InfoEarthFrame.EntityFramework.Repositories
{
    public abstract class InfoEarthFrameRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<InfoEarthFrameDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected InfoEarthFrameRepositoryBase(IDbContextProvider<InfoEarthFrameDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //add common methods for all repositories
    }

    public abstract class InfoEarthFrameRepositoryBase<TEntity> : InfoEarthFrameRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {
        protected InfoEarthFrameRepositoryBase(IDbContextProvider<InfoEarthFrameDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //do not add any method here, add to the class above (since this inherits it)
    }
}
