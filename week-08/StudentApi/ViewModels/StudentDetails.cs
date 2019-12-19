using System.Collections.Generic;

namespace StudentApi.ViewModels
{
  public class StudentDetails
  {
    public int Id { get; set; }

    public string FullName { get; set; }
    public double? GPA { get; set; }

    public bool IsJoyful { get; set; } = true;

    public List<CreatedProgressReport> ProgressReports { get; set; }
      = new List<CreatedProgressReport>();
  }
}