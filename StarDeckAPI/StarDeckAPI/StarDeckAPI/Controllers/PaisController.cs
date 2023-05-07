using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarDeckAPI.Data;
using StarDeckAPI.Models;

namespace StarPaisAPI.Controllers
{
    [Route("api/Paises")]
    [ApiController]
    public class PaisController : Controller
    {
        private readonly DataContext _context;

        public PaisController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("GetPaises")]
        public async Task<ActionResult<List<Paises>>> GetPaises()
        {
            return Ok(await _context.Paises.ToListAsync());
        }

        [HttpGet("ID")]
        public async Task<ActionResult<Paises>> GetPais(int ID)
        {
            var Pais = await _context.Paises.FindAsync(ID);
            if (Pais == null)
                return NotFound("Lo sentimos, el Pais no existe");
            return Ok(Pais);
        }
        /// <summary>
        /// PUT: api/Carta
        /// </summary>
        /// <param name="Pais"></param>
        /// <returns>cambia datos de Carta</returns>
        [HttpPut("PutPaises")]
        public async Task<IActionResult> PutPaises(Paises Pais)
        {

            _context.Entry(Pais).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaisExists(Pais.Id))
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
        /// POST: api/Paises
        /// </summary>
        /// <param name="Pais"></param>
        /// <returns>crea una Pais <returns>
        [HttpPost("PostPais")]
        public async Task<ActionResult<Paises>> PostPais(Paises Pais)
        {
            _context.Paises.Add(Pais);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PaisExists(Pais.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPais", new { id = Pais.Id }, Pais);
        }

        /// <summary>
        /// DELETE: api/Pais/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>borra Pais</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePais(string id)
        {
            var Pais = await _context.Paises.FindAsync(id);
            if (Pais == null)
            {
                return NotFound();
            }

            _context.Paises.Remove(Pais);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /// <summary>
        /// Existencia de un Pais
        /// </summary>
        /// <param name="id"></param>
        /// <returns>si Pais existe o no</returns>
        private bool PaisExists(int ID)
        {
            return _context.Paises.Any(e => e.Id == ID);
        }
    }

}