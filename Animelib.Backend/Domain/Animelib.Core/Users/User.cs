using RichEntity.Annotations;

namespace Animelib.Core.Users;

public partial class User : IEntity<int>
{
    public User(int id)
    {
        Id = id;
    }
    
    public int Id { get; }
}