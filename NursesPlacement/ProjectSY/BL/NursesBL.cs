using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class NurseBL
    {
        DBConection dbCon = new DBConection();

        public NurseBL()
        {

        }
        //  של כל האחיות,  פונקציית הצגה:
        public List<Nurse> GetAllNurses()
        {
            List<Nurse> listOfNurse = dbCon.GetDbSet<Nurse>().ToList();
            return listOfNurse;
        }

        // לאחות אחת לפי תז   פונקציית הצגה:
        public Nurse GetNurse(string id)
        {
            try
            {
                Nurse nurse = GetAllNurses().First(n => n.N_id == id);
                if (nurse != null)
                {
                    return nurse;
                }
                return null;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        // פונ שבודקת האם האחות קיימת בDBO    משתמש לא קיים-1-= ,0=סיסמה שגויה
        public int IsNurseExist(string id,string password)
        {
            try
            {
                Nurse nurse = GetAllNurses().First(n => n.N_id == id);
                if (nurse == null)
                {
                    return -1;
                }
                nurse = GetAllNurses().First(n => n.N_password == password && n.N_id==id);
                if(nurse != null)
                {
                    return 1;
                }
                return 0;
            }
            catch (Exception ex)
            {
                return -2;
            }
        }

        // פונקציית הוספה:אוביקט
        public bool InsertNurse(Nurse nurse)
        {
            try
            {
                if (GetAllNurses().Find(n => n.N_id == nurse.N_id) == null)
                {
                    dbCon.Execute<Nurse>(nurse, DBConection.ExecuteActions.Insert);
                    return true;//
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        //פונקציית עדכון:
        public int UpdateNurse(Nurse nurse)
        {
            try
            {
                if(GetAllNurses().Find(n => n.N_id == nurse.N_id) != null)
                {
                    dbCon.Execute<Nurse>(nurse, DBConection.ExecuteActions.Update);
                    return 1;
                }
                return 0;
                
            }
            catch
            {
                return -1;
            }
        }
        //  פונקציית מחיקה:
        public int DeleteNurse(Nurse nurse)
        {
            try
            {
                if (GetAllNurses().Find(n => n.N_id == nurse.N_id) != null)
                {
                    dbCon.Execute<Nurse>(nurse, DBConection.ExecuteActions.Delete);
                    return 1;
                }
                return 0;
            }
            catch
            {
                return -1;
            }
        }
        //פונ מקבלת קוד אחות ובודקת האם אחות או אחראית מחלקה
        public bool isDepartmentManager(string id)
        {
            try
            {
                Nurse nurse = new Nurse();
                nurse = GetAllNurses().First(n => n.N_id == id);
                if (nurse != null)
                {
                    if (nurse.N_status == "אחראית מחלקה")
                    {
                        return true;
                    }
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        //מקבל קוד אחות ומחזיר שם מחלקה
        public string nameD_By_Nurse(string id_nurse)
        {
            try
            {
                NursesInDepartmentBL nursesInDepartmentBL = new NursesInDepartmentBL();
                int nid = nursesInDepartmentBL.idD_By_Nurse(id_nurse);

                if (nid != -1)
                {
                    DepartmentBL departmentBL =new DepartmentBL();
                    Department department= new Department();
                    department=departmentBL.GetAllDepartment().First(d => d.D_id == nid);
                    return department.D_name;
                }
                return "not found";
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        //מקבל קוד אחות ומחזיר כמות אחיות במשמרת
        public int countNursesInShiftD_By_Nurse(string id_nurse)
        {
            try
            {
                NursesInDepartmentBL nursesInDepartmentBL = new NursesInDepartmentBL();
                int nid = nursesInDepartmentBL.idD_By_Nurse(id_nurse);

                if (nid != -1)
                {
                    DepartmentBL departmentBL = new DepartmentBL();
                    Department department = new Department();
                    department = departmentBL.GetAllDepartment().First(d => d.D_id == nid);
                    return (int)department.D_countNursesInShift;
                }
                return 0;
            }
            catch (Exception ex)
            {
                return -1;
            }

        }
        //קבלת אחיות לפי מחלקה
        public List<Nurse> GetNursesByNameDepartment(string name)
        {
            List<Nurse> arrNurse = GetAllNurses().Where(d => nameD_By_Nurse(d.N_id) == name).ToList();
            return arrNurse;
        }
    }
}
