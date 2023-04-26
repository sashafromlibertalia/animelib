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

        RuleFor(anime => anime.EpisodesAmount)
            .NotEmpty().GreaterThanOrEqualTo(0).WithMessage("Episodes can't be a negative number");

        RuleFor(anime => anime.CoverUrl)
            .NotEmpty().NotNull().WithMessage("Cover URL can't empty or null");

        RuleFor(anime => anime.PosterUrl)
            .NotNull().NotEmpty().WithMessage("Poster URL can't empty or null");

        RuleFor(anime => anime.IsFinished)
            .NotNull();
    }
}