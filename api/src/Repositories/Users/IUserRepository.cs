public interface IUserRepository {
    public Task<UserEntity> CreateUserAsync(UserEntity user);
    public Task<IEnumerable<UserEntity>> GetUsersAsync();
}