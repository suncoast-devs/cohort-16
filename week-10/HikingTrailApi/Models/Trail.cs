namespace HikingTrailApi.Models
{
  public class Trail
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public double Length { get; set; }
    public string Grade { get; set; }

    public int ParkId { get; set; }

    public Park Park { get; set; }

  }
}