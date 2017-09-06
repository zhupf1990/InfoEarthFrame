using System;
using System.Data.Entity;
using System.Linq.Expressions;
using Abp.Domain.Entities;
using Abp.Domain.Uow;
using Abp.EntityFramework;
using Castle.DynamicProxy.Generators.Emitters.SimpleAST;
using EntityFramework.DynamicFilters;
using InfoEarthFrame.Core;
using InfoEarthFrame.Common;


namespace InfoEarthFrame.EntityFramework
{
    public class InfoEarthFrameDbContext : AbpDbContext
    {
        //TODO: Define an IDbSet for each Entity...

        //Example:
        //public virtual IDbSet<User> Users { get; set; }

        //public virtual IDbSet<MultimediaTypeEntity> MultimediaType { get; set; }
        //public virtual IDbSet<AttachmentEntity> Attachment { get; set; }

        public virtual IDbSet<ModuleEntity> HazardsType { get; set; }
        public virtual IDbSet<ModuleButtonEntity> Slope { get; set; }
        public virtual IDbSet<ModuleColumnEntity> LayerManager { get; set; }

        //public virtual IDbSet<DisasterEntity> DisasterEntities { get; set; }

        /* NOTE: 
         *   Setting "Default" to base class helps us when working migration commands on Package Manager Console.
         *   But it may cause problems when working Migrate.exe of EF. If you will apply migrations on command line, do not
         *   pass connection string name to base classes. ABP works either way.
         */
        public InfoEarthFrameDbContext()
            : base("Default")
        {

        }

        /* NOTE:
         *   This constructor is used by ABP to pass connection string defined in InfoEarthFrameDataModule.PreInitialize.
         *   Notice that, actually you will not directly create an instance of InfoEarthFrameDbContext since ABP automatically handles it.
         */
        public InfoEarthFrameDbContext(string nameOrConnectionString)
            : base(nameOrConnectionString)
        {

        }

        public override void Initialize()
        {
            base.Initialize();
            //Database.Initialize(false);
            //this.SetFilterScopedParameterValue(AbpDataFilters.MustHaveTenant, AbpDataFilters.Parameters.TenantId, AbpSession.TenantId ?? 0);
            //this.SetFilterScopedParameterValue(AbpDataFilters.MayHaveTenant, AbpDataFilters.Parameters.TenantId, AbpSession.TenantId);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //Oracle数据库请加上这个sql和mysql请去掉这是schema不是表空间
            //string OracleSchame = System.Configuration.ConfigurationSettings.AppSettings["OracleSchame"];
            //modelBuilder.HasDefaultSchema(OracleSchame);
          
            //区域数据过滤
            string areaCode = "1";// UserInfo.areaRight;
            string code = string.Empty;
            if (areaCode != null && areaCode.Length > 0)
            {
                string[] arrStrings = areaCode.Split(',');
                //组装表达式
                Expression<Func<IAreaRight, bool>> predicate = null;
                foreach (var arrString in arrStrings)
                {
                    predicate = p => p.AREARIGHTCODE == arrString;
                    predicate = predicate.Or(predicate);
                }
                modelBuilder.Filter("AreaRightFilter", (IAreaRight t) => predicate, "");
            }


        }
    }
}
