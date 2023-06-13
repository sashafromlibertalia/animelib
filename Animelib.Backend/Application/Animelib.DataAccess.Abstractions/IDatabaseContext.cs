using Animelib.Core.Animes;
using Animelib.Core.Users;
using Microsoft.EntityFrameworkCore;

namespace Animelib.DataAccess.Abstractions;

public interface IDatabaseContext
{
    DbSet<Anime> Animes { get; }
    DbSet<User> Users { get; }
    DbSet<WatchList> WatchLists { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
