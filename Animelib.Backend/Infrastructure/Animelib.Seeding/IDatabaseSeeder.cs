using Animelib.DataAccess.Abstractions;

namespace Animelib.Seeding;

public interface IDatabaseSeeder
{
    Task Seed(IDatabaseContext context);
}