using RichEntity.Annotations;

namespace Animelib.Core.Users;

public partial class User : IEntity<int>
{
    private readonly List<WatchList> _watchLists;
    public User(string username, string email, string password)
    {
        Username = username;
        Email = email;
        Password = password;
        _watchLists = new List<WatchList>();
    }

    public string Username { get; init; }
    public string Email { get; init; }
    public string Password { get; init; }
    public IReadOnlyList<WatchList> WatchLists => _watchLists;
    
    public void AddWatchList(WatchList watchList)
    {
        if (watchList is null)
            throw new NullReferenceException("WatchList cannot be null");
        
        _watchLists.Add(watchList);
    }
}
