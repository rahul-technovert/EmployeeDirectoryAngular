export default class CategoryFilter {
  department: string;
  office: string;
  jobTitle: string;

  constructor(args?: any) {
    args = args || {};
    this.department = args.department || '';
    this.office = args.office || '';
    this.jobTitle = args.jobTitle || '';
  }
}

export type CategoryType = 'department' | 'office' | 'jobTitle';
