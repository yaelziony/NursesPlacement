using System;
using DAL;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;


namespace API.Controllers
{
    [RoutePrefix("api/nurses")]

    public class NursesController : ApiController
    {
        [AcceptVerbs("GET", "POST")]

        [Route("insert")]
        [HttpPost]
        public bool Insert(Nurse nurse)
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            bool result= nursesBL.InsertNurse(nurse);
            return result;
        }
        //מחזיר טבלה של כל האחיות כולל פרטים אישיים מאופשר לאחראית מחלקה 
        //לשאול איך אפשר ללא פרטיים אישיים בעוד פונ נוספת
        [Route("getnurse/{id_nurse}")]
        [HttpGet]
        public Nurse GetNurse(string id_nurse)
        {
            BL.NurseBL NursesBL = new BL.NurseBL();
            return NursesBL.GetNurse(id_nurse);
        }

        [Route("getnurses")]
        [HttpGet]
        public List<Nurse> GetAllNurses()
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.GetAllNurses();
        }

        [Route("getnursesbynamed/{name}")]
        [HttpGet]
        public List<Nurse> GetNursesByNameD(string name)
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.GetNursesByNameDepartment(name);
        }

        [Route("login/{id_nurse}/{password}")]
        [HttpGet]
        public int login(string id_nurse,string password) {
        
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.IsNurseExist(id_nurse,password);    
        }

        [Route("loginismaneger/{id_nurse}")]
        [HttpGet]
        public bool loginManager(string id_nurse)
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.isDepartmentManager(id_nurse);
        }
        ////השם חייב להיות אותו דבר ב ניתוב וב פונ שמקבל
        //[Route("getdepartmentbynurse")]
        //[HttpPost]
        //public string GetNameDByNurse(string id)
        //{
        //    BL.NurseBL nursesBL = new BL.NurseBL();
        //    return nursesBL.nameD_By_Nurse(id);
        //}
        [Route("getdepartmentbynurse/{id_nurse}")]
        [HttpGet]
        public string GetNameDByNurse(string id_nurse)
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.nameD_By_Nurse(id_nurse);
        }
        [Route("deletenurse")]
        [HttpPost]
        public int Delete(Nurse nurse)
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.DeleteNurse(nurse);
        }

        [Route("updatenurse")]
        [HttpPost]
        public int Update(Nurse nurse)
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.UpdateNurse(nurse);
        }

        [Route("countnursesinshift/{id_nurse}")]
        [HttpGet]
        public int CountNursesInShiftD_By_Nurse(string id_nurse)
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.countNursesInShiftD_By_Nurse(id_nurse);
        }
        //מחזיר אחיות של אותה מחלקה
        [Route("getnursesbynamedepartment/{name}")]
        [HttpGet]
        public List<Nurse> GetNursesByNameDepartment(string name)
        {
            BL.NurseBL nursesBL = new BL.NurseBL();
            return nursesBL.GetNursesByNameDepartment(name);
        }
        

    }

}