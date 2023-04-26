using RichEntity.Annotations;

namespace Animelib.Core.Animes;

public partial record Anime
(
    int Id,
    string Title,
    string Slug,
    string Description,
    string PosterUrl,
    string CoverUrl,
    bool IsFinished,
    int EpisodesAmount
) : IEntity<int>;