using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Pais
{
    public string Id { get; set; }
    public string pais { get; set; } = null!;

    public Jugador Jugadores { get; set; }

}
