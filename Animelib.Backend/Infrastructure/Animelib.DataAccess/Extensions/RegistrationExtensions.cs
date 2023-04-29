using Animelib.DataAccess.Abstractions;
using Animelib.DataAccess.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Animelib.DataAccess.Extensions;

public static class RegistrationExtensions
{
    public static IServiceCollection AddDatabaseContext(
        this IServiceCollection collection,
        Action<DbContextOptionsBuilder> action)
    {
        collection.AddDbContext<IDatabaseContext, DatabaseContext>(action);

        return collection;
    }
}