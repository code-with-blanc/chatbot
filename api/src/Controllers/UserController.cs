using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/v1")]
public class UserController : ControllerBase {
    private readonly UserService _userService;
    public UserController(UserService userService) {
        _userService = userService;
    }

    [HttpPost]
    [Route("users/shadow-user")]
    public async Task<IActionResult> PostShadowUser() {
        var newUser = await _userService.CreateShadowUserAsync();
        return Ok(newUser);
    }

    [HttpGet]
    [Route("users")]
    public async Task<IActionResult> GetUsers() {
        var users = await _userService.GetUsersAsync();
        return Ok(users);
    }
}