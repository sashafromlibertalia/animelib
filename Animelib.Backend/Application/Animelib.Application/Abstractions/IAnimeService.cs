using Animelib.Dto.Animes;

namespace Animelib.Services.Abstractions;

public interface IAnimeService
{
    Task<IEnumerable<AnimeDto>> GetAnimesAsync(int page, int take);
    Task<AnimeDto> GetAnimeByIdAsync(int id);
    Task<AnimeDto> GetAnimeBySlugAsync(string slug);
}