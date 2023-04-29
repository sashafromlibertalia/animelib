using Animelib.Common.Validators;
using Animelib.Seeding.Extensions;
using FluentValidation;
using FluentValidation.AspNetCore;

namespace Animelib.Controllers.Extensions;

public static class ServiceCollectionsExtensions
{
    public static IServiceCollection AddApiControllers(this IServiceCollection collection)
    {
        collection.AddControllers();
        collection.AddRouting(options => options.LowercaseUrls = true);
        collection.AddMvc()
            .AddApplicationPart(typeof(IControllerProjectMarker).Assembly)
            .AddControllersAsServices();
        collection.AddEndpointsApiExplorer().AddSwaggerGen();
        
        return collection;
    }
    
    public static IServiceCollection AddValidation(this IServiceCollection collection)
    {
        collection.AddFluentValidationAutoValidation()
            .AddFluentValidationClientsideAdapters()
            .AddValidatorsFromAssemblyContaining<IValidatorAssemblyMarker>();

        return collection;
    }
    
    public static async Task ApplySeeders(this IServiceCollection collection)
    {
        collection.AddSeeding();

        var provider = collection.BuildServiceProvider();
        await provider.UseDatabaseSeeders();
    }
}