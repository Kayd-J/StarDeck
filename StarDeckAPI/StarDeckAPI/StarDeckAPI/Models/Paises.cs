using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Paises
{
    public int Idpais { get; set; }

    public string Pais { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<Jugador> Jugadores { get; set; } = new List<Jugador>();
}
