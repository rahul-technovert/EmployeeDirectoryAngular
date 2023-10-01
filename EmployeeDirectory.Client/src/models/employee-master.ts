export default class EmployeeMaster {
  departments: string[];
  offices: string[];
  jobTitles: string[];

  constructor(args?: any) {
    args = args || {};
    this.departments = args.departments || [];
    this.offices = args.offices || [];
    this.jobTitles = args.jobTitles || [];
  }
}
