using Animelib.Controllers.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddApiControllers()
    .AddValidation();

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