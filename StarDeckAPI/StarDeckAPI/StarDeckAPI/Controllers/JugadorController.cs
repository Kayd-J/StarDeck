using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StarDeckAPI.Models;

namespace StarDeckAPI.Controllers
{
    [Route("api/Jugadores")]
    [ApiController]
    public class JugadorController : ControllerBase
    {
        private static List<Jugador> Jugadores = new List<Jugador>
        {
            new Jugador
            {
                Idjugador = 0,
                Nombre = "",
                Apellidos = "",
                Usuario = "",
                Idpais = 0,
                Avatar = 0,
                Correo = "",
                Pass = "",
                Estadodecuenta = true
            }
        };


        [HttpGet("Get")]
        public async Task<ActionResult<List<Jugador>>> GetJugadores()
        {
            return Ok(Jugadores);
        }

        [HttpGet("ID")]
        public async Task<ActionResult<Jugador>> GetJugador(int ID)
        {
            var jugador = Jugadores.Find(x => x.Idjugador == ID);
            if (jugador == null)
                return NotFound("Lo sentimos, el jugador no existe");
            return Ok(jugador);
        }

        [HttpPost("Agregar")]
        public async Task<ActionResult<List<Jugador>>> AddJugador(Jugador jugador)
        {
            Jugadores.Add(jugador);
            return Ok(Jugadores);
        }

        [HttpPut("Editar")]
        public async Task<ActionResult<List<Jugador>>> UpdateJugador(int ID, Jugador request)
        {
            var jugador = Jugadores.Find(x => x.Idjugador == request.Idjugador);
            if (jugador == null)
                return NotFound("Lo sentimos, el jugador no existe");
            
            jugador.Nombre = request.Nombre;
            jugador.Apellidos = request.Apellidos;
            jugador.Usuario = request.Usuario;
            jugador.Idpais = request.Idpais; 
            jugador.Avatar = request.Avatar;
            jugador.Correo = request.Correo;
            jugador.Pass = request.Pass;
            jugador.Estadodecuenta = request.Estadodecuenta;

            return Ok(Jugadores);
        }

        [HttpDelete("Borrar")]
        public async Task<ActionResult<List<Jugador>>> DeleteJugador(int ID)
        {
            var jugador = Jugadores.Find(x => x.Idjugador == ID);
            if (jugador == null)
                return NotFound("Lo sentimos, el jugador no existe");

            Jugadores.Remove(jugador);

            return Ok(Jugadores);
        }
    }
}
