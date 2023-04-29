using RichEntity.Annotations;

namespace Animelib.Core.Animes;

public partial class Anime : IEntity<int>
{
    public Anime(int id, string title, string slug, string description, string posterUrl, string coverUrl, bool isFinished, int episodesAmount)
    {
        Id = id;
        Title = title;
        Slug = slug;
        Description = description;
        PosterUrl = posterUrl;
        CoverUrl = coverUrl;
        IsFinished = isFinished;
        EpisodesAmount = episodesAmount;
    }
    
    public int Id { get;  }
    public string Title { get; }
    public string Slug { get; }
    public string Description { get; }
    public string PosterUrl { get; }
    public string CoverUrl { get; }
    public bool IsFinished { get; }
    public int EpisodesAmount { get; }
}