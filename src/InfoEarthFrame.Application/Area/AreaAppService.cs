using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Authorization;
using Abp.Collections.Extensions;
using Abp.Extensions;
using iTelluro.SSO.WebServices.DistrictZone;

namespace InfoEarthFrame.Application
{
    public class AreaAppService : ApplicationService, IAreaAppService
    {
        /// <summary>
        /// 获取省
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        public List<AreaOutput> GetProvinces(ProvincesQuery query)
        {
            DistrictListWS districtListWs = new DistrictListWS(query.Token, "", "");
            List<AreaOutput> list = new List<AreaOutput>();
            var ret = districtListWs.FetchAllProvincesAuth();
            ret.ForEach((x) =>
            {
                AreaOutput a = new AreaOutput
                {
                    AllPinYin = x.AllPinYin,
                    DistrictCode = x.DistrictCode,
                    DistrictName = x.DistrictName,
                    FirstPinYin = x.FirstPinYin,
                    Label = x.DistrictName,
                    Children = new object[] { }
                };
                list.Add(a);
            });

            return list;
        }

        /// <summary>
        /// 获取市数据
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public List<AreaOutput> GetCity(CityQuery query)
        {
            DistrictListWS districtListWs = new DistrictListWS(query.Token, "", "");
            string[] proviceCodes = new string[] { query.ProviceCode };
            List<AreaOutput> list = new List<AreaOutput>();
            var ret = districtListWs.FetchCityAuth(proviceCodes);
            ret.ForEach((x) =>
            {
                AreaOutput a = new AreaOutput
                {
                    AllPinYin = x.AllPinYin,
                    DistrictCode = x.DistrictCode,
                    DistrictName = x.DistrictName,
                    FirstPinYin = x.FirstPinYin,
                    Label = x.DistrictName,
                    Children = new object[] { }
                };
                list.Add(a);
            });

            return list;
        }

        /// <summary>
        /// 获取县数据
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public List<AreaOutput> GetCounty(CountyQuery query)
        {
            DistrictListWS districtListWs = new DistrictListWS(query.Token, "", "");
            List<AreaOutput> list = new List<AreaOutput>();
            var ret = query.CityCodes == null ? districtListWs.FetchCountyByCityCodeAuth(query.CityCode) :
                districtListWs.FetchByParentDistrictList(query.CityCodes);
            ret.ForEach((x) =>
            {
                AreaOutput a = new AreaOutput
                {
                    AllPinYin = x.AllPinYin,
                    DistrictCode = x.DistrictCode,
                    DistrictName = x.DistrictName,
                    FirstPinYin = x.FirstPinYin,
                    Label = x.DistrictName,
                    Children = new object[] { }
                };
                list.Add(a);
            });

            return list;
        }
        /// <summary>
        /// 获取镇数据
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public List<TownOutput> GetTowns(TownsQuery query)
        {
            string[] cityCodeArr = query.CountyCodes != null ? query.CountyCodes : new string[] { query.CountyCode };
            DistrictListWS districtListWs = new DistrictListWS(query.Token, "", "");            
            List<TownOutput> list = new List<TownOutput>();
            var ret =districtListWs.FetchTownAuth(cityCodeArr);
            ret.ForEach((x) =>
            {
                TownOutput a = new TownOutput
                {
                    Guid = x.Guid,
                    CityCode = x.CityCode,
                    TownCode = x.TownCode,
                    TownName = x.TownName,
                    Label = x.TownName,
                    DistrictCode = x.TownCode,
                    Children = new object[] { }
                };
                list.Add(a);
            });
            return list;
        }
    }
}
