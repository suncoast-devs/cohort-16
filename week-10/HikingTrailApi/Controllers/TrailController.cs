using System.Linq;
using HikingTrailApi.Models;
using HikingTrailApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace HikingTrailApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class TrailController : ControllerBase
  {

    // GET ALL THE TRAIL


    // POST 

    // SEARCH 

    [HttpGet("{id}")]
    public ActionResult GetTrail(int id)
    {
      var db = new DatabaseContext();
      var trail = db.Trails.FirstOrDefault(f => f.Id == id);
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