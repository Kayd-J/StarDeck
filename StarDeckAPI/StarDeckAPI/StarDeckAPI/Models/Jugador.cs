﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace StarDeckAPI.Models;

public class Jugador
{
    public string Id { get; set; }

    public string Usuario { get; set; } = null!;

    public string Pass { get; set; } = null!;

    public string Nombre { get; set; } = null!;

    public string Apellidos { get; set; } = null!;

    public string Nacionalidad { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public bool Estadodecuenta { get; set; }

    public int Avatar { get; set; }

    public List<Paises> Paises { get; set;}
}
