using Animelib.Controllers.Extensions;
using Animelib.DataAccess.Extensions;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddApiControllers()
    .AddValidation()
    .AddExceptionFilters()
    .AddDtoConfiguration()
    .AddDatabaseContext(o => 
        o.UseSqlite("Data Source=animelib.db"));

await builder.Services.ApplySeeders();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors(o => o.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

app.Run();