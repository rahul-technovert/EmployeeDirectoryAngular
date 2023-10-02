
using Dapper;
using EmployeeDIrectory.Services.Contexts;
using System.Data;

namespace EmployeeDIrectory.Services
{
    public class DbServices
    {
        private DapperContext _context;

        public DbServices(DapperContext context)
        {
            this._context = context;
        }

        public ICollection<T> GetAll<T>(string query) where T : class
        {
            using (var connection = _context.CreateConnection())
            {
                return connection.Query<T>(query).ToList();
            }
        }
        
        public T Get<T>(string query, int id) where T : class
        {
            using (var connection = _context.CreateConnection())
            {
                return connection.QuerySingleOrDefault<T>(query, new { id });
            }
        }

        public int Delete(String query, int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return connection.ExecuteScalar<int>(query, new { id });
            }
        }

        public int ExecuteProcedure(string procedure, DynamicParameters parameters)
        {
            using (var connection = _context.CreateConnection())
            {
                return connection.ExecuteScalar<int>(procedure, parameters, commandType: CommandType.StoredProcedure);
            }
        }
    }

}

