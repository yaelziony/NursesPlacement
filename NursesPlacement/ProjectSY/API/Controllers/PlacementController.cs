using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("api/placement")]
    public class PlacementController : ApiController
    {
        [AcceptVerbs("GET", "POST")]

        [Route("getplacements")]
        [HttpGet]
        public List<DAL.Placement> GetAllPlacements()
        {
            BL.PlacementBL placementBL = new BL.PlacementBL();
            return placementBL.GetAllPlacements();
        }

        [Route("insert")]
        [HttpPost]
        public bool Insert(PostPlacement postPlacement)
        {
            BL.PlacementBL placementBL = new BL.PlacementBL();
            return placementBL.InsertPlacementInShift(postPlacement.id_nurse, postPlacement.day, postPlacement.shift);            
        }
        [Route("delete")]
        [HttpPost]
        public bool Delete(PostPlacement postPlacement)
        {
            BL.PlacementBL placementBL = new BL.PlacementBL();
            return placementBL.DeletePlacementInShift(postPlacement.id_nurse, postPlacement.day,postPlacement.shift);
        }
        [Route("placementsbynid/{id_nurse}")]
        [HttpGet]
        public List<DAL.Placement> PlacementsByNid(string id_nurse) { 
            BL.PlacementBL placementBL = new BL.PlacementBL();
            return placementBL.PlacementsByNid(id_nurse);
        }
        // צריך פעולה שמקבלת קוד אחות
        // ומוחקת את כל השיבוצים שלה




    }


}