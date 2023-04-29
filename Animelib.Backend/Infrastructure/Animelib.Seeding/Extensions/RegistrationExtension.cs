using Animelib.DataAccess.Abstractions;
using FluentScanning;
using FluentScanning.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

namespace Animelib.Seeding.Extensions;

public static class RegistrationExtension
{
    public static IServiceCollection AddSeeding(this IServiceCollection collection)
    {
        using var scanner = 
            collection.UseAssemblyScanner(typeof(ISeedingAssemblyMarker));

        scanner.EnqueueAdditionOfTypesThat()
            .WouldBeRegisteredAs<IDatabaseSeeder>()
            .WithSingletonLifetime()
            .AreAssignableTo<IDatabaseSeeder>()
            .AreNotAbstractClasses()
            .AreNotInterfaces();

        return collection;
    }
    
    public static async Task UseDatabaseSeeders(
        this IServiceProvider provider,
        CancellationToken cancellationToken = default)
    {
        using var scope = provider.CreateScope();

        var context = scope.ServiceProvider.GetRequiredService<IDatabaseContext>();
        var seeders = scope.ServiceProvider
            .GetServices<IDatabaseSeeder>();

        foreach (var seeder in seeders)
        {
            await seeder.Seed(context);
        }

        await context.SaveChangesAsync(cancellationToken);
    }
}