namespace InfoEarthFrame.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Disaster",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        DISASTERNAME = c.String(maxLength: 100),
                        OCCURTIME = c.DateTime(),
                        POSITION = c.String(maxLength: 200),
                        REMARK = c.String(maxLength: 500),
                        AREARIGHTCODE = c.String(maxLength: 12),
                        IsDeleted = c.Boolean(nullable: false),
                        TenantId = c.Int(nullable: false),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_DisasterEntity_MustHaveTenant", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                    { "DynamicFilter_DisasterEntity_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.DIC_HAZARDSTYPE",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        HAZARDSTYPE = c.String(maxLength: 100),
                        TABNAME = c.String(maxLength: 100),
                        CGHID = c.String(maxLength: 100),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TBL_LAYERMANAGER",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PID = c.Int(),
                        TEXT = c.String(maxLength: 200),
                        URL = c.String(maxLength: 200),
                        DATASERVERKEY = c.String(maxLength: 200),
                        TILESIZE = c.Int(),
                        ZEROLEVELSIZE = c.String(maxLength: 200),
                        PICTYPE = c.String(maxLength: 200),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TreeTest",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        ParentID = c.String(maxLength: 100),
                        Name = c.String(maxLength: 150),
                        Sn = c.Int(nullable: false),
                        Other1 = c.String(maxLength: 100),
                        Other2 = c.String(maxLength: 100),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TBL_SLOPE",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        UNIFIEDCODE = c.String(maxLength: 16),
                        CGHUNIFIEDCODE = c.String(maxLength: 12),
                        DISASTERUNITNAME = c.String(maxLength: 255),
                        OUTDOORCODE = c.String(maxLength: 30),
                        INDOORCODE = c.String(maxLength: 20),
                        PROVINCE = c.String(maxLength: 6),
                        CITY = c.String(maxLength: 6),
                        TOWN = c.String(maxLength: 9),
                        LOCATION = c.String(maxLength: 250),
                        LATITUDE = c.Decimal(precision: 18, scale: 2),
                        LONGITUDE = c.Decimal(precision: 18, scale: 2),
                        X = c.Decimal(precision: 18, scale: 2),
                        Y = c.Decimal(precision: 18, scale: 2),
                        Z = c.Decimal(precision: 18, scale: 2),
                        ALTTOP = c.Decimal(precision: 18, scale: 2),
                        ALTBOTOM = c.Decimal(precision: 18, scale: 2),
                        SLOPETYPE = c.String(maxLength: 1),
                        STRATIGRAPHICTIME = c.String(maxLength: 50),
                        LITHOLOGY = c.String(maxLength: 20),
                        STRATUMDIRECTION = c.Decimal(precision: 18, scale: 2),
                        STRATUMANGLE = c.Decimal(precision: 18, scale: 2),
                        TECTONICREGION = c.String(maxLength: 50),
                        EARTHQUAKEINTENSITY = c.String(maxLength: 1),
                        MICROTOPOGRAPHY = c.String(maxLength: 20),
                        GROUNDWATERTYPE = c.String(maxLength: 20),
                        AVERAGEYEARRAINFALL = c.Decimal(precision: 18, scale: 2),
                        MAXDAYRAINFALL = c.Decimal(precision: 18, scale: 2),
                        MAXHOURRAINFALL = c.Decimal(precision: 18, scale: 2),
                        MAXWATERLEVEL = c.Decimal(precision: 18, scale: 2),
                        MINWATERLEVEL = c.Decimal(precision: 18, scale: 2),
                        POSITIONTORIVER = c.String(maxLength: 4),
                        LANDUSAGE = c.String(maxLength: 20),
                        SLOPEHEIGHT = c.Decimal(precision: 18, scale: 2),
                        SLOPELENGTH = c.Decimal(precision: 18, scale: 2),
                        SLOPEWIDTH = c.Decimal(precision: 18, scale: 2),
                        SLOPEANGLE = c.Decimal(precision: 18, scale: 2),
                        SLOPEDIRECTION = c.Decimal(precision: 18, scale: 2),
                        SLOPESHAPE = c.String(maxLength: 1),
                        ROCKARCHTYPE = c.String(maxLength: 1),
                        ROCKDEPTH = c.Decimal(precision: 18, scale: 2),
                        FRACTUREGROUPNUM = c.Decimal(precision: 18, scale: 2),
                        ROCKLENGTH = c.Decimal(precision: 18, scale: 2),
                        ROCKWIDTH = c.Decimal(precision: 18, scale: 2),
                        ROCKHEIGHT = c.Decimal(precision: 18, scale: 2),
                        SLOPEARCHTYPE = c.String(maxLength: 1),
                        SLOPEASPECTARCHTYPE = c.String(maxLength: 1),
                        CTRLSURFTYPE1 = c.String(maxLength: 1),
                        CTRLSURFDIRECTION1 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFANGLE1 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFLENGTH1 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFSPACE1 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFTYPE2 = c.String(maxLength: 1),
                        CTRLSURFDIRECTION2 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFANGLE2 = c.Decimal(precision: 18, scale: 2),
                        COCTRLSURFLENGTH2 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFSPACE2 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFTYPE3 = c.String(maxLength: 1),
                        CTRLSURFDIRECTION3 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFANGLE3 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFLENGTH3 = c.Decimal(precision: 18, scale: 2),
                        CTRLSURFSPACE3 = c.Decimal(precision: 18, scale: 2),
                        WEATHEREDZONEDEPTH = c.Decimal(precision: 18, scale: 2),
                        UNLOADCRACKDEPTH = c.Decimal(precision: 18, scale: 2),
                        SOILTEXTURENAME = c.String(maxLength: 50),
                        SOILDENSITYDEGREE = c.String(maxLength: 1),
                        SOILCONSISTENCY = c.String(maxLength: 20),
                        BEDROCKTIME = c.String(maxLength: 50),
                        BEDROCKLITHOLOGY = c.String(maxLength: 50),
                        BEDROCKANGLE = c.Decimal(precision: 18, scale: 2),
                        BEDROCKDIRECTION = c.Decimal(precision: 18, scale: 2),
                        BEDROCKDEPTH = c.Decimal(precision: 18, scale: 2),
                        GROUNDWATERDEPTH = c.Decimal(precision: 18, scale: 2),
                        GROUNDWATEROUTCROP = c.String(maxLength: 20),
                        GROUNDWATERSUPPLYTYPE = c.String(maxLength: 20),
                        DISTORTIONSIGN1 = c.String(maxLength: 1),
                        DISTORTIONPLACE1 = c.String(maxLength: 50),
                        DISTORTIONCHARACTER1 = c.String(maxLength: 200),
                        DISTORTIONINITDATE1 = c.String(maxLength: 50),
                        DISTORTIONSIGN2 = c.String(maxLength: 1),
                        DISTORTIONPLACE2 = c.String(maxLength: 50),
                        DISTORTIONCHARACTER2 = c.String(maxLength: 200),
                        DISTORTIONINITDATE2 = c.String(maxLength: 50),
                        DISTORTIONSIGN3 = c.String(maxLength: 1),
                        DISTORTIONPLACE3 = c.String(maxLength: 50),
                        DISTORTIONCHARACTER3 = c.String(maxLength: 200),
                        DISTORTIONINITDATE3 = c.String(maxLength: 50),
                        DISTORTIONSIGN4 = c.String(maxLength: 1),
                        DISTORTIONPLACE4 = c.String(maxLength: 50),
                        DISTORTIONCHARACTER4 = c.String(maxLength: 200),
                        DISTORTIONINITDATE4 = c.String(maxLength: 50),
                        DISTORTIONSIGN5 = c.String(maxLength: 1),
                        DISTORTIONPLACE5 = c.String(maxLength: 50),
                        DISTORTIONCHARACTER5 = c.String(maxLength: 200),
                        DISTORTIONINITDATE5 = c.String(maxLength: 50),
                        DISTORTIONSIGN6 = c.String(maxLength: 1),
                        DISTORTIONPLACE6 = c.String(maxLength: 50),
                        DISTORTIONCHARACTER6 = c.String(maxLength: 200),
                        DISTORTIONINITDATE6 = c.String(maxLength: 50),
                        DISTORTIONSIGN7 = c.String(maxLength: 1),
                        DISTORTIONPLACE7 = c.String(maxLength: 50),
                        DISTORTIONCHARACTER7 = c.String(maxLength: 200),
                        DISTORTIONINITDATE7 = c.String(maxLength: 50),
                        DISTORTIONSIGN8 = c.String(maxLength: 1),
                        DISTORTIONPLACE8 = c.String(maxLength: 50),
                        DISTORTIONCHARACTER8 = c.String(maxLength: 200),
                        DISTORTIONINITDATE8 = c.String(maxLength: 50),
                        ASTABLEFACTOR = c.String(maxLength: 30),
                        CURRENTSTABLESTATUS = c.String(maxLength: 1),
                        STABLETREND = c.String(maxLength: 1),
                        DESTROYEDHOME = c.Decimal(precision: 18, scale: 2),
                        DESTROYEDROAD = c.Decimal(precision: 18, scale: 2),
                        DESTROYEDCANAL = c.Decimal(precision: 18, scale: 2),
                        OTHERHARM = c.String(maxLength: 50),
                        DIRECTLOSSES = c.Decimal(precision: 18, scale: 2),
                        DISASTERLEVEL = c.String(maxLength: 1),
                        THREATENPEOPLE = c.Decimal(precision: 18, scale: 2),
                        THREATENASSETS = c.Decimal(precision: 18, scale: 2),
                        DANGERLEVEL = c.String(maxLength: 1),
                        SLOPEMONITORSUGGESTION = c.String(maxLength: 20),
                        TREATMENTSUGGESTION = c.String(maxLength: 50),
                        MONITORMASS = c.String(maxLength: 20),
                        VILLAGEHEADER = c.String(maxLength: 18),
                        PHONE = c.String(maxLength: 20),
                        PREVENTIONPLAN = c.String(maxLength: 1),
                        HIDDENDANGER = c.String(maxLength: 1),
                        SURVEYHEADER = c.String(maxLength: 10),
                        FILLTABLEPEOPLE = c.String(maxLength: 10),
                        VERIFYPEOPLE = c.String(maxLength: 10),
                        CONTACTDEPTID = c.String(maxLength: 36),
                        FILLTABLEDATE = c.String(maxLength: 20),
                        UPDATETIME = c.DateTime(),
                        RECORDSTATUS = c.String(maxLength: 1),
                        EXPSTATUS = c.String(maxLength: 1),
                        CONTROLSTATE = c.String(maxLength: 20),
                        CREATORUSERID = c.String(maxLength: 50),
                        UPDATEUSERID = c.String(maxLength: 50),
                        UPDATETIMES = c.Decimal(precision: 18, scale: 2),
                        PROJECTID = c.String(maxLength: 36),
                        MAPID = c.String(maxLength: 36),
                        MAPNAME = c.String(maxLength: 100),
                        COUNTYCODE = c.String(maxLength: 36),
                        DESTROYEDHOUSE = c.Decimal(precision: 18, scale: 2),
                        ISRSPNT = c.String(maxLength: 1),
                        ISSURVEYPNT = c.String(maxLength: 1),
                        ISMEASURINGPNT = c.String(maxLength: 1),
                        OUTDOORRECORD = c.String(maxLength: 500),
                        VILLAGE = c.String(maxLength: 50),
                        TEAM = c.String(maxLength: 50),
                        SLOPEDISTORTIONTREND = c.String(maxLength: 10),
                        PREDICTIVEVOLUME = c.Decimal(precision: 18, scale: 2),
                        PREDICTIVESCALELEVEL = c.String(maxLength: 10),
                        SLOPEDEPTH = c.Decimal(precision: 18, scale: 2),
                        THREATENOBJECT = c.String(maxLength: 50),
                        THREATENHOME = c.Decimal(precision: 18, scale: 2),
                        MASSMONITORING = c.String(maxLength: 50),
                        RELOCATION = c.String(maxLength: 50),
                        PROFESSIONMONITORING = c.String(maxLength: 50),
                        ENGINEERINGMANAGEMENT = c.String(maxLength: 50),
                        RIVERBASIN = c.String(maxLength: 100),
                        MISSINGPERSON = c.Decimal(precision: 18, scale: 2),
                        INJUREDPERSON = c.Decimal(precision: 18, scale: 2),
                        ISZLGCPNT = c.String(maxLength: 1),
                        ISMONITORPNT = c.String(maxLength: 1),
                        DISASTERSID = c.String(maxLength: 50),
                        UPDATEUSER = c.String(maxLength: 50),
                        MONITORMASSID = c.String(maxLength: 36),
                        VILLAGEHEADERID = c.String(maxLength: 36),
                        SURVEYHEADERID = c.String(maxLength: 36),
                        FILLTABLEPEOPLEID = c.String(maxLength: 36),
                        VERIFYPEOPLEID = c.String(maxLength: 36),
                        SURVEYDEPT = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.TBL_SLOPE");
            DropTable("dbo.TreeTest");
            DropTable("dbo.TBL_LAYERMANAGER");
            DropTable("dbo.DIC_HAZARDSTYPE");
            DropTable("dbo.Disaster",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_DisasterEntity_MustHaveTenant", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                    { "DynamicFilter_DisasterEntity_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
