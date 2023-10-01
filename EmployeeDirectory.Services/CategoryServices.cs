using EmployDirectory.Concerns;
using EmployeeDirectory.Contracts;
using EmployeeDIrectory.Services;


namespace EmployeeDirectory.Services
{
    public class CategoryServices : ICategoryService
    {
        private readonly DbServices dbServices;

        public CategoryServices(DbServices dbServices)
        {
            this.dbServices = dbServices;
        }

        public ICollection<string> GetDepartments()
        {
            return dbServices.GetAll<string>(Query.Departments);
        }

        public ICollection<string> GetOffices()
        {
            return dbServices.GetAll<string>(Query.Offices);

        } 
        
        public ICollection<string> GetJobTitles()
        {
            return dbServices.GetAll<string>(Query.JobTitles);

        }
    }
}
