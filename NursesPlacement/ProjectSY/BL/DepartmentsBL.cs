using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
//האוביקטים מה DAL
namespace BL
{
    public class DepartmentBL
    {
        DBConection dbCon = new DBConection();

        public DepartmentBL()
        {
        }
        //    פונקציית הצגה:
        public List<Department> GetAllDepartment()
        {
            List<Department> listOfDepartment = dbCon.GetDbSet<Department>().ToList();
            return listOfDepartment;
        }
        //  לפי שם // פונקציית הצגה:
        public Department GetDepartment(string name)
        {
            try
            {
                Department department = GetAllDepartment().First(d => d.D_name == name);
                if (department != null)
                {
                    return department;
                }
                return null;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        // פונקציית הוספה:אוביקט
        public string InsertDepartment(Department department)
        {
            try
            {
                if (GetAllDepartment().Find(d => d.D_id == department.D_id) == null)
                {
                    dbCon.Execute<Department>(department, DBConection.ExecuteActions.Insert);
                }
                return department.D_id.ToString();
            }
            catch (Exception ex)
            {
                return "error";
            }
        }

        //מקבלת קוד מחלקה ומחזירה כמות אחיות במשמרת
        public int CountNInShift(int id)
        {
            Department department = GetAllDepartment().First(d => d.D_id == id);
            return (int)department.D_countNursesInShift;
        }
        //מקבל שם מחלקה ומחזיר קוד מחלקה
        public int D_id_By_D_name(string name)
        {
            Department department = GetAllDepartment().First(d => d.D_name == name);
            return department.D_id;
        }
       
    }
}

