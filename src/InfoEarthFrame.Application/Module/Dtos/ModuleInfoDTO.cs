using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoEarthFrame.Module.Dtos
{
    public class ModuleInfoDTO
    {
        public ModuleDTO ModuleDTO { get; set; }

        public List<ModuleButtonDTO> ModuleButtonDTOList { get; set; }
    }
}
