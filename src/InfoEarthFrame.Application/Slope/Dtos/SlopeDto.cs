using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Application
{
    public class SlopeDto : EntityDto<string>
    {
        [StringLength(36)]
        public string Id { get; set; }
        [StringLength(16)]
        public string UNIFIEDCODE { get; set; }
        [StringLength(12)]
        public string CGHUNIFIEDCODE { get; set; }
        [StringLength(255)]
        public string DISASTERUNITNAME { get; set; }
        [StringLength(30)]
        public string OUTDOORCODE { get; set; }
        [StringLength(20)]
        public string INDOORCODE { get; set; }
        [StringLength(6)]
        public string PROVINCE { get; set; }
        [StringLength(6)]
        public string CITY { get; set; }
        [StringLength(9)]
        public string TOWN { get; set; }
        [StringLength(250)]
        public string LOCATION { get; set; }
        public decimal? LATITUDE { get; set; }
        public decimal? LONGITUDE { get; set; }
        public decimal? X { get; set; }
        public decimal? Y { get; set; }
        public decimal? Z { get; set; }
        public decimal? ALTTOP { get; set; }
        public decimal? ALTBOTOM { get; set; }

        [StringLength(1)]
        public string SLOPETYPE { get; set; }
        [StringLength(50)]
        public string STRATIGRAPHICTIME { get; set; }
        [StringLength(20)]
        public string LITHOLOGY { get; set; }
        public decimal? STRATUMDIRECTION { get; set; }
        public decimal? STRATUMANGLE { get; set; }
        [StringLength(50)]
        public string TECTONICREGION { get; set; }
        [StringLength(1)]
        public string EARTHQUAKEINTENSITY { get; set; }
        [StringLength(20)]
        public string MICROTOPOGRAPHY { get; set; }
        [StringLength(20)]
        public string GROUNDWATERTYPE { get; set; }
        public decimal? AVERAGEYEARRAINFALL { get; set; }
        public decimal? MAXDAYRAINFALL { get; set; }
        public decimal? MAXHOURRAINFALL { get; set; }
        public decimal? MAXWATERLEVEL { get; set; }
        public decimal? MINWATERLEVEL { get; set; }
        [StringLength(4)]
        public string POSITIONTORIVER { get; set; }
        [StringLength(20)]
        public string LANDUSAGE { get; set; }
        public decimal? SLOPEHEIGHT { get; set; }
        public decimal? SLOPELENGTH { get; set; }
        public decimal? SLOPEWIDTH { get; set; }
        public decimal? SLOPEANGLE { get; set; }
        public decimal? SLOPEDIRECTION { get; set; }
        [StringLength(1)]
        public string SLOPESHAPE { get; set; }
        [StringLength(1)]
        public string ROCKARCHTYPE { get; set; }
        public decimal? ROCKDEPTH { get; set; }
        public decimal? FRACTUREGROUPNUM { get; set; }
        public decimal? ROCKLENGTH { get; set; }
        public decimal? ROCKWIDTH { get; set; }
        public decimal? ROCKHEIGHT { get; set; }
        [StringLength(1)]
        public string SLOPEARCHTYPE { get; set; }
        [StringLength(1)]
        public string SLOPEASPECTARCHTYPE { get; set; }
        [StringLength(1)]
        public string CTRLSURFTYPE1 { get; set; }
        public decimal? CTRLSURFDIRECTION1 { get; set; }
        public decimal? CTRLSURFANGLE1 { get; set; }
        public decimal? CTRLSURFLENGTH1 { get; set; }
        public decimal? CTRLSURFSPACE1 { get; set; }
        [StringLength(1)]
        public string CTRLSURFTYPE2 { get; set; }
        public decimal? CTRLSURFDIRECTION2 { get; set; }
        public decimal? CTRLSURFANGLE2 { get; set; }
        public decimal? COCTRLSURFLENGTH2 { get; set; }
        public decimal? CTRLSURFSPACE2 { get; set; }
        [StringLength(1)]
        public string CTRLSURFTYPE3 { get; set; }
        public decimal? CTRLSURFDIRECTION3 { get; set; }
        public decimal? CTRLSURFANGLE3 { get; set; }
        public decimal? CTRLSURFLENGTH3 { get; set; }
        public decimal? CTRLSURFSPACE3 { get; set; }
        public decimal? WEATHEREDZONEDEPTH { get; set; }
        public decimal? UNLOADCRACKDEPTH { get; set; }
        [StringLength(50)]
        public string SOILTEXTURENAME { get; set; }
        [StringLength(1)]
        public string SOILDENSITYDEGREE { get; set; }
        [StringLength(20)]
        public string SOILCONSISTENCY { get; set; }
        [StringLength(50)]
        public string BEDROCKTIME { get; set; }
        [StringLength(50)]
        public string BEDROCKLITHOLOGY { get; set; }
        public decimal? BEDROCKANGLE { get; set; }
        public decimal? BEDROCKDIRECTION { get; set; }
        public decimal? BEDROCKDEPTH { get; set; }
        public decimal? GROUNDWATERDEPTH { get; set; }
        [StringLength(20)]
        public string GROUNDWATEROUTCROP { get; set; }
        [StringLength(20)]
        public string GROUNDWATERSUPPLYTYPE { get; set; }
        [StringLength(1)]
        public string DISTORTIONSIGN1 { get; set; }
        [StringLength(50)]
        public string DISTORTIONPLACE1 { get; set; }
        [StringLength(200)]
        public string DISTORTIONCHARACTER1 { get; set; }
        [StringLength(50)]
        public string DISTORTIONINITDATE1 { get; set; }
        [StringLength(1)]
        public string DISTORTIONSIGN2 { get; set; }
        [StringLength(50)]
        public string DISTORTIONPLACE2 { get; set; }
        [StringLength(200)]
        public string DISTORTIONCHARACTER2 { get; set; }
        [StringLength(50)]
        public string DISTORTIONINITDATE2 { get; set; }
        [StringLength(1)]
        public string DISTORTIONSIGN3 { get; set; }
        [StringLength(50)]
        public string DISTORTIONPLACE3 { get; set; }
        [StringLength(200)]
        public string DISTORTIONCHARACTER3 { get; set; }
        [StringLength(50)]
        public string DISTORTIONINITDATE3 { get; set; }
        [StringLength(1)]
        public string DISTORTIONSIGN4 { get; set; }
        [StringLength(50)]
        public string DISTORTIONPLACE4 { get; set; }
        [StringLength(200)]
        public string DISTORTIONCHARACTER4 { get; set; }
        [StringLength(50)]
        public string DISTORTIONINITDATE4 { get; set; }
        [StringLength(1)]
        public string DISTORTIONSIGN5 { get; set; }
        [StringLength(50)]
        public string DISTORTIONPLACE5 { get; set; }
        [StringLength(200)]
        public string DISTORTIONCHARACTER5 { get; set; }
        [StringLength(50)]
        public string DISTORTIONINITDATE5 { get; set; }
        [StringLength(1)]
        public string DISTORTIONSIGN6 { get; set; }
        [StringLength(50)]
        public string DISTORTIONPLACE6 { get; set; }
        [StringLength(200)]
        public string DISTORTIONCHARACTER6 { get; set; }
        [StringLength(50)]
        public string DISTORTIONINITDATE6 { get; set; }
        [StringLength(1)]
        public string DISTORTIONSIGN7 { get; set; }
        [StringLength(50)]
        public string DISTORTIONPLACE7 { get; set; }
        [StringLength(200)]
        public string DISTORTIONCHARACTER7 { get; set; }
        [StringLength(50)]
        public string DISTORTIONINITDATE7 { get; set; }
        [StringLength(1)]
        public string DISTORTIONSIGN8 { get; set; }
        [StringLength(50)]
        public string DISTORTIONPLACE8 { get; set; }
        [StringLength(200)]
        public string DISTORTIONCHARACTER8 { get; set; }
        [StringLength(50)]
        public string DISTORTIONINITDATE8 { get; set; }
        [StringLength(30)]
        public string ASTABLEFACTOR { get; set; }
        [StringLength(1)]
        public string CURRENTSTABLESTATUS { get; set; }
        [StringLength(1)]
        public string STABLETREND { get; set; }
        public decimal? DESTROYEDHOME { get; set; }
        public decimal? DESTROYEDROAD { get; set; }
        public decimal? DESTROYEDCANAL { get; set; }
        [StringLength(50)]
        public string OTHERHARM { get; set; }
        public decimal? DIRECTLOSSES { get; set; }
        [StringLength(1)]
        public string DISASTERLEVEL { get; set; }
        public decimal? THREATENPEOPLE { get; set; }
        public decimal? THREATENASSETS { get; set; }
        [StringLength(1)]
        public string DANGERLEVEL { get; set; }
        [StringLength(20)]
        public string SLOPEMONITORSUGGESTION { get; set; }
        [StringLength(50)]
        public string TREATMENTSUGGESTION { get; set; }
        [StringLength(20)]
        public string MONITORMASS { get; set; }
        [StringLength(18)]
        public string VILLAGEHEADER { get; set; }
        [StringLength(20)]
        public string PHONE { get; set; }
        [StringLength(1)]
        public string PREVENTIONPLAN { get; set; }
        [StringLength(1)]
        public string HIDDENDANGER { get; set; }
        [StringLength(10)]
        public string SURVEYHEADER { get; set; }
        [StringLength(10)]
        public string FILLTABLEPEOPLE { get; set; }
        [StringLength(10)]
        public string VERIFYPEOPLE { get; set; }
        [StringLength(36)]
        public string CONTACTDEPTID { get; set; }
        [StringLength(20)]
        public string FILLTABLEDATE { get; set; }
      
        public DateTime? UPDATETIME { get; set; }
        
        
        [StringLength(1)]
        public string RECORDSTATUS { get; set; }
        [StringLength(1)]
        public string EXPSTATUS { get; set; }
        [StringLength(20)]
        public string CONTROLSTATE { get; set; }
        [StringLength(50)]
        public string CREATORUSERID { get; set; }
        //public DateTime CREATORTIME {get;set;}
        [StringLength(50)]
        public string UPDATEUSERID { get; set; }
        public decimal? UPDATETIMES { get; set; }
        [StringLength(36)]
        public string PROJECTID { get; set; }
        [StringLength(36)]
        public string MAPID { get; set; }
        [StringLength(100)]
        public string MAPNAME { get; set; }
        [StringLength(36)]
        public string COUNTYCODE { get; set; }
        public decimal? DESTROYEDHOUSE { get; set; }
        [StringLength(1)]
        public string ISRSPNT { get; set; }
        [StringLength(1)]
        public string ISSURVEYPNT { get; set; }
        [StringLength(1)]
        public string ISMEASURINGPNT { get; set; }
        [StringLength(500)]
        public string OUTDOORRECORD { get; set; }
        [StringLength(50)]
        public string VILLAGE { get; set; }
        [StringLength(50)]
        public string TEAM { get; set; }
        [StringLength(10)]
        public string SLOPEDISTORTIONTREND { get; set; }
        public decimal? PREDICTIVEVOLUME { get; set; }
        [StringLength(10)]
        public string PREDICTIVESCALELEVEL { get; set; }
        public decimal? SLOPEDEPTH { get; set; }
        [StringLength(50)]
        public string THREATENOBJECT { get; set; }
        public decimal? THREATENHOME { get; set; }
        [StringLength(50)]
        public string MASSMONITORING { get; set; }
        [StringLength(50)]
        public string RELOCATION { get; set; }
        [StringLength(50)]
        public string PROFESSIONMONITORING { get; set; }
        [StringLength(50)]
        public string ENGINEERINGMANAGEMENT { get; set; }
        [StringLength(100)]
        public string RIVERBASIN { get; set; }
        public decimal? MISSINGPERSON { get; set; }
        public decimal? INJUREDPERSON { get; set; }
        [StringLength(1)]
        public string ISZLGCPNT { get; set; }
        [StringLength(1)]
        public string ISMONITORPNT { get; set; }
        [StringLength(50)]
        public string DISASTERSID { get; set; }
        [StringLength(50)]
        public string UPDATEUSER { get; set; }
        [StringLength(36)]
        public string MONITORMASSID { get; set; }
        [StringLength(36)]
        public string VILLAGEHEADERID { get; set; }
        [StringLength(36)]
        public string SURVEYHEADERID { get; set; }
        [StringLength(36)]
        public string FILLTABLEPEOPLEID { get; set; }
        [StringLength(36)]
        public string VERIFYPEOPLEID { get; set; }
        [StringLength(50)]
        public string SURVEYDEPT { get; set; }
    }

  
}
