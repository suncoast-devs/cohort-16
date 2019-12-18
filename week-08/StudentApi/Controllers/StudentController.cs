using System.Linq;
using Microsoft.AspNetCore.Mvc;
using StudentApi.Models;

namespace StudentApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class StudentController : ControllerBase
  {

    [HttpGet]
    public ActionResult GetAllStudents()
    {
      // return a list of all students ordered by fullname
      var db = new DatabaseContext();
      return Ok(db.Students.OrderBy(student => student.FullName));
    }

  }
}