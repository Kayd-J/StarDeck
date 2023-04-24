using Microsoft.AspNetCore.Mvc;
using StarDeckAPI.Models;

namespace StarDeckAPI.Controllers
{
    [Route("api/Paises")]
    [ApiController]
    public class PaisController : Controller
    {
        private static List<Paises> Pais = new List<Paises>
        {
            new Paises
            {
                Codigo = 0,
                Pais = ""
            }
        };


        [HttpGet("Get")]
        public async Task<ActionResult<List<Paises>>> GetCartas()
        {
            return Ok(Pais);
        }
    }
}
