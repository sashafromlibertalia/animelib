namespace Animelib.Dto.Response;

public record BaseExceptionDto(
    string Message,
    int StatusCode,
    string? StackTrace
);