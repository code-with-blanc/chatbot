using System.Data;
using MySql.Data.MySqlClient;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.ConfigureDependencyInjection();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();


public static class SetupExtensions {
    public static void ConfigureDependencyInjection(this WebApplicationBuilder builder) {
        // Services
        builder.Services.AddScoped<UserService>();

        // Repositories
        builder.Services.AddScoped<IUserRepository, UserRepository>();

        // DB
        builder.Services.AddScoped<IDbConnection>(provider => {
            var configuration = provider.GetRequiredService<IConfiguration>();
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            return new MySqlConnection(connectionString);
        });
    }
}
