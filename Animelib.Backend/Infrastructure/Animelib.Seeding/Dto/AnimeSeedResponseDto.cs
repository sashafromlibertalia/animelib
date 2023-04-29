namespace Animelib.Seeding.Dto;

public record struct AnimeSeedResponseAttributesDto
(
    string Description,
    string Slug,
    AnimeSeedResponsePosterImageDto PosterImage
);

public record struct AnimeSeedResponsePosterImageDto
(
    string Medium
);

public record AnimeSeedResponseDto
(
    int Id,
    AnimeSeedResponseAttributesDto Attributes
);