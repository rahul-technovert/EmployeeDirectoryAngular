
using Dapper;
using EmployDirectory.Concerns;
using EmployeeDirectory.Concerns;
using EmployeeDIrectory.Contracts;

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
            return this.services.Get<Employee>(Query.GetEmployeeById, id);
        }

        public Employee SaveEmployee(Employee employee)
        {
            var parameters = new DynamicParameters(employee);

            if(employee.Id != 0)
            {
                this.services.ExecuteProcedure("createEmployee", parameters);

                return employee;
            }

            employee.Id = this.services.ExecuteProcedure("createEmployee", parameters);

            return employee;
        }

        public int RemoveEmployee(int id)
        {
            return this.services.Delete(Query.DeleteEmployeeById, id);
        }


    }
}
