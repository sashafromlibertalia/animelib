using Animelib.Common.Exceptions;
using Animelib.Dto.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Animelib.Controllers.Filters;

public sealed class CustomExceptionFilter : ExceptionFilterAttribute
{
    public override void OnException(ExceptionContext context)
    {
        if (context.Exception is EntityNotFoundException)
        {
            context.HttpContext.Response.StatusCode = StatusCodes.Status404NotFound;
        }
        
        context.Result = new JsonResult(new BaseExceptionDto
        (
            context.Exception.Message,
            context.HttpContext.Response.StatusCode,
            context.Exception.StackTrace
        ));

        base.OnException(context);
    }
}