﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeDirectory.Contracts
{
    public interface ICategoryService
    {
        ICollection<string> GetDepartments();
        ICollection<string> GetOffices();
        ICollection<string> GetJobTitles();
    }
}
