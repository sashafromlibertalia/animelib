using Animelib.Dto.Animes;

namespace Animelib.Services.Abstractions;

public interface IAnimeService
{
    Task<AnimeListDto> GetAnimesAsync(int page, int take);
    Task<AnimeDto> GetAnimeByIdAsync(int id);
    Task<AnimeDto> GetAnimeBySlugAsync(string slug);
}