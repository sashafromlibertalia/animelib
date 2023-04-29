using RichEntity.Annotations;

namespace Animelib.Core.Users;

public partial class User : IEntity<int>
{
    public User(int id, string username, UserRoleEnum role = UserRoleEnum.Viewer)
    {
        Id = id;
        Username = username;
        Role = role;
    }
    
    public int Id { get;  }
    public string Username { get; }
    public UserRoleEnum Role { get; }
}