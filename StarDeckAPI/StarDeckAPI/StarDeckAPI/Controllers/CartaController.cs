using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarDeckAPI.Models;

namespace StarDeckAPI.Controllers
{
    [Route("api/Cartas")]
    [ApiController]
    public class CartaController : Controller
    {
        private readonly StarDeckContext _context;

        public CartaController(StarDeckContext context)
        {
            _context = context;
        }

        [HttpGet("Get")]
        public async Task<ActionResult<List<Carta>>> GetCartas()
        {
            return Ok(await _context.Carta.ToListAsync());
        }

        [HttpGet("ID")]
        public async Task<ActionResult<Carta>> GetCarta(string ID)
        {
            var carta = await _context.Carta.FindAsync(ID);
            if (carta == null)
                return NotFound("Lo sentimos, la carta no existe");
            return Ok(carta);
        }
        /// <summary>
        /// PUT: api/Carta
        /// </summary>
        /// <param name="Carta"></param>
        /// <returns>cambia datos de Carta</returns>
        [HttpPut]
        public async Task<IActionResult> PutCarta(Carta carta)
        {

            _context.Entry(carta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartaExists(carta.Idcarta))
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
        /// POST: api/Carta
        /// </summary>
        /// <param name="Carta"></param>
        /// <returns>crea una carta <returns>
        [HttpPost]
        public async Task<ActionResult<Carta>> PostCarta(Carta carta)
        {
            _context.Carta.Add(carta);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CartaExists(carta.Idcarta))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCarta", new { id = carta.Idcarta }, carta);
        }

        /// <summary>
        /// DELETE: api/Carta/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>borra Carta</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCarta(string id)
        {
            var carta = await _context.Carta.FindAsync(id);
            if (carta == null)
            {
                return NotFound();
            }

            _context.Carta.Remove(carta);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /// <summary>
        /// Existencia de una carta
        /// </summary>
        /// <param name="id"></param>
        /// <returns>si carta existe o no</returns>
        private bool CartaExists(string ID)
        {
            return _context.Carta.Any(e => e.Idcarta == ID);
        }
    }

}
