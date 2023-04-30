namespace Animelib.Dto.Animes;

public record AnimeListDto
(
    IEnumerable<AnimeDto> Data,
    int total
);