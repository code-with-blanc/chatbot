public interface IUserRepository {
    public Task<IEnumerable<UserEntity>> GetUsersAsync();
}