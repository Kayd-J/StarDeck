using Microsoft.AspNetCore.Mvc;
using StarDeckAPI.Models;

namespace StarDeckAPI.Controllers
{
    [Route("api/Cartas")]
    [ApiController]
    public class CartaController : Controller
    {
        private static List<Carta> Cartas= new List<Carta>
        {
            new Carta
            {
                ID = 0,
                Nombre = "",
                Tipo = "",
                Raza = "",
                Energia = 0,
                Costo = 0,
                Disponibilidad = true,
            }
        };


        [HttpGet("Get")]
        public async Task<ActionResult<List<Carta>>> GetCartas()
        {
            return Ok(Cartas);
        }

        [HttpGet("ID")]
        public async Task<ActionResult<Carta>> GetCarta(int ID)
        {
            var carta = Cartas.Find(x => x.ID == ID);
            if (carta == null)
                return NotFound("Lo sentimos, la carta no existe");
            return Ok(carta);
        }

        [HttpPost("Agregar")]
        public async Task<ActionResult<List<Carta>>> AddCarta(Carta carta)
        {
            Cartas.Add(carta);
            return Ok(Cartas);
        }

        [HttpPut("Editar")]
        public async Task<ActionResult<List<Carta>>> UpdateCarta(int ID, Carta request)
        {
            var carta = Cartas.Find(x => x.ID == request.ID);
            if (carta == null)
                return NotFound("Lo sentimos, la carta no existe");

            carta.Nombre = request.Nombre;
            carta.Tipo = request.Tipo;
            carta.Raza = request.Raza;
            carta.Energia = request.Energia;
            carta.Costo = request.Costo;
            carta.Disponibilidad = request.Disponibilidad;

            return Ok(Cartas);
        }

        [HttpDelete("Borrar")]
        public async Task<ActionResult<List<Carta>>> DeleteCarta(int ID)
        {
            var carta = Cartas.Find(x => x.ID == ID);
            if (carta == null)
                return NotFound("Lo sentimos, la carta no existe");

            Cartas.Remove(carta);

            return Ok(Cartas);
        }
    }
}
