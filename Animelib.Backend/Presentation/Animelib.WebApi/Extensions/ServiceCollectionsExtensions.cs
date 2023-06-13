using Animelib.Common.Validators;
using Animelib.Controllers.Filters;
using Animelib.Dto;
using Animelib.Dto.Response;
using Animelib.Seeding.Extensions;
using Animelib.Services.Abstractions;
using Animelib.Services.Services;
using FluentSerialization.Extensions;
using FluentSerialization.Extensions.NewtonsoftJson;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;

namespace Animelib.Controllers.Extensions;

public static class ServiceCollectionsExtensions
{
    public static IServiceCollection AddApiControllers(this IServiceCollection collection)
    {
        collection.AddControllers();
        collection.AddRouting(options =>
        {
            options.LowercaseUrls = true;
        });
        collection.AddMvc()
            .AddApplicationPart(typeof(IControllerProjectMarker).Assembly)
            .AddControllersAsServices();

        collection.AddControllers(option =>
        {
            option.Filters.Add(new ProducesAttribute("application/json"));
            option.Filters.Add(new ProducesResponseTypeAttribute(typeof(BaseExceptionDto), StatusCodes.Status400BadRequest));
            option.Filters.Add(new ProducesResponseTypeAttribute(typeof(BaseExceptionDto), StatusCodes.Status500InternalServerError));
            option.Filters.Add(new ConsumesAttribute("application/json"));
        });

        collection.AddEndpointsApiExplorer().AddSwaggerGen(options =>
        {
            options.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "Animelib API",
                Version = "v1",
                Description = "API for Animelib project",
                Contact = new OpenApiContact
                {
                    Name = "Alexander Miroshnichenko",
                    Url = new Uri("https://github.com/sashafromlibertalia")
                }
            });

            var securityScheme = new OpenApiSecurityScheme
            {
                Name = "JWT Authentication",
                Description = "Enter JWT Bearer token **_only_**",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.Http,
                Scheme = "bearer",
                BearerFormat = "JWT",
                Reference = new OpenApiReference
                {
                    Id = JwtBearerDefaults.AuthenticationScheme,
                    Type = ReferenceType.SecurityScheme
                }
            };
            options.AddSecurityDefinition(securityScheme.Reference.Id, securityScheme);
            options.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {securityScheme, Array.Empty<string>()}
            });

            var controllerAssembly = typeof(IControllerProjectMarker).Assembly;
            var controllerAssemblyName = controllerAssembly.GetName().Name;

            var xmlFilename = $"{controllerAssemblyName}.xml";
            var assemblyPath = controllerAssembly.Location
                .Replace($"{controllerAssemblyName}.dll", "");
            options.IncludeXmlComments(Path.Combine(assemblyPath, xmlFilename));
        });

        collection.AddScoped<IAnimeService, AnimeService>();
        collection.AddScoped<IIdentityService, IdentityService>();

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

    public static IServiceCollection AddDtoConfiguration(this IServiceCollection collection)
    {
        collection.AddFluentSerialization(typeof(IDtoAssemblyMarker)).AddNewtonsoftJson();
        return collection;
    }

    public static IServiceCollection AddExceptionFilters(this IServiceCollection collection)
    {
        collection.AddControllers(options =>
        {
            options.Filters.Add(new CustomExceptionFilter());
        });
        return collection;
    }
}
