using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly AppointmetnsContext context;

        public AppointmentsController(AppointmetnsContext context)
        {
            this.context = context;
        }

        public IActionResult Post([FromForm]string name, [FromForm] string email, [FromForm] string date)
        {
            try
            {
                Table tb = new Table();
                tb.Name = name;
                tb.Email = email;
                tb.Date = DateTime.Parse(date);

                context.Table.Add(tb);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }

            return Ok();
        }
    }
}
