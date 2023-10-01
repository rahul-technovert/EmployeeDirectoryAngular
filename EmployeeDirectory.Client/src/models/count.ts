export class CategoryCount {
  departments: Category[];
  offices: Category[];
  jobTitles: Category[];

  constructor(args?: any) {
    args = args ?? {};
    this.departments = args.departments || [];
    this.offices = args.offices || [];
    this.jobTitles = args.jobTitles || [];
  }
}

export class Category {
  title: string;
  total: number;

  constructor(args?: any) {
    args = args ?? {};
    this.title = args.title || '';
    this.total = args.total || '';
  }
}
