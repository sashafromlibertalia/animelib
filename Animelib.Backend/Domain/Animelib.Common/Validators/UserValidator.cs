using Animelib.Core.Users;
using FluentValidation;

namespace Animelib.Common.Validators;

public class UserValidator : AbstractValidator<User>
{
    public UserValidator()
    {
        RuleFor(user => user.Email)
            .NotEmpty()
            .NotNull()
            .EmailAddress()
            .WithMessage("Email can't be null or empty");
        
        RuleFor(user => user.Username)
            .NotEmpty()
            .NotNull()
            .WithMessage("Email can't be null or empty");
        
        RuleFor(user => user.Password)
            .Length(6, 20)
            .NotEmpty()
            .NotNull()
            .WithMessage("Password can't be null or empty");
    }
}