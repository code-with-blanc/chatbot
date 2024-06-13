using Microsoft.AspNetCore.Mvc;

[ApiController]
public class UserController : ControllerBase {
    private readonly IUserRepository _userRepository;
    public UserController(IUserRepository userRepository) {
        _userRepository = userRepository;
    }

    [HttpGet]
    [Route("/api/v1/users")]
    public async Task<IActionResult> GetUsers() {
        var users = await _userRepository.GetUsersAsync();
        return Ok(users);
    }

}