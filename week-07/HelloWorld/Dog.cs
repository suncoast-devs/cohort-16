namespace HelloWorld
{
  public class Dog
  {
    // accessModifier Type Name {get;set;}

    // fur
    public string Fur { get; set; }
    // teeth
    public string Teeth { get; set; }
    // temperament 
    public string Temperament { get; set; }
    // Taillength
    public double TailLength { get; set; }
    // NumberOfLegs
    public int NumberOfLegs { get; set; }

    private string Breed { get; set; }


    public void UpdateBreed(string newBreed)
    {
      if (newBreed == "chihuahua")
      {
        this.Breed = newBreed;
      }
    }


  }
}