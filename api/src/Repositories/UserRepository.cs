using System.Data;
using Dapper;
using MySql.Data.MySqlClient;

public class UserRepository: IUserRepository
{
    private readonly IDbConnection _dbConnection;

    public UserRepository(IDbConnection dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public async Task<IEnumerable<UserEntity>> GetUsersAsync()
    {
        using (var connection = _dbConnection)
        {
            string query = "SELECT * FROM user";
            var result = await connection.QueryAsync<UserEntity>(query);
            return result;
        }
    }
}
