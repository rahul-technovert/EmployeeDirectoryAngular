using EmployeeDIrectory.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using EmployeeDirectory.Concerns;

namespace EmployeeDIrectory.Controllers
{
    [EnableCors("AllowAnyOrigin")]
    [Route("employees")]
    public class EmployeeControllers : ControllerBase
    {
        private EmployeeServices _employeeServices;

        public EmployeeControllers(EmployeeServices employeeServices)
        {
            this._employeeServices = employeeServices;
        }

        [HttpGet("cards")]
        public IActionResult GetCards()
        {
            return Ok(this._employeeServices.GetCards());
        }

        [HttpPost]
        public IActionResult SaveEmployee([FromBody] Employee employee)
        {

            return Ok(_employeeServices.SaveEmployee(employee));
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployee(int id)
        {
            Employee employee = _employeeServices.GetEmployee(id);

            return Ok(employee);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            int deletedId = _employeeServices.RemoveEmployee(id);

            if (deletedId > 0)
                return Ok(deletedId);

            return NotFound();
        }


    }
}
