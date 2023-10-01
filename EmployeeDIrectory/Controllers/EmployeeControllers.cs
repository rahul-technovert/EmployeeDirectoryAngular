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
        public IActionResult CreateEmployee([FromBody] Employee employee)
        {

            return Ok(_employeeServices.CreateEmployee(employee));
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


        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(int id, [FromBody] Employee employee)
        {
            int affectedRow = _employeeServices.UpdateEmployee(employee);

            if (affectedRow > 0)
                return Ok(employee);

            return NotFound();
        }

    }
}
