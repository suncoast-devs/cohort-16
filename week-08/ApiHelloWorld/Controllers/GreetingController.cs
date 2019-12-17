using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ApiHelloWorld.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class GreetingsController : ControllerBase
  {

    [HttpGet]
    public ActionResult BasicGreeting()
    {
      var students = new List<string>() { "Jeffery", "Reid", "Justin" };
      var array = new string[] { "Jeffery", "Reid", "Justin" };


      return Ok(new
      {
        message = "Hello world",
        name = "Nikki",
        students = students,
        array = array
      });
    }

    [HttpGet("{language}")]
    public ActionResult Banana(string language)
    {
      return Ok(new { language = language });
    }


    [HttpPost]
    public ActionResult APostForFunAndProfit(Employee employee)
    {
      // add stuff to our database
      return Ok(employee);
    }

  }
}