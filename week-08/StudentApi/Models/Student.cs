using System.ComponentModel.DataAnnotations;

namespace StudentApi.Models
{
  public class Student
  {
    public int Id { get; set; }

    [Required]
    public string FullName { get; set; }
    public double? GPA { get; set; }

    public bool IsJoyful { get; set; } = true;
  }
}