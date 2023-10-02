using EmployDirectory.Concerns;
using EmployeeDirectory.Contracts;
using EmployeeDIrectory.Services;


namespace EmployeeDirectory.Services
{
    public class CategoryServices : ICategoryService
    {
        private readonly DbServices db;

        public CategoryServices(DbServices dbServices)
        {
            this.db = dbServices;
        }

        public ICollection<string> GetDepartments()
        {
            return db.GetAll<string>(Query.Departments);
        }

        public ICollection<string> GetOffices()
        {
            return db.GetAll<string>(Query.Offices);

        } 
        
        public ICollection<string> GetJobTitles()
        {
            return db.GetAll<string>(Query.JobTitles);

        }
    }
}
