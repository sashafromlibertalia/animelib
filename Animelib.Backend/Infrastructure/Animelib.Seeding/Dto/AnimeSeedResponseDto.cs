namespace Animelib.Seeding.Dto;

public readonly record struct AnimeSeedResponsePosterImageDto
(
    string Medium
);

public readonly record struct AnimeSeedResponseCoverImagerDto
(
    string Large
);

public readonly record struct AnimeSeedResponseAttributesDto
(
    string Description,
    string Slug,
    string CanonicalTitle,
    int? EpisodeCount,
    string Status,
    float AverageRating,
    string Subtype,
    AnimeSeedResponsePosterImageDto? PosterImage,
    AnimeSeedResponseCoverImagerDto? CoverImage
);

public record AnimeSeedResponseDto
(
    int Id,
    AnimeSeedResponseAttributesDto Attributes
);