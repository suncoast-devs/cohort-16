using System;

namespace CryptidTracker
{
  public class Cryptid
  {
    // Name
    public string Name { get; set; }
    // NumberOfSightings
    public int NumberOfSightings { get; set; }
    // LastSightedAt
    public string LastSightedAt { get; set; }
    // DateOfLastSighting
    public DateTime DateOfLastSighting { get; set; }
  }
}