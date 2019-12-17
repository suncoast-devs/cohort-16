using System;

namespace WithMeAt3
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");

      var str = "dog";
      Console.ReadKey();
      var successful = int.TryParse(str, out int banana);
      if (successful)
      {
        Console.WriteLine(":Good work, your number is" + banana);
      }
      else
      {
        Console.WriteLine("Try again with a numbert");
      }



    }
  }
}
