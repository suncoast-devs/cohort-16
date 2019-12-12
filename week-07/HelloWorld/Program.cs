using System;
using System.Collections.Generic;

namespace HelloWorld
{
  class Program
  {

    // get greeting
    // ins: a string of the name of who i am greeting
    // outs: a string of the full greeint "Welcome to C#, + name"

    // const getGreeting = name => {
    // return `Welcome to C#, ${name}`
    // }
    // static returnType FunctionName(params){}
    static string GetGreeting(string name)
    {
      return $"Welcome to C#, {name}";
    }

    static void Main(string[] args)
    {
      // logging
      Console.WriteLine("Hello 16! Welcome to C#!");
      Console.WriteLine("Another line goes here");

      // varibles
      // const counter = 0
      int counter = 0;

      //   counter = "not a number";

      counter = int.Parse("423");


      //   let name = "bob";
      string name = "bob";

      // primitive types

      int x = 3;
      long y = 2332222222222;
      double z = 2.3;
      float a = 3.45f;
      decimal b = 5.8m;

      b = (decimal)a;



      char c = 'r';

      bool d = true;

      byte f;

      var fullname = "Jimmy Buffet";
      var age = 32;
      // math
      var age2 = 10.0 / 3;


      //loop
      // for
      for (int i = 0; i < 10; i++)
      {
        Console.WriteLine(i);
      }
      // while
      while (false)
      {

      }
      // if (logic)

      if (a > 10)
      {
        Console.WriteLine("yes!");
      }
      else
      {
        System.Console.WriteLine("No");
      }

      switch (b)
      {
        case 4:
          // do the thing 
          break;
        default:
          break;
      }

      // functions, calling and defining
      var greeting = GetGreeting("Jeffery");

      // arrays   
      // const scores = []
      var scores = new int[10];

      scores[1] = 12;

      for (int i = 0; i < scores.Length; i++)
      {
        Console.WriteLine(scores[i]);
      }

      // scores[11] = 34;

      // List

      // arrays (data structures)
      var names = new List<string>();
      var moreScores = new List<int>();
      var gpas = new List<double>();

      names.Add("nolan");
      names.Add("Chris");
      names.Add("Amanda");

      Console.WriteLine(names[2]);
      Console.WriteLine(names);
      foreach (var n in names)
      {
        Console.WriteLine(n);
      }

      var guess = Math.Round(99d / 2);
      Console.WriteLine(guess);
      // objects

      var fido = new Dog();

      fido.TailLength = 3.5;
      fido.Temperament = "Awesome";
      fido.Fur = "Yes";
      // fido.Breed = "Poodle";
      fido.UpdateBreed("pug");

      // map/filter/reduce

      // libraries/pacakges
      // API calls 
    }
  }
}
