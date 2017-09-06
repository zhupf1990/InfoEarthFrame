namespace InfoEarthFrame.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateAttrib : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Attachment");
            AlterColumn("dbo.Attachment", "Id", c => c.String(nullable: false, maxLength: 128));
            AlterColumn("dbo.Attachment", "FKey", c => c.String(maxLength: 50));
            AddPrimaryKey("dbo.Attachment", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Attachment");
            AlterColumn("dbo.Attachment", "FKey", c => c.Guid());
            AlterColumn("dbo.Attachment", "Id", c => c.Guid(nullable: false));
            AddPrimaryKey("dbo.Attachment", "Id");
        }
    }
}
