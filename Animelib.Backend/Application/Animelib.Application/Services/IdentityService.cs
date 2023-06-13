using Animelib.Core.Animes;
using Animelib.Core.Users;
using Animelib.DataAccess.Abstractions;
using Animelib.Dto.Identity;
using Animelib.Services.Abstractions;

namespace Animelib.Services.Services;

public class IdentityService : IIdentityService
{
    private readonly IDatabaseContext _context;

    public IdentityService(IDatabaseContext context)
    {
        _context = context;
    }
    
    public Task<User> CreateUserAsync(CreateUserDto dto)
    {
        var user = new User(dto.Username, dto.Email, dto.Password);
        
        user.AddWatchList(new WatchList("Completed", user, new List<Anime>()));
        user.AddWatchList(new WatchList("Watching", user, new List<Anime>()));
        user.AddWatchList(new WatchList("On Hold", user, new List<Anime>()));
        user.AddWatchList(new WatchList("Dropped", user, new List<Anime>()));
        user.AddWatchList(new WatchList("Plan to Watch", user, new List<Anime>()));
        throw new NotImplementedException();
    }
}