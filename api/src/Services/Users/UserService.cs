
public class UserService {
    private IUserRepository _userRepository;

    public UserService(IUserRepository userRepository) {
        _userRepository = userRepository;
    }

    public async Task<UserDto> CreateShadowUserAsync() {
        var shadowUserId = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
        
        var newUser = await _userRepository.CreateUserAsync(new UserEntity{
            ShadowId = shadowUserId,
            Name = "Temporary User"
        });

        return new UserDto {
            Id = newUser.Id, Name = newUser.Name
        };
    }

    public async Task<IEnumerable<UserDto>> GetUsersAsync() {
        var userEntities = await _userRepository.GetUsersAsync();

        return userEntities.Select((userEntity) => new UserDto {
            Id = userEntity.Id,
            Name = userEntity.Name,
        });
    }
}