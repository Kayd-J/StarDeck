using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Decks
{
    public string Id { get; set; } = null!;

    public string? Nombre { get; set; }

    public string JugadoresId { get; set; } = null!;

    public virtual Jugadores Jugadores { get; set; } = null!;
}
