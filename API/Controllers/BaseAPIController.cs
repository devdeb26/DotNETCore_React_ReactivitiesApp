using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseAPIController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator mediator =>
            _mediator ??= HttpContext.RequestServices.GetService<IMediator>()
                ?? throw new Exception("Mediator service not found");
    }
}
