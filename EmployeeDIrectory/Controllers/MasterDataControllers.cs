using EmployeeDirectory.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeDIrectory.API.Controllers
{
    [EnableCors("AllowAnyOrigin")]
    [Route("master")]
    public class MasterDataControllers : ControllerBase
    {
        private readonly CategoryServices categoryServices;

        public MasterDataControllers(CategoryServices services)
        {
            this.categoryServices = services;
        }

        [HttpGet("employees")]
        public ActionResult EmployeeMaster()
        {
            var departments = categoryServices.GetDepartments();
            var offices = categoryServices.GetOffices();
            var jobTitles = categoryServices.GetJobTitles();

            return Ok(new { departments, offices, jobTitles });
        }

    }
}
