using Animelib.Dto.Animes;
using Animelib.Dto.Response;
using Animelib.Services.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Animelib.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AnimesController : ControllerBase
{
    private const int PaginationTake = 10;
    private readonly IAnimeService _service;

    public AnimesController(IAnimeService service)
    {
        _service = service;
    }

    /// <summary>Returns list of animes</summary>
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<AnimeDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<AnimeListDto>> GetMany(
        [FromQuery(Name = "page")] int page = 1,
        [FromQuery(Name = "take")] int take = PaginationTake
    )
    {
        return Ok(await _service.GetAnimesAsync(page, take));
    }

    /// <summary>
    /// Returns a single anime instance by id
    /// </summary>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(AnimeDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(BaseExceptionDto),StatusCodes.Status404NotFound)]
    public async Task<ActionResult<AnimeDto>> GetById(int id)
    {
        return Ok(await _service.GetAnimeByIdAsync(id));
    }

    /// <summary>
    /// Returns a single anime instance by slug
    /// </summary>
    [HttpGet("{slug}")]
    [ProducesResponseType(typeof(AnimeDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(BaseExceptionDto),StatusCodes.Status404NotFound)]
    public async Task<ActionResult<AnimeDto>> GetBySlug(string slug)
    {
        return Ok(await _service.GetAnimeBySlugAsync(slug));
    }
}