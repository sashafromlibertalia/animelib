using Microsoft.AspNetCore.Mvc;

namespace Animelib.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AnimesController : ControllerBase
{
    [HttpGet]
    public void Get() { }
}