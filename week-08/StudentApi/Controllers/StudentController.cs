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

    [HttpGet("{id}")]
    public ActionResult GetOneStudent(int id)
    {
      var db = new DatabaseContext();
      var student = db.Students.FirstOrDefault(st => st.Id == id);
      if (student == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(student);
      }
    }

    [HttpPost]
    public ActionResult CreateStudent(Student student)
    {
      var db = new DatabaseContext();
      student.Id = 0;
      db.Students.Add(student);
      db.SaveChanges();
      return Ok(student);
    }

    [HttpPut("{id}")]
    public ActionResult UpdateStudent(Student student)
    {
      var db = new DatabaseContext();
      var prevStudent = db.Students.FirstOrDefault(st => st.Id == student.Id);
      if (prevStudent == null)
      {
        return NotFound();
      }
      else
      {
        prevStudent.FullName = student.FullName;
        prevStudent.GPA = student.GPA;
        prevStudent.IsJoyful = student.IsJoyful;
        db.SaveChanges();
        return Ok(prevStudent);
      }
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteStudent(int id)
    {
      var db = new DatabaseContext();
      var student = db.Students.FirstOrDefault(st => st.Id == id);
      if (student == null)
      {
        return NotFound();
      }
      else
      {
        db.Students.Remove(student);
        db.SaveChanges();
        return Ok();
      }
    }

  }
}