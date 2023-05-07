using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class CartasJugadores
{
    public string JugadoresId { get; set; } = null!;

    public string CartasId { get; set; } = null!;

    public int? Cantidad { get; set; }

    public virtual Cartas Cartas { get; set; } = null!;

    public virtual Jugadores Jugadores { get; set; } = null!;
}
