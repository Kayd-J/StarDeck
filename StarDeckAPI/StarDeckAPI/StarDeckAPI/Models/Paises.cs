using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Paises
{
    public int Id { get; set; }

    public string Pais { get; set; } = null!;

    //public virtual ICollection<Jugadores> Jugadores { get; set; } = new List<Jugadores>();
}
