using Animelib.Dto.Identity;
using Animelib.Services.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace Animelib.Controllers;

[Route("api/auth")]
[ApiController]
public class IdentityController : ControllerBase
{
    private readonly IIdentityService _service;
    
    public IdentityController(IIdentityService service)
    {
        _service = service;
    }
    
    [HttpPost("signin")]
    public Task<ActionResult> Login([FromBody] LoginUserDto user)
    {
        return Task.FromResult<ActionResult>(Ok());
    }
    
    [HttpPost("signup")]
    public async Task<ActionResult> Register([FromBody] CreateUserDto user)
    {
        await _service.CreateUserAsync(user);
        return Ok();
    }
}