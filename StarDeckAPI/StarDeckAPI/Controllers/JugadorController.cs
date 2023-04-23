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
                    ID = 0,
                    Nombre = "",
                    Apellido = "",
                    Usuario = "",
                    País = 0,
                    Avatar = "",
                    Correo = "",
                    Contraseña = "",
                    Estado = 0,
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
            var jugador = Jugadores.Find(x => x.ID == ID);
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
            var jugador = Jugadores.Find(x => x.ID == request.ID);
            if (jugador == null)
                return NotFound("Lo sentimos, el jugador no existe");
            
            jugador.Nombre = request.Nombre;
            jugador.Apellido = request.Apellido;
            jugador.Usuario = request.Usuario;
            jugador.País = request.País; 
            jugador.Avatar = request.Avatar;
            jugador.Correo = request.Correo;
            jugador.Contraseña = request.Contraseña;
            jugador.Estado = request.Estado;

            return Ok(Jugadores);
        }

        [HttpDelete("Borrar")]
        public async Task<ActionResult<List<Jugador>>> DeleteJugador(int ID)
        {
            var jugador = Jugadores.Find(x => x.ID == ID);
            if (jugador == null)
                return NotFound("Lo sentimos, el jugador no existe");

            Jugadores.Remove(jugador);

            return Ok(Jugadores);
        }
    }
}
