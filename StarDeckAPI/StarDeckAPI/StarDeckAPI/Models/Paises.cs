using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Paises
{
    public string Id { get; set; }
    public string pais { get; set; }
    public List<Jugador> Jugadores { get; set; } = null!;
}
