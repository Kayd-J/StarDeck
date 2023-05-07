using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarDeckAPI.Data;
using StarDeckAPI.Models;

namespace StarPlanetaAPI.Controllers
{
    [Route("api/Planetas")]
    [ApiController]
    public class PlanetasController : Controller
    {
        private readonly DataContext _context;

        public PlanetasController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("GetPlanetas")]
        public async Task<ActionResult<List<Planetas>>> GetPlanetas()
        {
            return Ok(await _context.Planetas.ToListAsync());
        }

        [HttpGet("ID")]
        public async Task<ActionResult<Planetas>> GetPlaneta(string ID)
        {
            var Planeta = await _context.Planetas.FindAsync(ID);
            if (Planeta == null)
                return NotFound("Lo sentimos, el Planeta no existe");
            return Ok(Planeta);
        }
        /// <summary>
        /// PUT: api/Carta
        /// </summary>
        /// <param name="Planeta"></param>
        /// <returns>cambia datos de Carta</returns>
        [HttpPut("PutPlanetas")]
        public async Task<IActionResult> PutPlanetas(Planetas Planeta)
        {

            _context.Entry(Planeta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlanetaExists(Planeta.Id))
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
        /// POST: api/Planetas
        /// </summary>
        /// <param name="Planeta"></param>
        /// <returns>crea una Planeta <returns>
        [HttpPost("PostPlaneta")]
        public async Task<ActionResult<Planetas>> PostPlaneta(Planetas Planeta)
        {
            _context.Planetas.Add(Planeta);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PlanetaExists(Planeta.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPlaneta", new { id = Planeta.Id }, Planeta);
        }

        /// <summary>
        /// DELETE: api/Planeta/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>borra Planeta</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlaneta(string id)
        {
            var Planeta = await _context.Planetas.FindAsync(id);
            if (Planeta == null)
            {
                return NotFound();
            }

            _context.Planetas.Remove(Planeta);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /// <summary>
        /// Existencia de un Planeta
        /// </summary>
        /// <param name="id"></param>
        /// <returns>si Planeta existe o no</returns>
        private bool PlanetaExists(string ID)
        {
            return _context.Planetas.Any(e => e.Id == ID);
        }
    }

}
