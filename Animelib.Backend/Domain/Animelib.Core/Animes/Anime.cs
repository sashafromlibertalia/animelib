using Animelib.Core.Users;
using RichEntity.Annotations;

namespace Animelib.Core.Animes;

public partial class Anime : IEntity<int>
{
    public Anime(int id, string title, string slug, string description, string? posterUrl, string? coverUrl,
        string status, int? episodesCount, float rating, string subtype)
    {
        Id = id;
        Title = title;
        Slug = slug;
        Description = description;
        PosterUrl = posterUrl;
        CoverUrl = coverUrl;
        Status = status;
        EpisodeCount = episodesCount;
        Rating = rating;
        Subtype = subtype;
    }

    public int Id { get; init; }
    public string Title { get; init; }
    public string Slug { get; init; }
    public string Description { get; init; }
    public string? PosterUrl { get; init; }
    public string? CoverUrl { get; init; }
    public string Status { get; init; }
    public int? EpisodeCount { get; init; }
    public float Rating { get; init; }
    public string Subtype { get; init; }
    public IReadOnlyList<WatchList> WatchLists { get; init; } = new List<WatchList>();
}
