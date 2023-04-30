namespace Animelib.Dto.Animes;

public record AnimeDto
(
    string Title,
    string Slug,
    string Description,
    string? PosterUrl,
    string? CoverUrl,
    string Status, 
    int? EpisodesCount,
    float Rating
);