using Animelib.Core.Animes;
using FluentValidation;

namespace Animelib.Common.Validators;

public class AnimeValidator : AbstractValidator<Anime>
{
    public AnimeValidator()
    {
        RuleFor(anime => anime.Id)
            .NotEmpty().GreaterThan(0).WithMessage("ID can't be negative or zero");
        
        RuleFor(anime => anime.Description)
            .NotNull().NotEmpty().WithMessage("Description can't be null or empty");
        
        RuleFor(anime => anime.Slug)
            .NotEmpty().NotNull().WithMessage("Slug can't be null or empty");
        
        RuleFor(anime => anime.Title)
            .NotEmpty().NotNull().WithMessage("Title can't be null or empty");

        RuleFor(anime => anime.EpisodeCount)
            .NotEmpty().GreaterThanOrEqualTo(0).WithMessage("Episodes can't be a negative number");

        RuleFor(anime => anime.Status)
            .NotEmpty().NotNull().WithMessage("Status can't empty or null");

        RuleFor(anime => anime.Rating)
            .NotEmpty().GreaterThanOrEqualTo(0).WithMessage("Rating can't be a negative number");
        
        RuleFor(anime => anime.Subtype)
            .NotEmpty().NotNull().WithMessage("Subtype can't be empty or null");
    }
}