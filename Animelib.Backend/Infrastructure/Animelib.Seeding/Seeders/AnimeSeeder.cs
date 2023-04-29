using Animelib.DataAccess.Abstractions;

namespace Animelib.Seeding.Seeders;

public class AnimeSeeder : IDatabaseSeeder
{
    private readonly HttpClient _httpClient;

    public AnimeSeeder()
    {
        _httpClient = new HttpClient();
    }

    public async Task Seed(IDatabaseContext context)
    {
        try
        {
            var responseMessage = await _httpClient.GetAsync("https://kitsu.io/api/edge/anime/1");
            var response = await responseMessage.Content.ReadAsStringAsync();
            Console.WriteLine(response);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}