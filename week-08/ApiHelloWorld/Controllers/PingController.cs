using System;
using Microsoft.AspNetCore.Mvc;

namespace ApiHelloWorld.Controllers
{

  [ApiController]
  [Route("api/[controller]")]
  public class PingController : ControllerBase
  {


    [HttpGet]
    public ActionResult GetPong()
    {
      return Ok(new { Pong = DateTime.Now });
    }
  }
}