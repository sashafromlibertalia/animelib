using Animelib.Common.Validators;
using Animelib.Core.Animes;
using Animelib.DataAccess.Abstractions;
using Animelib.Seeding.Dto;
using Newtonsoft.Json.Linq;

namespace Animelib.Seeding.Seeders;

public class AnimeSeeder : IDatabaseSeeder, IDisposable
{
    private readonly HttpClient _httpClient;
    private const string BaseUrl = "https://kitsu.io/api/edge/anime";

    public AnimeSeeder()
    {
        _httpClient = new HttpClient();
    }

    public async Task Seed(IDatabaseContext context)
    {
        foreach (var page in Enumerable.Range(0, 40).ToArray())
        {
            try
            {
                var responseMessage =
                    await _httpClient.GetAsync($"{BaseUrl}?page[limit]=10&page[offset]={page * 10}");
                var response = await responseMessage.Content.ReadAsStringAsync();
                var animes = JObject.Parse(response)["data"]?.Children().ToList() ?? new List<JToken>();

                foreach (var anime in animes.Select(rawAnime => rawAnime.ToObject<AnimeSeedResponseDto>()))
                {
                    if (anime is null) continue;

                    if (await context.Animes.FindAsync(anime.Id) is not null)
                        continue;

                    var entity = new Anime(anime.Id, anime.Attributes.CanonicalTitle, anime.Attributes.Slug,
                        anime.Attributes.Description, anime.Attributes.PosterImage?.Medium,
                        anime.Attributes.CoverImage?.Large, anime.Attributes.Status, anime.Attributes.EpisodeCount,
                        anime.Attributes.AverageRating, anime.Attributes.Subtype);

                    var validator = new AnimeValidator();
                    var result = await validator.ValidateAsync(entity);

                    if (!result.IsValid) continue;

                    context.Animes.Add(entity);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }

    public void Dispose()
    {
        _httpClient.Dispose();
    }
}