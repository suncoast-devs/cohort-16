using System;
using System.Collections.Generic;
using System.Linq;

namespace CryptidTracker
{
  class Program
  {


    static void AddCreature()
    {
      // add a new cryptid
      Console.WriteLine("What do you see?");
      var creatureName = Console.ReadLine();
      Console.WriteLine("Where ????");
      var location = Console.ReadLine();
      CryptidController.AddCreature(creatureName, location);
    }

    static void QuitProgramMessage()
    {
      Console.WriteLine("Good Bye! Happy Hunting");
    }

    static void ViewAll()
    {
      DisplayListOfCryptids(CreatureSightings);
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
      var results = CreatureSightings
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
        Console.WriteLine($"{creature.Name} at {creature.LastSightedAt} on {creature.DateOfLastSighting}, {creature.NumberOfSightings} times");
      }
    }

    static void UpdateCreatureSighting()
    {
      Console.WriteLine("What do you see again?");
      var creatureName = Console.ReadLine();
      var seenCreature = CreatureSightings
        .FirstOrDefault(creature => creature.Name.ToLower() == creatureName.ToLower());
      seenCreature.NumberOfSightings++;
      seenCreature.DateOfLastSighting = DateTime.UtcNow;
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
