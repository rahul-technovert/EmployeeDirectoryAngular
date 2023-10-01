export default class EmployeeCard {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  jobTitle: string;
  office: string;

  constructor(args?: any) {
    args = args ?? {};
    this.id = args.id || 0;
    this.firstName = args.firstName || '';
    this.lastName = args.lastName || '';
    this.department = args.department || '';
    this.office = args.office || '';
    this.jobTitle = args.jobTitle || '';
  }
}
