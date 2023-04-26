using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Animelib.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AnimesController : ControllerBase
{
    private const int PaginationTake = 10;

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public void GetMany(
        [FromQuery(Name = "page")] int page = 1,
        [FromQuery(Name = "take")] int take = PaginationTake
    )
    {
        throw new NotImplementedException();
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public void GetById(int id)
    {
        throw new NotImplementedException();
    }
}