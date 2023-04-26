using DetailTEC.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;
using StarDeckAPI.Data;
using StarDeckAPI.Models;

namespace StarDeckAPI.Controllers
{
    [Route("api/Jugadores")]
    [ApiController]
    public class JugadorController : ControllerBase
    {
        private readonly DataContext _context;

        public JugadorController(DataContext context)
        {
            _context = context;
        }


        /// <summary>
        /// GET: api/Clientes
        /// </summary>
        /// <returns>Datos de clientes</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Jugador>>> GetJugadores()
        {
            return await _context.Jugadores.ToListAsync();
        }

        /// <summary>
        /// GET: api/Clientes/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Datos de cliente especifico</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Jugador>> GetJugador(string id)
        {
            var jugador = await _context.Jugadores.FindAsync(id);

            if (jugador == null)
            {
                return NotFound();
            }

            return jugador;
        }

        /// <summary>
        /// PUT: api/Clientes/5
        /// </summary>
        /// <param name="cliente"></param>
        /// <returns>Cambia datos de un cliente</returns>
        [HttpPut]
        public async Task<IActionResult> PutJugador(Jugador jugador)
        {

            _context.Entry(jugador).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JugadorExists(jugador.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        /// <summary>
        /// POST: api/Jugador
        /// </summary>
        /// <param name="jugador"></param>
        /// <returns>Creacion de Jugador</returns>
        [HttpPost]
        public async Task<ActionResult<Jugador>> PostJugador(Jugador jugador)
        {
            _context.Jugadores.Add(jugador);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (JugadorExists(jugador.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetJugador", new { id = jugador.Id }, jugador);
        }
        /// <summary>
        /// Revision de login de jugador
        /// </summary>
        /// <param name="auth"></param>
        /// <returns>Confirmacion de login</returns>
        [HttpPost]
        [Route("Login/")]

        public async Task<ActionResult<Login>> PostLogin(Auth auth)
        {
            var result = _context.Jugadores.Any(e => e.Usuario == auth.Usuario && e.Pass == auth.Password);

            var status = new Login { Status = "Ok" };

            var error = new Login { Status = "Error" };

            if (!result)
            {
                return error;
            }

            return Ok(status);

        }

        /// <summary>
        /// DELETE: api/Clientes/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Borra un cliente</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJugador(string id)
        {
            var jugador = await _context.Jugadores.FindAsync(id);
            if (jugador == null)
            {
                return NotFound();
            }

            _context.Jugadores.Remove(jugador);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /// <summary>
        /// Revisa si existe un cliente
        /// </summary>
        /// <param name="id"></param>
        /// <returns>existencia de un cliente</returns>
        private bool JugadorExists(string id)
        {
            return _context.Jugadores.Any(e => e.Id == id);
        }
    }
}