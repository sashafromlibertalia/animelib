using Animelib.Core.Animes;
using Microsoft.EntityFrameworkCore;

namespace Animelib.DataAccess.Context;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options) { }

    public DbSet<Anime> Animes => Set<Anime>();
}