using System;

namespace CryptidTracker
{
  public class CryptidController
  {
    static public void AddCreature(string name, string location)
    {
      var creature = new Cryptid();
      creature.Name = name;
      creature.LastSightedAt = location;
      creature.DateOfLastSighting = DateTime.Now;
      creature.NumberOfSightings = 1;

      CryptidModel.CreatureSightings.Add(creature);

    }
  }
}