using System;
using System.Collections.Generic;
using System.Linq;

namespace CryptidTracker
{
  class Program
  {

    // static List<Cryptid> CreatureSightings = new List<Cryptid>();
    static DatabaseContext Db = new DatabaseContext();


    static void AddCreature()
    {
      // add a new cryptid
      Console.WriteLine("What do you see?");
      var creatureName = Console.ReadLine();
      Console.WriteLine("Where ????");
      var location = Console.ReadLine();

      var creature = new Cryptid();
      creature.Name = creatureName;
      creature.LastSightedAt = location;
      creature.DateOfLastSighting = DateTime.Now;
      creature.NumberOfSightings = 1;

      // CreatureSightings.Add(creature);

      // define our database
      // var db = new DatabaseContext();
      // // add the new object to DbSet
      Db.Cryptids.Add(creature);
      // save the changes
      Db.SaveChanges();

    }

    static void QuitProgramMessage()
    {
      Console.WriteLine("Good Bye! Happy Hunting");
    }

    static void ViewAll()
    {
      // defined a connection to your database
      // var db = new DatabaseContext();
      DisplayListOfCryptids(Db.Cryptids);
    }

    static void UnknownCommand()
    {
      Console.WriteLine("I don't understand that, try again");
    }

    static void SearchForCreature()
    {
      Console.WriteLine("What are you searhing for?");
      var searchTerm = Console.ReadLine();
      // Search our list????
      // var db = new DatabaseContext();

      var results = Db.Cryptids
            .Where(creature =>
                creature.Name.ToLower()
                    .Contains(searchTerm.ToLower()));

      DisplayListOfCryptids(results);
    }

    static void DisplayListOfCryptids(IEnumerable<Cryptid> creatures)
    {
      Console.WriteLine("You have seen");
      Console.WriteLine("----------------");
      foreach (var creature in creatures)
      {
        Console.WriteLine($"{creature.Id}: {creature.Name} at {creature.LastSightedAt} on {creature.DateOfLastSighting}, {creature.NumberOfSightings} times");
      }
    }

    static void UpdateCreatureSighting()
    {
      Console.WriteLine("What do you see again?");
      var creatureName = Console.ReadLine();
      var seenCreature = Db.Cryptids
        .FirstOrDefault(creature => creature.Name.ToLower() == creatureName.ToLower());
      seenCreature.NumberOfSightings++;
      seenCreature.DateOfLastSighting = DateTime.UtcNow;
      Db.SaveChanges();

    }

    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to Creature Spotter 5000");
      var input = "";
      while (input != "quit")
      {
        Console.WriteLine("What would you like to do?");
        Console.WriteLine("Available commands are: add, view, search, update, quit");
        input = Console.ReadLine().ToLower();
        if (input == "add")
        {
          AddCreature();
        }
        else if (input == "update")
        {
          UpdateCreatureSighting();
        }
        else if (input == "search")
        {
          SearchForCreature();
        }
        else if (input == "quit")
        {
          QuitProgramMessage();
        }
        else if (input == "view")
        {
          ViewAll();
        }
        else
        {
          UnknownCommand();
        }

      }
    }
  }
}
