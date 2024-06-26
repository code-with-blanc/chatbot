using System.Data;
using Dapper;

public class UserRepository: IUserRepository
{
    private readonly IDbConnection _dbConnection;

    public UserRepository(IDbConnection dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public async Task<IEnumerable<UserEntity>> GetUsersAsync()
    {
        using (var connection = _dbConnection) {
            string query = "SELECT * FROM users";
            var users = await connection.QueryAsync<UserEntity>(query);
            return users;
        }
    }

    public async Task<UserEntity> CreateUserAsync(UserEntity user) {
        using (var connection = _dbConnection) {
            string query = @$"
                INSERT INTO users 
                    (shadow_id, name)
                VALUES 
                    (@shadow_id, @name);

                SELECT
                    `id` AS {nameof(UserEntity.Id)},
                    `shadow_id` AS {nameof(UserEntity.ShadowId)},
                    `name` AS {nameof(UserEntity.Name)}
                 FROM users
                 WHERE 
                    id = LAST_INSERT_ID();
            ";
            
            var createdUser = await connection.QuerySingleAsync<UserEntity>(query, new {
                shadow_id = user.ShadowId,
                name = user.Name,
            });

            return createdUser;
        }
    }
}
