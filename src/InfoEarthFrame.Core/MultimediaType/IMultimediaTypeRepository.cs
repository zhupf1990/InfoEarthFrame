﻿using InfoEarthFrame.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Repositories;

namespace InfoEarthFrame.Core
{
    public interface IMultimediaTypeRepository : IRepository<MultimediaTypeEntity, string>
    {
        
    }
}
