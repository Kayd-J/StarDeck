using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarDeckAPI.Data;
using StarDeckAPI.Models;

namespace StarDeckAPI.Controllers
{
    [Route("api/Decks")]
    [ApiController]
    public class DeckController : Controller
    {
        private readonly DataContext _context;

        public DeckController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("GetDecks")]
        public async Task<ActionResult<List<Decks>>> GetDecks()
        {
            return Ok(await _context.Decks.ToListAsync());
        }

        [HttpGet("ID")]
        public async Task<ActionResult<Decks>> GetDeck(string ID)
        {
            var deck = await _context.Decks.FindAsync(ID);
            if (deck == null)
                return NotFound("Lo sentimos, el deck no existe");
            return Ok(deck);
        }
        /// <summary>
        /// PUT: api/Carta
        /// </summary>
        /// <param name="Deck"></param>
        /// <returns>cambia datos de Carta</returns>
        [HttpPut("PutDecks")]
        public async Task<IActionResult> PutDecks(Decks deck)
        {

            _context.Entry(deck).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeckExists(deck.Id))
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
        /// POST: api/Decks
        /// </summary>
        /// <param name="Deck"></param>
        /// <returns>crea una Deck <returns>
        [HttpPost("PostDeck")]
        public async Task<ActionResult<Decks>> PostDeck(Decks deck)
        {
            _context.Decks.Add(deck);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DeckExists(deck.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDeck", new { id = deck.Id }, deck);
        }

        /// <summary>
        /// DELETE: api/Deck/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>borra Deck</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeck(string id)
        {
            var deck = await _context.Decks.FindAsync(id);
            if (deck == null)
            {
                return NotFound();
            }

            _context.Decks.Remove(deck);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /// <summary>
        /// Existencia de un deck
        /// </summary>
        /// <param name="id"></param>
        /// <returns>si deck existe o no</returns>
        private bool DeckExists(string ID)
        {
            return _context.Decks.Any(e => e.Id == ID);
        }
    }

}
