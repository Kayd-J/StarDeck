using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class CartaJugador
{
    public int Idcarta { get; set; }

    public int Idjugador { get; set; }

    public int Cantidad { get; set; }

    public virtual Carta IdcartaNavigation { get; set; } = null!;

    public virtual Jugador IdjugadorNavigation { get; set; } = null!;
}
