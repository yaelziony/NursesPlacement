using BL;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace API.Controllers
 {
    [RoutePrefix("api/department")]
    public class DepartmentController:ApiController
    {
        [AcceptVerbs("GET","POST")]
        
        //[Route("insert")]
        //[HttpPost]
        //public string InsertDepartment(Department d)
        //{
        //    BL.DepartmentBL DepartmentBL = new DepartmentBL();
        //    return DepartmentBL.InsertDepartment(d);    
        //}

        [Route("getdepartment/{name}")]
        [HttpGet]
        public Department GetDepartment(string name)
        {
            BL.DepartmentBL department = new BL.DepartmentBL();
            return department.GetDepartment(name);
        }

        [Route("getdepartments")]
        [HttpGet]
        public List<Department> GetAllDepartments()
        {
            BL.DepartmentBL Department = new BL.DepartmentBL();
            return Department.GetAllDepartment();
        }

        [Route("didbydname/{name}")]
        [HttpGet]
        public int D_id_By_D_name(string name)
        {
            BL.DepartmentBL Department = new BL.DepartmentBL();
            return Department.D_id_By_D_name(name);
        }

    }
}