using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HikingTrailApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HikingTrailApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {
    private readonly DatabaseContext db;

    public SearchController(DatabaseContext context)
    {
      this.db = context;
    }

    [HttpGet]
    public async Task<ActionResult> SearchParks([FromQuery]string searchTerm)
    {

      var results = db.Parks
        .Where(park =>
            park.Name.ToLower().Contains(searchTerm.ToLower()) ||
            park.City.ToLower().Contains(searchTerm.ToLower()) ||
            park.Zip.Contains(searchTerm) ||
            park.Address.ToLower().Contains(searchTerm.ToLower())
        );
      var query = new SearchQuery
      {
        SearchTerm = searchTerm
      };
      db.SearchQueries.Add(query);
      //   db.SaveChanges();
      await db.SaveChangesAsync();
      return Ok(results);
    }


    [HttpGet("queries")]
    public async Task<ActionResult> GetRecentSearchQueries()
    {
      var queries = db.SearchQueries.OrderByDescending(o => o.Timestamp).Take(10);
      return Ok(queries);
    }
  }
}