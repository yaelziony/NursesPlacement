using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Nurse
    {
        public Nurse() {
        }         
        public string N_id{ get; set; }
        public string N_password { get; set; }
        public string N_firstName { get; set; }
        public string N_lastName{ get; set; }
        public string N_tel{ get; set; }
        public string N_email{ get; set; }
        public string N_status{ get; set; }

    }
}
