using Animelib.Core.Animes;
using RichEntity.Annotations;

namespace Animelib.Core.Users;

public partial class WatchList : IEntity<int>
{
    public WatchList(string name, User owner, IReadOnlyList<Anime> animes)
    {
        Name = name;
        Owner = owner;
        Animes = animes;
    }
    
    public string Name { get; init; }
    public User Owner { get; init; }
    public IReadOnlyList<Anime> Animes { get; init; }
}