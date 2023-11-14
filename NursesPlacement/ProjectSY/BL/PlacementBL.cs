using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// DAL- לוקח מ   

namespace BL
{
    public class PlacementBL
    {
        DBConection dbCon = new DBConection();

        public PlacementBL()
        {

        }
        //    פונקציית הצגה:
        public List<Placement> GetAllPlacements()
        {
            List<Placement> listOfPlacement = dbCon.GetDbSet<Placement>().ToList();
            return listOfPlacement;
        }
        // פונקציית הוספה:אוביקט
        public bool InsertPlacement(Placement placement)
        {
            try
            {
                dbCon.Execute<Placement>(placement, DBConection.ExecuteActions.Insert);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        //  פונקציית מחיקה:
        public int DeletePlacement(Placement placement)
        {
            try
            {
                dbCon.Execute<Placement>(placement, DBConection.ExecuteActions.Delete);
                return 1;
            }
            catch
            {
                return 0;
            }
        }
        //פונ שמחזירה לאחות את המשמרות שלה
        public List<Placement> PlacementsByNid(string id_nurse)
        {             
            try
            {
                List<Placement> listPlacement=new List<Placement> ();
                NursesInDepartmentBL nInD =new NursesInDepartmentBL();
               if(nInD.NInD_By_Nurse(id_nurse) != 0)
                {
                    listPlacement = GetAllPlacements().Where(nd => nd.P_idNInD == nInD.NInD_By_Nurse(id_nurse)).ToList();
                    return listPlacement;
                }
               return null;
               
            }
            catch
            {
                return null;
            }
        }
       
        // פונ שמקבלת אחות , יום ומשמרת ומכניסה לטבלת השיבוץ . אם יש מקום פנוי במשמרת- מחזירה טרו , אחרת- פולס 
        public bool InsertPlacementInShift(string id_nurse,int day,string shift)
        {
            int cnt=0; 
            int nind, idDepartment;
            NursesInDepartmentBL nInD = new NursesInDepartmentBL();
            Placement placement;
            DepartmentBL departmentsBL=new DepartmentBL();    
            nind=nInD.NInD_By_Nurse(id_nurse); 
            // בודקת שהאחות לא נמצאת כבר באותו יום לפי ת.ז. ולפי יום
            if (GetAllPlacements().Find(p => p.P_day == day && p.P_idNInD ==nind)!=null)
                return false;
            idDepartment = nInD.idD_By_Nurse(id_nurse);
            try
            {
                //cnt = GetAllPlacements().Where(p=>p.P_day == day && p.P_shift == shift).ToList().Count();
                //if(cnt<departmentsBL.CountNInShift(idDepartment))
                //{
                    placement = new Placement() { P_idNInD = nind, P_day = day, P_shift = shift };
                    if(!InsertPlacement(placement)) 
                        return false;
                //}
            return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        //מחיקת שיבוץ לפי אחות ,יום ומשמרת
        public bool DeletePlacementInShift(string id,int day, string shift)
        {
            try
            {
                NursesInDepartmentBL nInD = new NursesInDepartmentBL();
                Placement pl = GetAllPlacements().First(p => p.P_day == day && p.P_shift == shift &&
                p.P_idNInD == nInD.NInD_By_Nurse(id));
                if(pl!=null) { 
                    DeletePlacement(pl);
                    return true;
                }
                return false;
            }
            catch(Exception ex)
            {
                return false;

            }
            
        }
        //פונ שבודקת אם האחות הכניסה את כמות המשמרות שצריכה
        //public bool CheckCountOfShifts(string id_nurse) {
        //    NursesInDepartmentBL nInD = new NursesInDepartmentBL();
        //    NurseBL nurse=new NurseBL();
        //    int nind = nInD.NInD_By_Nurse(id_nurse);
        //    int cnt = GetAllPlacement().Where(p => p.P_idNInD == nind).Count();

        //    if(cnt==)
        //}

    }
}
