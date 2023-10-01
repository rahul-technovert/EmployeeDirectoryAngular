export default class Employee {
  id: number;
  firstName: string;
  lastName: string;
  skypeId: string;
  phone: string;
  email: string;
  department: string;
  office: string;
  jobTitle: string;

  constructor(args?: any) {
    args = args ?? {};
    this.id = args.id || 0;
    this.firstName = args.firstName || '';
    this.lastName = args.lastName || '';
    this.skypeId = args.skypeId || '';
    this.phone = args.phone || '';
    this.email = args.email || '';
    this.department = args.department || '';
    this.office = args.office || '';
    this.jobTitle = args.jobTitle || '';
  }
}
