using Animelib.Core.Animes;
using Animelib.Dto.Animes;

namespace Animelib.Mappings.Mappings;

public static class AnimeMapping
{
    public static AnimeDto ToDto(this Anime anime)
    {
        return new AnimeDto(
            anime.Title,
            anime.Slug,
            anime.Description,
            anime.PosterUrl,
            anime.CoverUrl,
            anime.Status,
            anime.EpisodeCount,
            anime.Rating,
            anime.Subtype
        );
    }
}