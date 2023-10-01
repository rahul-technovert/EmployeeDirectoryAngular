
using EmployeeDirectory.Concerns;

namespace EmployeeDIrectory.Contracts
{
    public interface IEmployeeService
    {
        ICollection<EmployeeCard> GetCards();

        Employee GetEmployee(int id);

        Employee CreateEmployee(Employee employee);

        int UpdateEmployee(Employee updatedEmployee);

        int RemoveEmployee(int id);

    }
}
