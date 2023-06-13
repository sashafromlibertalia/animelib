using Animelib.Core.Users;
using Animelib.Dto.Identity;

namespace Animelib.Services.Abstractions;

public interface IIdentityService
{
    Task<User> CreateUserAsync(CreateUserDto dto);
}
