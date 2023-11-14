using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("api/nursesindepartment")]
    public class NursesInDepartmentController : ApiController
    {
        [AcceptVerbs("GET", "POST")]

        [Route("insert")]
        [HttpPost]
        public bool Insert(PostNursesInDepartment postNursesInDepartment)
        {
            BL.NursesInDepartmentBL nursesInDepartmentBL = new BL.NursesInDepartmentBL();
            bool result=nursesInDepartmentBL.InsertNursesInDepartment(postNursesInDepartment.id_nurse, postNursesInDepartment.department_name);
            return result;//
        }
        //אין פונקציית getAll


        [Route("update")]
        [HttpPost]
        public int Update(PostNursesInDepartment postNursesInDepartment)
        {
            BL.NursesInDepartmentBL nursesInDepartmentBL = new BL.NursesInDepartmentBL();
            nursesInDepartmentBL.UpdateNursesInDepartment(postNursesInDepartment.id_nurse, postNursesInDepartment.department_name);
            return 1;
        }

        [Route("delete/{id_nurse}")]
        [HttpGet]
        public int Delete(string id_nurse)
        {
            BL.NursesInDepartmentBL nursesInDepartmentBL = new BL.NursesInDepartmentBL();
            return nursesInDepartmentBL.DeleteNursesInDepartment(id_nurse);
        }

  
    }
}