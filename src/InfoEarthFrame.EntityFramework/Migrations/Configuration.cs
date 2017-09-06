using System.Data.Entity.Migrations;

namespace InfoEarthFrame.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<InfoEarthFrame.EntityFramework.InfoEarthFrameDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "InfoEarthFrame";
        }

        protected override void Seed(InfoEarthFrame.EntityFramework.InfoEarthFrameDbContext context)
        {
            // This method will be called every time after migrating to the latest version.
            // You can add any seed data here...
        }
    }
}
