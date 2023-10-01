using EmployeeDirectory.Services;
using EmployeeDIrectory.Services;
using EmployeeDIrectory.Services.Contexts;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


string connectionString = builder.Configuration.GetConnectionString("Default");

builder.Services.AddSingleton<DapperContext>(provider => new DapperContext(connectionString));

builder.Services.AddScoped<DbServices>();
builder.Services.AddScoped<EmployeeServices>();
builder.Services.AddScoped<CategoryServices>();


builder.Services.AddCors(options => 
                    options.AddPolicy("AllowAnyOrigin",
                    builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseCors("AllowAnyOrigin");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
