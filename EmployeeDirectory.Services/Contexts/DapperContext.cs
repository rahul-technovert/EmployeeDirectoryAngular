
using Microsoft.Data.SqlClient;
using System.Data;

namespace EmployeeDIrectory.Services.Contexts
{
    public class DapperContext 
    {
        private readonly string connString;

        public DapperContext(string connString)
        {
            this.connString = connString;
        }

        public IDbConnection CreateConnection()
        {
            return new SqlConnection(connString);
        }

    }
}
