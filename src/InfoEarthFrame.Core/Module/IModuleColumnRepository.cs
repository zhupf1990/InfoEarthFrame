﻿using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Core
{
    public interface IModuleColumnRepository : IRepository<ModuleColumnEntity, string>
    {
    }
}
