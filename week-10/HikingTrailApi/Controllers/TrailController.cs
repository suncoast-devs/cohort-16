using System.Linq;
using HikingTrailApi.Models;
using HikingTrailApi.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HikingTrailApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class TrailController : ControllerBase
  {

    // GET ALL THE TRAIL

    [HttpGet]
    public ActionResult GetAllTrails()
    {
      var db = new DatabaseContext();
      return Ok(db.Trails.OrderBy(o => o.Name));
    }


    // [HttpPost]
    // public ActionResult CreateTrailBasedOnParkName(string parkName)
    // {
    //   var db = new DatabaseContext();

    // }

    // POST 
    [HttpPost]
    public ActionResult CreateTrail(NewTrail trail)
    {
      var tr = new Trail
      {
        Name = trail.Name,
        ParkId = trail.ParkId,
        Grade = trail.Grade,
        Length = trail.Length
      };
      var db = new DatabaseContext();
      db.Trails.Add(tr);
      db.SaveChanges();
      return Ok(tr);
    }

    // TODO: SEARCH 

    [HttpGet("{id}")]
    public ActionResult GetTrail(int id)
    {
      var db = new DatabaseContext();
      var trail = db.Trails.Include(i => i.Park).FirstOrDefault(f => f.Id == id);
      if (trail == null)
      {
        return NotFound(new NotFoundResponse
        {
          Message = "A trial with that id was not found",
          QueryId = id
        });
      }
      else
      {
        return Ok(trail);
      }
    }
  }
}