using Microsoft.AspNetCore.Mvc;

namespace ChatbotApi.Controllers;

[ApiController]
[Route("/api/v1/")]
public class HealthController : ControllerBase {
    
    [HttpGet]
    [Route("health")]
    public IActionResult GetHealth() {
        return Ok(new { status = "up" });
    }
}

