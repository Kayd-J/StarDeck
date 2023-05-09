using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using StarDeckAPI.Data;
using StarDeckAPI.Models;

namespace StarDeckAPI.Controllers
{
    [Route("api/Cartas")]
    [ApiController]
    public class CartaController : Controller
    {
        private readonly DataContext _context;

        public CartaController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("Get")]
        public async Task<ActionResult<List<Cartas>>> GetCartas()
        {
            return Ok(await _context.Cartas.ToListAsync());
        }

        [HttpGet("ID")]
        public async Task<ActionResult<Cartas>> GetCarta(string ID)
        {
            var carta = await _context.Cartas.FindAsync(ID);
            if (carta == null)
                return NotFound("Lo sentimos, la carta no existe");
            return Ok(carta);
        }
        /// <summary>
        /// PUT: api/Carta
        /// </summary>
        /// <param name="Carta"></param>
        /// <returns>cambia datos de Carta</returns>
        [HttpPut("PutCarta")]
        public async Task<IActionResult> PutCarta(Cartas carta)
        {

            _context.Entry(carta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartaExists(carta.Id))
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
        [HttpPost("PostCarta")]
        public async Task<ActionResult<Cartas>> PostCarta(Cartas carta)
        {
            _context.Cartas.Add(carta);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CartaExists(carta.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCarta", new { id = carta.Id }, carta);
        }

        [HttpPost("AddCard")]
        public void AddCard([FromBody] Cartas carta)
        {
            _context.AddCard(carta.Id, carta.Energia, carta.Raza,
            carta.Costo, carta.Nombre, carta.Tipo, carta.Descripcion, carta.Disponibilidad, carta.Imagen, carta.AdministradoresId);
        }

        /// <summary>
        /// DELETE: api/Carta/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>borra Carta</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCarta(string id)
        {
            var carta = await _context.Cartas.FindAsync(id);
            if (carta == null)
            {
                return NotFound();
            }

            _context.Cartas.Remove(carta);
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
            return _context.Cartas.Any(e => e.Id == ID);
        }

        // GET: api/Decks/HasCardInDeck/{deckId}/{cardId}
        [HttpGet("HasCardInDeck/{decksId}/{cartasId}")]
        public async Task<ActionResult<bool>> HasCardInDeck(string decksId, string cartasId)
        {
            var deck = await _context.Decks.FindAsync(decksId);

            if (deck == null)
            {
                return NotFound();
            }

            bool cardExistsInDeck = await _context.Decks_Cartas
                .AnyAsync(dc => dc.DecksId == decksId && dc.CartasId == cartasId);

            return Ok(cardExistsInDeck);
        }
        // Agregar Carta a deck
        [HttpPost("AddCardToDeck")]
        public async Task<IActionResult> AddCardToDeck(string DecksId, string CartasId)
        {
            try
            {
                var deckIdParam = new SqlParameter("@DecksId", DecksId);
                var cardIdParam = new SqlParameter("@CartasId", CartasId);
                await _context.Database.ExecuteSqlRawAsync("EXECUTE AddCardToDeck @DecksId, @CartasId", deckIdParam, cardIdParam);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}


