using Animelib.Core.Animes;
using Microsoft.EntityFrameworkCore;

namespace Animelib.DataAccess.Abstractions;

public interface IDatabaseContext
{
    DbSet<Anime> Animes { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}