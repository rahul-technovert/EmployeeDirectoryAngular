
namespace EmployDirectory.Concerns
{
    public class Query
    {
        public static string Departments = "SELECT Name FROM Departments;";

        public static string Offices = "SELECT Name FROM Offices;";

        public static string JobTitles = "SELECT Name FROM JobTitles;";

        public static string EmployeeCards = "SELECT * FROM CardsView;";

        public static string GetEmployeeById = $"SELECT e.Id, FirstName, LastName, Email, Phone, SkypeId, d.Name AS Department, o.Name AS Office, j.Name AS JobTitle FROM Employees e JOIN Departments d ON e.DepartmentId = d.Id JOIN Offices o ON e.OfficeId = o.Id JOIN JobTitles j ON e.JobTitleId = j.Id WHERE e.Id = @Id;";

        public static string DeleteEmployeeById = $"DELETE FROM Employees OUTPUT deleted.Id where Id=@Id;";

    }
}
