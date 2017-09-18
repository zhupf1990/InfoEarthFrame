using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using InfoEarthFrame.Common;

namespace InfoEarthFrame.Core
{
    public interface ITreeTestRepository : IRepository<TreeTestEntity, string>
    {
       
    }
}
