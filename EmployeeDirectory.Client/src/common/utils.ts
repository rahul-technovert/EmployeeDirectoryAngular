import { Category, CategoryCount } from 'src/models/count';
import Employee from 'src/models/employee';
import EmployeeCard from 'src/models/employee-card';

export default class Utils {
  getCounts(employees: EmployeeCard[]): CategoryCount {
    const departmentsMap: Map<string, number> = new Map();
    const officesMap: Map<string, number> = new Map();
    const jobTitlesMap: Map<string, number> = new Map();

    for (const employee of employees) {
      // Count departments
      const department = employee.department;
      departmentsMap.set(department, (departmentsMap.get(department) || 0) + 1);

      // Count offices
      const office = employee.office;
      officesMap.set(office, (officesMap.get(office) || 0) + 1);

      // Count job titles
      const jobTitle = employee.jobTitle;
      jobTitlesMap.set(jobTitle, (jobTitlesMap.get(jobTitle) || 0) + 1);
    }

    // Convert maps to arrays of category objects
    const departments: Category[] = Array.from(departmentsMap.entries()).map(
      ([title, total]) => new Category({ title, total })
    );

    const offices: Category[] = Array.from(officesMap.entries()).map(
      ([title, total]) => new Category({ title, total })
    );

    const jobTitles: Category[] = Array.from(jobTitlesMap.entries()).map(
      ([title, total]) => new Category({ title, total })
    );

    return new CategoryCount({ departments, offices, jobTitles });
  }

  mapEmployeeToCard(employee: Employee): EmployeeCard {
    return new EmployeeCard(employee);
  }
}
