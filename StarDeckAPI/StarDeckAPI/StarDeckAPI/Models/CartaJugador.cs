﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class CartaJugador
{
    public string Idcarta { get; set; }

    public string Idjugador { get; set; }

    public int Cantidad { get; set; }

    [JsonIgnore]
    public virtual Carta IdcartaNavigation { get; set; } = null!;

    [JsonIgnore]
    public virtual Jugador IdjugadorNavigation { get; set; } = null!;
}
