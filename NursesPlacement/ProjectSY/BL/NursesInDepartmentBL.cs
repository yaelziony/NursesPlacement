using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class NursesInDepartmentBL
    {
        DBConection dbCon = new DBConection();

        public NursesInDepartmentBL()
        {
        }
        //    פונקציית הצגה:
        public List<NursesInDepartment> GetAllNursesInDepartment()
        {
            List<NursesInDepartment> listOfNursesInDepartment = dbCon.GetDbSet<NursesInDepartment>().ToList();
            return listOfNursesInDepartment;
        }
        // פונקציית הוספה:אוביקט
        //מקבל קוד אחות ושם מחלקה
        public bool InsertNursesInDepartment(string id_nurse, string d_name)
        {
            try
            {
                if (GetAllNursesInDepartment().Find(n => n.ND_N_id == id_nurse) == null)
                {
                    DepartmentBL departments = new DepartmentBL();
                    int D_id = departments.D_id_By_D_name(d_name); 
                    NursesInDepartment nursesInDepartment = new NursesInDepartment();
                    nursesInDepartment.ND_N_id = id_nurse;
                    nursesInDepartment.ND_D_id = D_id;
                    dbCon.Execute<NursesInDepartment>(nursesInDepartment, DBConection.ExecuteActions.Insert);
                    return true;//
                }
                return false;//
            }
            catch (Exception ex)
            {
                return false;//
            }
        }

        //פונקציית עדכון:
        //מקבל קוד אחות ושם מחלקה
        public int UpdateNursesInDepartment(string id_nurse, string d_name)
        {
            try
            {
                if (GetAllNursesInDepartment().Find(n => n.ND_N_id == id_nurse) != null)
                {
                    DepartmentBL departments = new DepartmentBL();
                    int D_id = departments.D_id_By_D_name(d_name);
                    NursesInDepartment nursesInDepartment = new NursesInDepartment();
                    nursesInDepartment.ND_N_id = id_nurse;
                    nursesInDepartment.ND_D_id = D_id;
                    dbCon.Execute<NursesInDepartment>(nursesInDepartment, DBConection.ExecuteActions.Update);
                    return 1;
                }
                return -1;
            }
            catch(Exception ex)
            {
                return 0;
            }
        }
        // פונקציית מחיקה:
        //מקבל קוד אחות 
        public int DeleteNursesInDepartment(string id_nurse)
        {
            try
            {

                NursesInDepartment nursesInDepartment = GetAllNursesInDepartment().First(n => n.ND_N_id == id_nurse);
                if(nursesInDepartment != null ) { 
                    dbCon.Execute<NursesInDepartment>(nursesInDepartment, DBConection.ExecuteActions.Delete);
                    return 1;
                }
                return 0;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
        //מקבל  אחות ומחזיר קוד אחות במחלקה
        public int NInD_By_Nurse(string id_nurse)
        {
            try
            {
                NursesInDepartment nid = GetAllNursesInDepartment().First(nd => nd.ND_N_id == id_nurse);
                if (nid != null)
                {
                    return nid.ND_id_NinD;
                }
                return -1;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        //מקבל  אחות ומחזיר קוד  מחלקה
        public int idD_By_Nurse(string id_nurse)
        {
            try
            {
                NursesInDepartment nid = GetAllNursesInDepartment().First(nd => nd.ND_N_id == id_nurse);
                if (nid != null)
                {
                    return (int)nid.ND_D_id;
                }
                return -1;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        //מחזיר את ID האחרון ברשימה
        public int max_id_N_In_D()
        {
            return GetAllNursesInDepartment().Max(nd=>nd.ND_id_NinD);
        }
    }
}



