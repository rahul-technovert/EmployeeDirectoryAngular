
using EmployeeDirectory.Concerns;

namespace EmployeeDIrectory.Contracts
{
    public interface IEmployeeService
    {
        ICollection<EmployeeCard> GetCards();

        Employee GetEmployee(int id);

        public Employee SaveEmployee(Employee employee);

        int RemoveEmployee(int id);

    }
}
