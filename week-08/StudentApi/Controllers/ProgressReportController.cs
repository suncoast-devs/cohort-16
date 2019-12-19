using System.Linq;
using Microsoft.AspNetCore.Mvc;
using StudentApi.Models;
using StudentApi.ViewModels;

namespace StudentApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProgressReportController : ControllerBase
  {
    [HttpPost]
    public ActionResult CreateProgressReport(NewProgressReportViewModel vm)
    {
      var db = new DatabaseContext();
      var student = db.Students
        .FirstOrDefault(st => st.Id == vm.StudentId);
      if (student == null)
      {
        return NotFound();
      }
      else
      {
        var report = new ProgressReport
        {
          AttendanceIssues = vm.AttendanceIssues,
          DoingWell = vm.DoingWell,
          StudentId = vm.StudentId,
          Improvement = vm.Improvement
        };
        db.ProgressReports.Add(report);
        db.SaveChanges();
        var rv = new CreatedProgressReport
        {
          Id = report.Id,
          AttendanceIssues = report.AttendanceIssues,
          DoingWell = report.DoingWell,
          StudentId = report.StudentId,
          Improvement = report.Improvement
        }
      return Ok(rv);
      }
    }
  }
}