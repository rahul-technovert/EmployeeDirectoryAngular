
using Dapper;
using EmployDirectory.Concerns;
using EmployeeDirectory.Concerns;
using EmployeeDIrectory.Contracts;
using System.Data;

namespace EmployeeDIrectory.Services
{
    public class EmployeeServices : IEmployeeService
    {
        private readonly DbServices services;

        public EmployeeServices(DbServices services)
        {
            this.services = services;
        }

        public ICollection<EmployeeCard> GetCards()
        {
           return  services.GetAll<EmployeeCard>(Query.EmployeeCards);
        }

        public Employee GetEmployee(int id)
        {
            return this.services.Get<Employee>(Query.EmployeeById, id);
        }

        public Employee CreateEmployee(Employee employee)
        {
            var parameters = new DynamicParameters(employee);
            parameters.Add("@EmployeeID", dbType: DbType.Int32, direction: ParameterDirection.Output);

            this.services.ExecuteProcedure("createEmployee", parameters);

            employee.Id = parameters.Get<int>("@EmployeeID");

            return employee;
        }

        public int UpdateEmployee(Employee updatedEmployee)
        {
            var parameters = new DynamicParameters(updatedEmployee);

            return services.ExecuteProcedure("updateEmployee", parameters);

        }

        public int RemoveEmployee(int id)
        {
            return this.services.Delete(Query.DeleteEmployeeById, id);
        }


    }
}
