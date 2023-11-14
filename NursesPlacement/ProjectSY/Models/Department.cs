using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Department
    {
        public Department()
        { }

        public int D_id { get; set; }
        public string D_name { get; set; }
        public int D_countNurcesInShift { get; set; }
        public int D_countNursesInDep  {get; set; }  

    }
}
