using Animelib.Core.Animes;
using Animelib.Core.Users;
using Animelib.DataAccess.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Animelib.DataAccess.Context;

public class DatabaseContext : DbContext, IDatabaseContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options) { }

    public DbSet<Anime> Animes => Set<Anime>();
    public DbSet<User> Users => Set<User>();
}