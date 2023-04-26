using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class Paises
{
    public string Id { get; set; }
    public string pais { get; set; }
    public Jugador Jugadores { get; set; }
}
