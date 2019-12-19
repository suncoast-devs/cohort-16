namespace StudentApi.ViewModels
{
  public class CreatedProgressReport
  {
    public int Id { get; set; }
    public string AttendanceIssues { get; set; }
    public string Improvement { get; set; }
    public string DoingWell { get; set; }
    public int StudentId { get; set; }
  }
}