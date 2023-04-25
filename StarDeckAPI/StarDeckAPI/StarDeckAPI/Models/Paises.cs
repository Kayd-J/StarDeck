using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Paises
{
    public int Idpais { get; set; }

    public string Pais { get; set; } = null!;

    public virtual ICollection<Jugador> Jugadors { get; set; } = new List<Jugador>();
}
