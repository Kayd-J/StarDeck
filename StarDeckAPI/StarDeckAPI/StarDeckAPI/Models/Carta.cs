using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public class Carta
{
    public string Id { get; set; }

    public int Energia { get; set; }

    public string Raza { get; set; } = null!;

    public int Costo { get; set; }

    public string Nombre { get; set; } = null!;

    public string Tipo { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public bool Disponibilidad { get; set; }

    public string Imagen { get; set; } = null!;

    // public Admin Administradores { get; set; } = null!;

   // public List<Jugador> Jugadores { get; set; } = null!;
}
