using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Placement
    {
        public int P_id { get; set; }
        public Nullable<int> P_idNInD { get; set; }
        public Nullable<int> P_day { get; set; }
        public string P_shift { get; set; }

    }
}
