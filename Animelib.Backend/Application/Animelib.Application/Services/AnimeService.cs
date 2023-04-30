using Animelib.Common.Exceptions;
using Animelib.Core.Animes;
using Animelib.DataAccess.Abstractions;
using Animelib.Dto.Animes;
using Animelib.Mappings.Mappings;
using Animelib.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Animelib.Services.Services;

public class AnimeService : IAnimeService
{
    private readonly IDatabaseContext _context;
    
    public AnimeService(IDatabaseContext context)
    {
        _context = context;
    }

    public Task<IEnumerable<AnimeDto>> GetAnimesAsync(int page, int take)
    {
        var animes = _context.Animes
            .Skip((page - 1) * take)
            .Take(take)
            .AsEnumerable()
            .Select(x => x.ToDto());
        
        return Task.FromResult(animes);
    }

    public async Task<AnimeDto> GetAnimeByIdAsync(int id)
    {
        var anime = await _context.Animes.FindAsync(id);
        if (anime is null)
        {
            throw EntityNotFoundException.For<Anime>(id);
        }

        return anime.ToDto();
    }

    public async Task<AnimeDto> GetAnimeBySlugAsync(string slug)
    {
        var anime = await _context.Animes.FirstOrDefaultAsync(x => x.Slug == slug);
        if (anime is null)
        {
            throw new EntityNotFoundException($"Anime with this slug not found: {slug}");
        }
        
        return anime.ToDto();
    }
}