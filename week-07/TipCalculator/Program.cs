using System;

namespace TipCalculator
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("What is the bill total?");
      var billTotal = Console.ReadLine();
      Console.WriteLine($"Your bill was {billTotal}");
      var grandTotal =
        decimal.Parse(billTotal) +
        (decimal.Parse(billTotal) * (decimal)0.20);

      Console.WriteLine($"The grand total with tip is {grandTotal}");

    }
  }
}
